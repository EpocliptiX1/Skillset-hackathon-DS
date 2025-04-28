// Global vars
let currentSubject = null;
let currentDifficulty = null;
let currentSearchTerm = '';
let chosenFlashcard = null;

// Shuffle flashcards
function shuffleCards() {
    const container = document.getElementById('flashcard-container');
    const cards = Array.from(container.children);

    if (cards.length === 1 && cards[0].classList.contains('no-cards')) return;

    cards.sort(() => Math.random() - 0.5);
    container.innerHTML = '';
    cards.forEach(card => container.appendChild(card));
}

document.addEventListener('DOMContentLoaded', () => {
    renderFlashcards();

    document.querySelectorAll('.subject-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentSubject = btn.dataset.subject;
            renderFlashcards();
        });
    });

    document.getElementById('difficultyFilter').addEventListener('change', (e) => {
        currentDifficulty = e.target.value;
        renderFlashcards();
    });

    document.getElementById('searchInput').addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        renderFlashcards();
    });
    document.getElementById('searchInput2').addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        renderFlashcards();
    });

    document.getElementById('shuffleBtn').addEventListener('click', shuffleCards);
});

// Modals
function openSignupForm() {
    document.getElementById('signupForm').style.display = 'block';
}

function closeSignupForm() {
    document.getElementById('signupForm').style.display = 'none';
}

function openSigninForm() {
    document.getElementById('signinForm').style.display = 'block';
}

function closeSigninForm() {
    document.getElementById('signinForm').style.display = 'none';
}

function openQuizForm() {
    document.getElementById('quizForm').style.display = 'block';
}

function closeQuizForm() {
    document.getElementById('quizForm').style.display = 'none';
}

function renderFlashcards() {
    const container = document.getElementById('flashcard-container');
    container.innerHTML = '';

    if (!currentSubject || !flashcardsData[currentSubject]) {
        container.innerHTML = '<p class="no-cards">No subject selected</p>';
        return;
    }

    let filteredCards = flashcardsData[currentSubject];

    if (currentDifficulty) {
        filteredCards = filteredCards.filter(card => card.difficulty === currentDifficulty);
    }

    if (currentSearchTerm) {
        const searchTerm = currentSearchTerm.toLowerCase();
        filteredCards = filteredCards.filter(card =>
            card.title.toLowerCase().includes(searchTerm) ||
            card.definition.toLowerCase().includes(searchTerm) ||
            card.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            (card.description && card.description.toLowerCase().includes(searchTerm))
        );
    }

    if (filteredCards.length === 0) {
        container.innerHTML = '<p class="no-cards">No cards match your filters</p>';
        return;
    }

    filteredCards.forEach(card => {
                const cardDiv = document.createElement('div');
                cardDiv.classList.add('flashcard');
                cardDiv.style.display = 'flex';
                cardDiv.style.flexDirection = 'column';
                cardDiv.style.justifyContent = 'space-between';

                cardDiv.innerHTML = `
            <div class="card-header">
                <h3>${card.title}</h3>
                <div class="difficulty ${card.difficulty}">${card.difficulty}</div>
            </div>
            <p class="definition">${card.definition}</p>
            <div class="tags-container">
                ${card.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="description-container" style="display: none;">
                <p class="description">${card.description || 'No additional explanation available.'}</p>
            </div>
            <button class="choose-btn">Choose</button>
        `;

        const descContainer = cardDiv.querySelector('.description-container');
        const chooseBtn = cardDiv.querySelector('.choose-btn');

        cardDiv.addEventListener('mouseenter', () => {
            descContainer.style.display = 'block';
        });

        cardDiv.addEventListener('mouseleave', () => {
            descContainer.style.display = 'none';
        });

        chooseBtn.addEventListener('click', () => {
            const previousSelected = document.querySelector('.flashcard.selected');
            if (previousSelected) {
                previousSelected.classList.remove('selected');
            }

            cardDiv.classList.add('selected');
            chosenFlashcard = card;
            startTest();
        });

        container.appendChild(cardDiv);
    });
}
function startTest() {
    if (!chosenFlashcard || !chosenFlashcard.questions) {
        console.error('No questions available for this flashcard.');
        return;
    }

    let currentQuestionIndex = 0;
    let score = 0;
    const testContainer = document.querySelector('.chosen-subject-test-container');
    testContainer.innerHTML = '';

    function showQuestion() {
        if (currentQuestionIndex >= chosenFlashcard.questions.length) {
            console.log(`Test complete! Score: ${score} / ${chosenFlashcard.questions.length}`);
            testContainer.innerHTML = `<p>Test Complete! Your score: ${score} / ${chosenFlashcard.questions.length}</p>`;
            return;
        }

        const qObj = chosenFlashcard.questions[currentQuestionIndex];
        testContainer.innerHTML = `<p class="question">${qObj.question}</p>`;

        qObj.options.forEach((optionText, idx) => {
            const btn = document.createElement('button');
            btn.textContent = optionText;
            btn.classList.add('option-btn');
            btn.addEventListener('click', () => {
                if (idx === qObj.correctIndex) {
                    score++;
                }
                currentQuestionIndex++;
                showQuestion();
            });
            testContainer.appendChild(btn);
        });
    }

    showQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    function toggleMenu() {
        navLinks.classList.toggle('active');
        // Hide icon
        menuToggle.style.display = navLinks.classList.contains('active') ? 'none' : 'block';
    }

    menuToggle.addEventListener('click', (event) => {
        console.log('Hamburger clicked, toggling menu.');
        event.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', (event) => {
        // Close menu  
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        }
    });
});