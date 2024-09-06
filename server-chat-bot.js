// server.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');
// const path = 'C:\\Users\\tusha\\Desktop\\PROJECTS\\PORTFOLIO WEBSITE\\imgs\\pdf-template.pdf';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

const work = "I am open to work you can , that i am compatible with you can check skill section for more info!";
// Load resume data from a local file (you could fetch this dynamically if needed)
const resumeData =("Lakshay Full-Stack Developer   ------I’m Lakshay, a versatile developer skilled in both front-end and back-end technologies. With expertise in HTML, CSS, and JavaScript, I build dynamic and responsive websites and applications. My passion for coding drives me to deliver seamless user experiences and innovative solutions");

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
        botResponse = resumeData; // Return the contents of the resumeData variable
    } else  if(userMessage.includes('work')) {
        botResponse = work;
    }

    res.json({ response: botResponse });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
