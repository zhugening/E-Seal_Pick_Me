import mongoose from "mongoose";

// export async function initMongoose() {
//     if (mongoose.connection.readyState === 1) {
//         return mongoose.connection.asPromise();
//     }
//     return await mongoose.connect(process.env.MONGO_URI)
// }

const initMongoose = async() =>{
    try{
        // process.env.MONGO_URI
        const { connection } = await mongoose.connect(process.env.MONGO_URI) 

        if(connection.readyState == 1){
            console.log("Database Connected")
        }

    }catch(errors){
        return Promise.reject(errors)
    }
}

export default initMongoose;