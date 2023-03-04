const mongoose = require("mongoose")

const connectDB = async()=>{
    try{
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(`mongodb+srv://abhijitgadhave:Abhijitkg111@cluster0.xpxsvtf.mongodb.net/?retryWrites=true&w=majority`,{
            useUnifiedTopology : true,
            useNewUrlParser:true,
            // useCreateIndex:true,
        });

        console.log(`MongoDB Connected:${conn.connection.host}`);
    }

    catch(error){

        console.log(`Error: ${error.message}`);
        process.exit()

    }
}
module.exports = connectDB;
