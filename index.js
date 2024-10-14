import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.send("<h2>hola desde node, se actualizo todo en un instante perroooooooooooooooooooo!!!</h2>")
})


const port = process.env.PORT || 4000

app.listen(port, ()=> {
    console.log(`Server running in port: ${port}`)
})