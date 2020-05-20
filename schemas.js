exports.client = {
    "@id": String,
    identifier: Number,
    birthDate : Date,
    email : String,
    alternateName : String,
    accessCode : String,
    image : String

}

exports.artist = {
    "@id": String,
    identifier: Number,
    email : String,
    name : String,
    genre : [String],
    image : String
}

exports.sheet = {
    "@id": String,
    identifier: Number,
    name : String,
    genre : [String],
    associatedMedia : String,
    isAccessibleForFree: Boolean,
    publisher: String,
    author: String,
    datePublished: Date,


}

exports.subscriptions = {
    "@id": String,
    identifier: Number,
    "syncs:artistId" : String,
    "syncs:clientId" : String,
    dateCreated: Date,
    expires: Date,
    price: Number
}

exports.merchandising = {
    "@id": String,
    identifier: Number,
    category: [String],
    name : String,
    "syncs:artistId" : String,
    description: String,
    image : String,
    price: Number
}


