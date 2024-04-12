import mongoose from 'mongoose';

const connectToDatabase = async (): Promise<void> => {
    try {
        await mongoose.connect('mongodb+srv://avezblog:avezblog@cluster0.st4qayt.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connected to database');
    } catch (error:any) {
        console.error('Error connecting to database:', error.message);
    }
};

export default connectToDatabase;
