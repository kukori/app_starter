const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
// const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/error');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require("express-rate-limit");
const hpp = require('hpp');
const cors = require('cors');

// Mount enviroment variables
dotenv.config({ path: './config/config.env' });

// Route files
const auth = require('./routes/auth');
const users = require('./routes/users');

// Connect to database
connectDB();

const app = express();

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// File upload middleware
// app.use(fileUpload());

// Sanitize middleware
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent xss attacks
app.use(xss())

// Rate limit (1h / 100 requests)
const limiter = rateLimit({ windowMs: 3600000, max: 100 });
app.use(limiter);

// Prevent http pollution attacks
app.use(hpp());

// Enable CORS requests
app.use(cors())

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`));

// Handle unhandled rejection
process.on('unhandledRejection', (error, promise) => {
    console.log(`Error: ${error.message}`.red)
    server.close(() => process.exit(1));
});