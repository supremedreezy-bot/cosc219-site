
/*
 COSC 219 - Lab 4
 JavaScript Fundamentals
 Word Guessing Game
*/

const STARTING_LIVES = 6;

// 1. Normalize Guess
function normalizeGuess(input) {
    const guess = input.trim().toLowerCase();

    if (guess.length !== 1) {
        return "";
    }

    if (!"abcdefghijklmnopqrstuvwxyz".includes(guess)) {
        return "";
    }

    return guess;
}

// 2. Validate Guess
function isValidGuess(input) {
    return normalizeGuess(input) !== "";
}

// 3. Check Already Guessed
function alreadyGuessed(letter, guessedLetters) {
    return guessedLetters
        .toLowerCase()
        .includes(letter.toLowerCase());
}

// 4. Check Correct Guess
function isCorrect(letter, word) {
    const guess = letter.toLowerCase();

    if (!isValidGuess(guess)) {
        return false;
    }

    return word.toLowerCase().includes(guess);
}

// 5. Calculate Remaining Lives
function livesAfterGuess(lives, correct) {
    if (correct) {
        return lives;
    }

    return Math.max(0, lives - 1);
}

// 6. Calculate Score
function scoreFor(word, lives = STARTING_LIVES) {
    return (word.length * 10) + (lives * 5);
}

// 7. Display Game Status
function statusMessage(word, guessedLetters, lives) {
    if (lives <= 0) {
        return `Out of lives. The word was "${word}".`;
    }

    if (hasWon(word, guessedLetters)) {
        return `You got it! "${word}" with ${lives} lives left.`;
    }

    const lifeText = lives === 1 ? "life" : "lives";
    const guessed = guessedLetters || "nothing yet";

    return `${lives} ${lifeText} left. Guessed: ${guessed}`;
}

// 8. Calculate Grade
function gradeFor(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

/*
 PROVIDED HELPER FUNCTIONS
 Do not modify these functions.
*/

function revealWord(word, guessedLetters) {
    return word
        .toLowerCase()
        .replace(/[a-z]/g, (letter) =>
            guessedLetters.includes(letter) ? letter : "_");
}

function hasWon(word, guessedLetters) {
    return !revealWord(word, guessedLetters).includes("_");
}
