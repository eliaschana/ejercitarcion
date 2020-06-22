const express = require('express');
const bodyparser = require( 'body-parser');
const cors = require('cors')
const usuariosRouter  = require('./router/usuariosRouter');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());
app.use(cors());
app.use('/usuarios', usuariosRouter);

app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`);
})