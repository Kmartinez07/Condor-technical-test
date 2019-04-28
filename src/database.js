const mongoose = require('mongoose');
const uriDb = 'mongodb+srv://kmartinez:kmartinez07@cluster0-kbcwr.mongodb.net/test?retryWrites=true';
const urilocal = 'mongodb://localhost:27017/PhotoGalleryCLB';
mongoose.connect(uriDb, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log('Db is connected'))
    .catch(err => console.log(err));
