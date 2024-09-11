const reel1 = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z', 'Y']; // 20 consonants + 1 semivowel
const reel2 = ['A', 'E', 'I', 'O', 'U']; // 5 vowels
const reel3 = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']; // 20 consonants

// Function to randomly select an item from an array
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to spin the reels
function spinReels() {
    document.getElementById('reel1').textContent = getRandomItem(reel1);
    document.getElementById('reel2').textContent = getRandomItem(reel2);
    document.getElementById('reel3').textContent = getRandomItem(reel3);
}

// Add event listener to the spin button
document.getElementById('spinButton').addEventListener('click', spinReels);
