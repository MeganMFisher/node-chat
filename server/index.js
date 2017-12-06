const express = require('express')
    , bodyParser = require('body') 

const app = express();

app.use(bodyParser.json())



const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}`))