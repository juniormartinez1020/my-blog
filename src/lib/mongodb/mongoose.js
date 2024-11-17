import mongoose from "mongoose"

let initialized = false

export const connect = async () => {
    mongoose.set('strictQuery', true)

    if (initialized) {
        console.log('connection almost ready')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'my-bloger',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connect to mongodb')
        initialized = true
    } catch (error) {
        console.log('error to connect to mongodb', error)
    }
}