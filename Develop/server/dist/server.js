const forceDatabaseRefresh = false;
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';
import { seedUsers } from './seeds/user-seeds.js';
import { seedTickets } from './seeds/ticket-seeds.js';
const app = express();
const PORT = process.env.PORT || 3001;
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Allow requests from your React app
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));
if (forceDatabaseRefresh) {
    seedUsers();
    seedTickets();
}
app.use(express.json());
app.use(routes);
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
});
