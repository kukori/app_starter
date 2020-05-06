const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Mount enviroment variables
dotenv.config({ path: './config/config.env' });

// Load models
const User = require('./models/User');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// Read JSON files
const users = JSON.parse(fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8'));

// Import data
const importData = async () => {
    try {
        await User.create(users);
        console.log('Data Imported..');
        process.exit();
    } catch (error) {
        console.error(error);
    }
}

// Delete data
const deleteData = async () => {
    try {
        await User.deleteMany();
        console.log('Data purged..');
        process.exit();
    } catch (error) {
        console.error(error);
    }
}

if(process.argv[2] === '-i') {
    importData();
} else if(process.argv[2] === '-d') {
    deleteData();
}