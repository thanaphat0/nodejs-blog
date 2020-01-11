const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'public','views'));

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/',(request,response)=>{
    response.render('index',{
        testData: 'working'
    });
});
app.use(bodyParser.json());
app.listen(3000, ()=>{
    console.log('Server is started at http://localhost:3000')
});