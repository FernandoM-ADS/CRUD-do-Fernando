// config inicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()



// forma de ler JSON / middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)


// rota inicial / endpoint
app.get('/', (req, res) => {

  // mostrar req
  res.json({message: 'Oi Express!' })
})

// zaratustra

//mongodb+srv://***senha e cluster****.edy3qoy.mongodb.net/?retryWrites=true&w=majority

// entregar uma porta
const DB_USER = process.env.DB_user
const DB_PASSWORD = encodeURIComponent(process.env.DB_password)

mongoose
    .connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@fernandocluster.edy3qoy.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("Conectamos ao MongoDB!")
      app.listen(3000)
})
.catch((err) => console.log(err))

