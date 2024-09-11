const reel1 = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'Z', 'Y']; // 20 consonants + 1 semivowel (without X)
const reel2 = ['A', 'E', 'I', 'O', 'U']; // 5 vowels
const reel3 = ['B', 'C', 'D', 'F', 'G', 'K', 'L', 'M', 'N', 'P', 'S', 'T', 'V', 'Z']; // without J, H, Q, R, and W

// Function to randomly select an item from an array
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to add spin animation and update reels
function spinReels() {
    const reel1Element = document.getElementById('reel1');
    const reel2Element = document.getElementById('reel2');
    const reel3Element = document.getElementById('reel3');
    
    // Add animation class
    reel1Element.classList.add('spin');
    reel2Element.classList.add('spin');
    reel3Element.classList.add('spin');
    
    // Set a timeout to remove the animation class and update the text
    setTimeout(() => {
        reel1Element.textContent = getRandomItem(reel1);
        reel2Element.textContent = getRandomItem(reel2);
        reel3Element.textContent = getRandomItem(reel3);
        
        // Remove animation class after spin
        reel1Element.classList.remove('spin');
        reel2Element.classList.remove('spin');
        reel3Element.classList.remove('spin');
    }, 500); // Animation duration matches the CSS animation time
}

document.getElementById('spinButton').addEventListener('click', spinReels);
