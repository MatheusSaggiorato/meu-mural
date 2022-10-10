const PORT = 3000
const express = require('express'); 
const apiRoute = require('./routes/api')
const path = require('path');
const app = express();

//essa linha deve ser chamada primeiro para garantir que a chamada a api
// não busque por uma pasta chamada api
app.use('/api', apiRoute);
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log("server running on port", PORT);
})

