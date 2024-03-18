const express=require('express')
const app = express()
const routes=require('./rutas.js')
const port = 3000

app.use(routes) //app.use('/usuario',routes)


app.listen(port,()=>{
    console.log('server on port ${3000}')
})
