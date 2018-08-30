const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/usuario/:id',function(req,res){
    let id = req.params.id;
    res.json({
        id
    });
})

app.post('/usuario',function(req,res){
    let body = req.body;
    console.log('********************USUARIO**************************');
    res.json({
        persona: body
    });

    console.log(body);
});

app.post('/Vehiculos',function(req,res){
    let body = req.body;
    console.log('***********************VEHICULO***********************');
    res.json({
        persona: body
    });

    console.log(body);
});

app.listen(3000,() => {
    console.log('listen puerto 3000');
});
