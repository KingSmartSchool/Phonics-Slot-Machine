const reel1 = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'Z', 'Y']; // 20 consonants + 1 semivowel (without X)
const reel2 = ['A', 'E', 'I', 'O', 'U']; // 5 vowels
const reel3 = ['B', 'C', 'D', 'F', 'G', 'K', 'L', 'M', 'N', 'P', 'S', 'T', 'V', 'W', 'Z']; // 20 consonants (without J, H, Q, R)

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function spinReels() {
    document.getElementById('reel1').textContent = getRandomItem(reel1);
    document.getElementById('reel2').textContent = getRandomItem(reel2);
    document.getElementById('reel3').textContent = getRandomItem(reel3);
}

document.getElementById('spinButton').addEventListener('click', spinReels);
