import mongoose from 'mongoose'


const connectDB = (url) => {
    return mongoose.connect(url)
}


/* 'mongodb+srv://nafis:<password>@nodeexpressprojects.ktiu5cu.mongodb.net/?retryWrites=true&w=majority' */



export default connectDB