require("dotenv").config()
const express = require("express")
const swaggerUi = require('swagger-ui-express');
const { apiDocumentation } = require('./Docs/apidoc');

const app = express()
const {ServiceUtils} = require("./Services/serviceUtils")

const PORT: number = ServiceUtils.getPort()
const HOST: string = ServiceUtils.getHost()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

app.get('/', (req,res) => {
    res.send("<h1>Hello</h1>")
})

app.listen(PORT, () => {
    console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
})