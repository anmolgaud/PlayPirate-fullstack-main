const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended : true}))

const dirRoutes = require('./Routes/directoryRoutes')
app.use('/dir',dirRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`[Info:] Server Running on ${PORT}`)
})