const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Sample user data (in a real application, this would come from a database)
const users = [{ username: 'testuser', password: 'password123' }];
const resources = [
    { id: 1, title: 'Past Year Exam Papers', link: 'link-to-papers' },
    { id: 2, title: 'Official Circulars', link: 'link-to-circulars' },
];

// Authentication endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.status(200).json({ message: 'Login successful!' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Resource endpoint
app.get('/api/resources', (req, res) => {
    res.json(resources);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
