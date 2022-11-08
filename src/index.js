const express = require('express');
const app =express();
const morgan=require('morgan');

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Nuestro primer ws get
app.get('/', (req, res) => {
    res.json(
        {
            "Title": "Hola mundo"
        }
    );
})

//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});