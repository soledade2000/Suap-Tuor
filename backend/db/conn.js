const mongoose = require("mongoose")

async function main(){

    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect(
            "mongodb+srv://nikolasmartins:KIIz3E5BqwITDMY7@cluster0.8uy9wbt.mongodb.net/?retryWrites=true&w=majority"
            );

        console.log("conectado ao banco!")
    } catch (error) {
        console.log(`erro ${error}` )
    }
}

module.exports = main;