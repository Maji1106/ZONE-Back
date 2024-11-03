const express = require('express');
const app = express();
require("dotenv").config();
const db = require('./models');
const storeRoutes = require('./routes/store'); // หรือ store.router
const authRoutes = require('./routes/auth.routes'); // นำเข้า auth routes
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', storeRoutes);
app.use('/api/auth', authRoutes); // ใช้ auth routes

app.get('/', (req, res) => {
  res.send('<h1>Hello FinancialTracker API</h1>');
});

db.sequelize.sync({ alter: true })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log('Server is running on port 5000');
    });
  })
  .catch((error) => {
    console.error('Error creating or updating tables:', error);
  });
