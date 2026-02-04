const generateButton = document.getElementById('generate-emoji');
const emojiDisplay = document.getElementById('emoji-display');
const emojiCountInput = document.getElementById('emoji-count');

const emojis = ['😀', '😂', '😍', '🤔', '😎', '😭', '😡', '🥳', '😴', '🤖', '👻', '🎃', '🌟', '🔥', '🍕', '🍔', '🍣', '⚽', '🏀', '🎸', '🚀', '🎉', '💎', '🌈', '⭐',
                '🍩', '🍦', '🌺', '🌻', '🐶', '🐱', '🦄', '🐸', '🐵', '🦊', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷',  '🐔', '🐧', '🐢'];

const computerChoice = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
};

generateButton.addEventListener('click', () => {
    emojiDisplay.innerHTML = '';
    
    const count = parseInt(emojiCountInput.value) || 10;
    
    for (let i = 0; i < count; i++) {
        const emojiSpan = document.createElement('span');
        emojiSpan.className = 'emoji-item';
        emojiSpan.textContent = computerChoice();
        emojiSpan.style.animationDelay = (i * 0.1) + 's';
        emojiDisplay.appendChild(emojiSpan);
    }
}); 
