// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Use CORS middleware
app.use(cors());
// Add a root endpoint to confirm the server is running
app.get('/', (req, res) => {
    res.send('Welcome to the Intern Portal Backend API!');
});

// Dummy data for the intern
const internData = {
    name: "Eswari",
    referralCode: "Eswari2025",
    donationsRaised: 1500,
    rewards: [
        "Bronze Badge",
        "5% off on company merchandise"
    ],
    leaderboard: [
        { name: "Eswari", rank: 1, donations: 1500 },
        { name: "John Doe", rank: 2, donations: 1200 },
        { name: "Jane Smith", rank: 3, donations: 1150 },
        { name: "Peter Jones", rank: 4, donations: 900 }
    ]
};

// A simple GET endpoint to return the intern's data
app.get('/api/intern-data', (req, res) => {
    res.json(internData);
});

// A simple GET endpoint for the leaderboard (bonus feature)
app.get('/api/leaderboard', (req, res) => {
    res.json(internData.leaderboard);
});

// Start the server
app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});
