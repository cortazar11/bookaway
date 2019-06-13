const mongoose= require('mongoose');
const {Schema} = mongoose;


const hosterSchema=new Schema({
    hostname: String,
    country: String,
    dates: {
        startDate: Date,
        endDate: Date
    }
   
})

mongoose.model('hosters', hosterSchema)


// Pwd Mongoose Atlas: dGbGQY3yvYh9L6H6
// Connection string dev: mongodb+srv://cortazar11:dGbGQY3yvYh9L6H6@cluster0-uxyiy.mongodb.net/test?retryWrites=true&w=majority

// Production: 
//Pwd: DpoLWX6wM1BucFbP
// connection: mongodb+srv://cortazar11:DpoLWX6wM1BucFbP@cluster0-sjskw.mongodb.net/test?retryWrites=true&w=majority