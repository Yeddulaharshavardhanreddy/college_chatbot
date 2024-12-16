$(document).ready(function() {
    const chatMessages = $('#chat-messages');
    const chatForm = $('#chat-form');
    const userInput = $('#user-input');

    function addMessage(message, isUser = false) {
        const messageDiv = $('<div></div>')
            .addClass('message')
            .addClass(isUser ? 'user-message' : 'bot-message');

        const messageContent = $('<div></div>')
            .addClass('message-content')
            .html(message.replace(/\n/g, '<br>'));

        messageDiv.append(messageContent);
        chatMessages.append(messageDiv);
        chatMessages.scrollTop(chatMessages[0].scrollHeight);
    }

    function addTypingIndicator() {
        const typingDiv = $('<div class="message bot-message"><div class="message-content typing-indicator"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div></div>');
        chatMessages.append(typingDiv);
        chatMessages.scrollTop(chatMessages[0].scrollHeight);
        return typingDiv;
    }

    chatForm.on('submit', function(e) {
        e.preventDefault();
        
        const message = userInput.val().trim();
        if (!message) return;

        // Add user message
        addMessage(message, true);
        userInput.val('');

        // Add typing indicator
        const typingIndicator = addTypingIndicator();

        // Send message to backend
        $.ajax({
            url: '/chatbot',
            method: 'POST',
            data: {
                question: message
            },
            success: function(response) {
                // Remove typing indicator
                typingIndicator.remove();
                
                // Add bot response
                addMessage(response.answer);
            },
            error: function() {
                // Remove typing indicator
                typingIndicator.remove();
                
                // Add error message
                addMessage("I'm sorry, I'm having trouble processing your request. Please try again later.");
            }
        });
    });

    // Enable enter key to submit
    userInput.on('keypress', function(e) {
        if (e.which == 13 && !e.shiftKey) {
            chatForm.submit();
            return false;
        }
    });
});
