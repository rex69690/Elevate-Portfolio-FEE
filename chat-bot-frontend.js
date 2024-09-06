// scripts.js

const chatLog = document.getElementById('chat-log');
const chatInput = document.querySelector('.chat-message input');
const chatButton = document.querySelector('.chat-message button');

// Function to handle user messages and bot responses
function addMessageToChatLog(sender, message) {
    const messageElement = document.createElement('li');
    messageElement.innerHTML = `
        <span class="avatar ${sender}">${sender === 'user' ? 'User' : 'AI'}</span>
        <div class="message">${message}</div>
    `;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
}

function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (userMessage === '') return;

    // Display user's message
    addMessageToChatLog('user', userMessage);

    // Clear input field
    chatInput.value = '';

    // Send the message to the server
    fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
    })
    .then(response => response.json())
    .then(data => {
        // Display bot's response
        addMessageToChatLog('bot', data.response);
    })
    .catch(error => {
        console.error('Error:', error);
        addMessageToChatLog('bot', 'There was an error processing your request.');
    });
}

// Event listener for chat button click
chatButton.addEventListener('click', sendMessage);

// Event listener for pressing Enter key
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// my-details-card-function  


function showImage() {
    window.location.href = "card.html"; // replace with the actual HTML file name
  }