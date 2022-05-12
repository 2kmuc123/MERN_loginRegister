const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express()

app.use(express.json())
app.use(cors())

//ROUTE
const loginregister = require('./router/account')

app.get('/', (req, res, next) => {
    res.json({ status: true, sever: 'running !!!', key: Math.random() })
});

app.use('/api', loginregister)



app.listen(process.env.PORT || 8000, () => {
    console.log(`Server listening on PORT : ${process.env.PORT || 8000}`)
})