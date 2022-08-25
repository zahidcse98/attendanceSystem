require('dotenv').config();
const http = require('http');
const app = require('./app/app');
const connectDB = require('./db/db');
const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

connectDB(`${process.env.DB_STRING}/${process.env.DB_NAME}`)
    .then(() => {
        console.log('Database Connected!!');
        server.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}`);
        })
    })
    .catch((e) => console.log(e))