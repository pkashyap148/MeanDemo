const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname,'dist/demo')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api',api);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/demo/index.html'));
})

app.listen(port,()=>{
    console.log(`Server running at ${port}`);
});