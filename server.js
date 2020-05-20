const bodyparser = require('body-parser')
const express    = require('express')

const control = require('./controllers')

const app = express() //API Main object
 
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use(control.middleware) //Done

app.use('/web', express.static('public'))

//app.get('/user/:id', control.getUserData ) //Done

//app.post('/user', control.updateUser ) //Done

//app.get('/blog', control.getBlogs ) //Done

//app.post('/blog', control.createBlog ) //Done

//app.get('/blog/:id', control.getBlogData ) //Done

//app.get('/blog/search', control.searchBlog ) //Done

//etc ...
//---------------CLIENTS------------------------
app.get('/spam', control.eventStream) // SSE
app.get('/user/:client_id', control.getClient)
app.post('/user/client', control.createClient)
app.post('/user/client/update/:client_id', control.updateClient)
app.delete('/user/client/delete/:client_id', control.deleteClient)

/*

//---------------ARTIST------------------------
app.get('/user/artist', control.createArtist)
app.post('/user/:artist_id', control.getArtist)
app.post('/user/artist/update/:artist_id', control.updateArtist)
app.delete('/user/client/delete/:artist_id', control.deleteArtist)
app.get('/user/artist/all', control.getAllArtists)
app.get('/user/artist/search', control.searchArtist)


//---------------SHEET------------------------*/
app.get('/sheet/all', control.getAllSheet)
app.get('/sheet/:name', control.getSheetByName)
app.get('/sheet/:sheet_id', control.getSheet)


app.post('/sheet/new', control.createNew)



//app.post('/sheet/update/:sheet_id', control.updateSheet)
//app.delete('/sheet/delete/:sheet_id', control.deleteSheet)

//app.get('/sheet/search', control.searchSheet)
/*
//---------------SUBSCRIPTIONS------------------------

app.get('/subs/:artist_id', control.getSubscriptionsToArtist)
app.post('/subs/new/:subs_id', control.createNewSubscription)
app.post('/subs/update/:subs_id', control.updateSubscription)
app.delete('/subs/delete/:subs_id', control.deleteSubscription)
app.get('/subs/:client_id', control.getMySubscriptions)

//---------------MERCHANDISING------------------------

app.get('/merch/:artist_id', control.getMerchOfArtist)
app.post('/merch/:artist_id', control.createMerchOfArtist)
app.post('/merch/update/:artist_id/:merch_id', control.updateMerch)
app.delete('/merch/delete/:artist_id/:', control.deleteSubscription)
app.get('/merch/search', control.merchSearch)
*/
const PORT = 8080
app.listen(PORT, _ => console.log(`Servidor web escuchando en puerto ${PORT}`))


