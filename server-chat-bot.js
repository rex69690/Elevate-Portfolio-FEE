// server.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = 'C:\\Users\\tusha\\Desktop\\PROJECTS\\PORTFOLIO WEBSITE\\imgs\\pdf-template.pdf';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

// Load resume data from a local file (you could fetch this dynamically if needed)
const resumeData = fs.readFileSync(path, 'utf8');

// Endpoint to handle chat requests
app.post('/chat', (req, res) => {
    const userMessage = req.body.message.toLowerCase();
    let botResponse = 'Sorry, I do not understand your request.';

    // Basic keyword-based logic to generate responses
    if (userMessage.includes('skills')) {
        botResponse = 'I am skilled in HTML, CSS, JavaScript, React, and more.';
    } else if (userMessage.includes('experience')) {
        botResponse = 'I am currently a Computer Science student at Chitkara University with experience in front-end development.';
    } else if (userMessage.includes('projects')) {
        botResponse = 'I have completed projects such as a Weather App, Chatbot Application, and Tic-Tac-Toe game.';
    } else if (userMessage.includes('resume')) {
        botResponse = `Here is a summary of my resume: ${resumeData}`;
    }

    res.json({ response: botResponse });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
