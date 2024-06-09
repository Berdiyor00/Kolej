const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/newsapp')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define Mongoose Schema for News Articles
const articleSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    content: String,
    category: String,
});

const Article = mongoose.model('Article', articleSchema);

// API Routes
app.post('/api/articles', async(req, res) => {
    try {
        const { title, imageUrl, content, category } = req.body;
        const newArticle = new Article({ title, imageUrl, content, category });
        await newArticle.save();
        res.status(201).json(newArticle);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));