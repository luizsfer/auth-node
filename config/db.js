const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

mongoose.connect(
    process.env.MONGODB_AUTH,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });

mongoose.connection.on(
    'error', 
    error => console.log(error) 
);

mongoose.Promise = global.Promise;