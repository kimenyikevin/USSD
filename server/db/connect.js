import mongoose from 'mongoose';
import config from '../config/index';

mongoose.Promise = global.Promise;

const connectToDb = async () => {
    try {
        await mongoose.connect(config.mongoUrl, { useMongoClient: true }, console.log("connected successfully"));
    }
    catch (err) {
        
      console.log(err);
    }
}

export default connectToDb;