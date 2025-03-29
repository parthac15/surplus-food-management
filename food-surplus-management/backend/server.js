const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/foodSurplusDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// User Schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    role: String
});

const User = mongoose.model('User', userSchema);

// API Routes
app.post('/api/register', async (req, res) => {
    const { email, password, role } = req.body;
    const user = new User({ email, password, role });
    await user.save();
    res.send('User registered successfully.');
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (user) {
        res.send({ role: user.role });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
