const sc = require('./schemas')
const mng = require('mongoose') 
const atlas_connect = "mongodb+srv://admin:adminsyncs42@cluster-syncs-2tbq0.mongodb.net/syncs"

mng.connect(atlas_connect)

var clientModel = mng.model('client', new mng.Schema(sc.client), "clients")
var artistModel = mng.model('artist', new mng.Schema(sc.artist), "artists")
var sheetModel = mng.model('sheet', new mng.Schema(sc.sheet), "sheet")

exports.insertClient = (data) => {
    //data = JSON.parse(data)
    var data = new clientModel({
        "@id" : "http://syncsschema.com/user/" + data.id,
        identifier: data.id,
        birthDate : data.birthday,
        email : data.email,
        alternateName : data.name,
        accessCode : data.passwd,
        image : data.profileImg
    })
    console.log(data)
    data.save()
}

exports.insertSheet = (data) => {

    var dataSheet = new sheetModel({
        "@id" : "http://syncsschema.com/sheet/" + data.id,
        identifier: data.id,
        name : data.name,
        genre : data.genres ,
        associatedMedia : data.sheet, 
        isAccessibleForFree: data.public,
        publisher: data.source,
        author: data.author,
        datePublished: data.creationDate,
        "syncs:musicalInstrument" : data.instruments
    })

    console.log(dataSheet)
    dataSheet.save().then(console.log("añadido")).catch(err => {console.error(err)})
}

exports.getClient = async (id) =>{
   return clientModel.findOne({identifier : id})
}

exports.getSheet = async (id) =>{
    return sheetModel.findOne({identifier : id})
 }

exports.getSheetByName = async (name) => {
    console.log("searching the score: "+ name)
    return sheetModel.find({name: new RegExp(name)})
}
 
 exports.getAllSheets = async () =>{
    console.log("buscando")
    return sheetModel.find()
 }
 


/* var data_prueba = new clientModel({
    "@id": "http://syncsschema.com/user/1",
    "@type": "Person",
    identifier: 1,
    birthDate : new Date('1996-09-02'),
    email : "al364403@uji.es",
    alternateName : "kitkat",
    accessCode : "String",
    image : "asdf.jpg"
})

data_prueba.save() */



