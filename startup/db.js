const mongoose = require('mongoose');



module.exports = function () {
    mongoose.connect('mongodb://localhost/Products',{useNewUrlParser: true,useUnifiedTopology: true})
        .then(() => console.log('successfully connected to database'))
        .catch(err => console.log('Can not connect to database: ',err))
} 




mongoose.stores.createIndex( { name: "text", description: "text" } );










