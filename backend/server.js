const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Root test route
app.get('/', (req, res) => {
  res.send('API is working from backend!');
});

// Routes
app.use('/api/auth', authRoutes);

// Connect DB and Start Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => console.log('Server started'));
  })
  .catch(err => console.error(err));
