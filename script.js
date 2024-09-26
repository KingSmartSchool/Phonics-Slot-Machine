// Default sets for different short vowel versions of the slot machine
const versions = {
    default: {
        reel1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'Z', 'Y'],
        reel2: ['A', 'E', 'I', 'O', 'U'],
        reel3: ['B', 'C', 'D', 'F', 'G', 'K', 'L', 'M', 'N', 'P', 'S', 'T', 'V', 'Z']
    },
    ae: {
        reel1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'Z', 'Y'],
        reel2: ['A', 'E'],
        reel3: ['B', 'C', 'D', 'F', 'G', 'K', 'L', 'M', 'N', 'P', 'S', 'T', 'V', 'Z']
    },
    ei: {
        reel1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'Z', 'Y'],
        reel2: ['E', 'I'],
        reel3: ['B', 'C', 'D', 'F', 'G', 'K', 'L', 'M', 'N', 'P', 'S', 'T', 'V', 'Z']
    },
    ou: {
        reel1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'Z', 'Y'],
        reel2: ['O', 'U'],
        reel3: ['B', 'C', 'D', 'F', 'G', 'K', 'L', 'M', 'N', 'P', 'S', 'T', 'V', 'Z']
    },
    au: {
        reel1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'Z', 'Y'],
        reel2: ['A', 'U'],
        reel3: ['B', 'C', 'D', 'F', 'G', 'K', 'L', 'M', 'N', 'P', 'S', 'T', 'V', 'Z']
    }
};

// Initialize with the default version
let currentVersion = versions.default;

// Function to randomly select an item from an array
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to update reels according to the selected version
function updateReels() {
    document.getElementById('reel1').textContent = getRandomItem(currentVersion.reel1);
    document.getElementById('reel2').textContent = getRandomItem(currentVersion.reel2);
    document.getElementById('reel3').textContent = getRandomItem(currentVersion.reel3);
}

// Function to spin the reels
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
        updateReels();
        reel1Element.classList.remove('spin');
        reel2Element.classList.remove('spin');
        reel3Element.classList.remove('spin');
    }, 500); // Animation duration matches the CSS animation time
}

// Handle version selection
document.getElementById('version-select').addEventListener('change', function() {
    currentVersion = versions[this.value]; // Update the current version based on selection
    updateReels(); // Call updateReels to adjust the number of reels
});

// Add event listener to the spin button
document.getElementById('spinButton').addEventListener('click', spinReels);
