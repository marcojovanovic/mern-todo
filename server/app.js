 const express = require('express')
 const app = express()
 const cors = require('cors')
 const db = require('mongoose')

// povezivanje noda i baze da mozes da ubacis nesto
const PlayerModel = require('./models/PlayerModel')

 // middlaware i cors 
 app.use(express.json());
 app.use(cors());


 // database connection

db.connect('mongodb+srv://marco:armin1000@cluster0.sews6.mongodb.net/clubplayers', {
    useNewUrlParser: true,
  });
  
 

 // posting players route 

 app.post('/post', async(req, res, next)=>{

    const name = req.body.name 
    const goals = req.body.goals

    // dodavanje u bazu

    const player = new PlayerModel({

        name:name,
        goals:goals

    })
    await player.save()

    res.send('posting')


 })


 app.get('/read', async(req, res, next)=>{

    PlayerModel.find({}, (err, result)=>{

        if(err){
            res.send(err)
        } else {

            res.send(result)
        }        
    })
 })

 app.delete('/delete/:id', async(req, res, next)=>{

     const id = req.params.id 

     await PlayerModel.findByIdAndDelete(id).exec()

     res.send('item deleted')
 })









// express connection 

  app.get('/', (req, res)=>{
 
      res.send('hello world')
 
 })
  const port = 8000
 
app.listen(port)