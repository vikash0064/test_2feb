const generateButton = document.getElementById('generate-emoji');
const emojiDisplay = document.getElementById('emoji-display');

const emojis = ['😀', '😂', '😍', '🤔', '😎', '😭', '😡', '🥳', '😴', '🤖', '👻', '🎃', '🌟', '🔥', '🍕', '🍔', '🍣', '⚽', '🏀', '🎸', '🚀', '🎉', '💎', '🌈', '⭐'];

// Computer's random choice function
const computerChoice = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
};

generateButton.addEventListener('click', () => {
    emojiDisplay.innerHTML = ''; // Clear previous emojis
    
    for (let i = 0; i < 10; i++) {
        const emojiSpan = document.createElement('span');
        emojiSpan.className = 'emoji-item';
        emojiSpan.textContent = computerChoice();
        emojiSpan.style.animationDelay = (i * 0.1) + 's';
        emojiDisplay.appendChild(emojiSpan);
    }
});

