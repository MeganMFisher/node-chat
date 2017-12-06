const express = require('express')
    , bodyParser = require('body-parser') 
    , ctrl = require('./controllers/messages_controller')

const app = express();

app.use(bodyParser.json())
app.use( express.static( __dirname + '/../public/build' ) );


app.get('/api/messages', ctrl.read);
app.post('/api/messages', ctrl.create);
app.put('/api/messages/:id', ctrl.update);
app.delete('/api/messages/:id', ctrl.delete);



const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))