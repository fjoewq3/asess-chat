// Connect to the Socket.IO server (replace 'https://your-server-url' with your deployed server's URL)
const socket = io('https://your-server-url');

// References
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');

// Send message to server
function sendMessage() {
    const message = messageInput.value;
    if (message) {
        socket.emit('chat message', message);
        messageInput.value = '';
    }
}

// Listen for incoming messages
socket.on('chat message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    chatBox.appendChild(messageElement);
});

