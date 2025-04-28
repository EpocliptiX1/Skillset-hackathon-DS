let questionCount = 0;

function generateOptions(questionId) {
    let optionsHTML = '';
    for (let i = 1; i <= 4; i++) {
        optionsHTML += `
            <div class="option-block">
                <input type="radio" name="correct-${questionId}" value="${i}">
                <input type="text" class="option-input" placeholder="Option ${i}">
            </div>
        `;
    }
    return optionsHTML;
}

function addQuestion() {
    questionCount++;
    const container = document.getElementById('questions-container');

    const questionBlock = document.createElement('div');
    questionBlock.className = 'question-block';
    questionBlock.innerHTML = `
        <label>Question ${questionCount}:</label>
        <input type="text" class="question-input" placeholder="Enter question...">
        <div class="options-container">
            ${generateOptions(questionCount)}
        </div>
    `;

    container.appendChild(questionBlock);
}

function saveQuiz() {
    const title = document.getElementById('quizTitle').value.trim();
    const questionBlocks = document.querySelectorAll('.question-block');

    if (!title) {
        alert('Please enter a quiz title.');
        return;
    }

    const quizData = {
        title: title,
        questions: []
    };

    questionBlocks.forEach((block, index) => {
        const questionText = block.querySelector('.question-input').value.trim();
        const optionInputs = block.querySelectorAll('.option-input');
        const correctOption = block.querySelector(`input[name="correct-${index + 1}"]:checked`);

        if (!questionText || optionInputs.length < 2) {
            alert(`Please complete Question ${index + 1} before saving.`);
            return;
        }

        const options = [];
        optionInputs.forEach(opt => {
            options.push(opt.value.trim());
        });

        const correctIndex = correctOption ? parseInt(correctOption.value) - 1 : null;

        quizData.questions.push({
            question: questionText,
            options: options,
            correctAnswerIndex: correctIndex
        });
    });

    const dataStr = JSON.stringify(quizData, null, 2);
    console.log("Quiz Data to Save:", dataStr);

    const blob = new Blob([dataStr], { type: 'application/json' });

    //   link so some1 can download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = title.replace(/\s+/g, '_') + '.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('✅ Quiz JSON ready for download.');
}

function importQuiz() {
    document.getElementById('importFile').click(); // Open file finder thingy
}

function handleFileImport(event) {
    const file = event.target.files[0];

    if (!file) {
        alert('No file selected.');
        return;
    }

    console.log("File selected:", file.name); // Print file name to see if its even there or nott

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            console.log("File content:", e.target.result);
            const data = JSON.parse(e.target.result);
            loadQuizData(data);
        } catch (err) {
            console.error('Error parsing JSON:', err);
            alert('Invalid JSON file.');
        }
    };
    reader.readAsText(file);
}

function loadQuizData(data) {
    console.log("Loaded JSON Data:", data); // Print for debugging stuff

    // Clear current questions
    const questionsContainer = document.getElementById('questions-container');
    if (!questionsContainer) {
        console.error("Questions container not found.");
        return;
    }
    questionsContainer.innerHTML = '';

    document.getElementById('quizTitle').value = data.title || '';

    if (!data.questions || !Array.isArray(data.questions)) {
        alert('No questions found in file.');
        console.error('Invalid questions format:', data.questions);
        return;
    }

    // Rebuild questions
    data.questions.forEach((q, idx) => {
        const questionBlock = document.createElement('div');
        questionBlock.classList.add('question-block');

        const questionInput = document.createElement('input');
        questionInput.type = 'text';
        questionInput.placeholder = `Question ${idx + 1}`;
        questionInput.classList.add('question-input');
        questionInput.value = q.question || '';
        questionBlock.appendChild(questionInput);

        q.options.forEach((opt, optIdx) => {
            const optionContainer = document.createElement('div');
            optionContainer.classList.add('option-container');

            const optionInput = document.createElement('input');
            optionInput.type = 'text';
            optionInput.placeholder = `Option ${optIdx + 1}`;
            optionInput.classList.add('option-input');
            optionInput.value = opt || '';

            const correctRadio = document.createElement('input');
            correctRadio.type = 'radio';
            correctRadio.name = `correct-${idx + 1}`;
            correctRadio.value = optIdx + 1;

            if (optIdx === q.correctAnswerIndex) {
                correctRadio.checked = true;
            }

            optionContainer.appendChild(correctRadio);
            optionContainer.appendChild(optionInput);
            questionBlock.appendChild(optionContainer);
        });

        questionsContainer.appendChild(questionBlock);
    });

    alert('Quiz loaded successfully!');
}
//         EASTER EGG kinda        \\
function uploadQuiz() {
    const uploadDiv = document.createElement('div');
    uploadDiv.style.position = 'fixed';
    uploadDiv.style.top = '50%';
    uploadDiv.style.left = '50%';
    uploadDiv.style.transform = 'translate(-50%, -50%)';
    uploadDiv.style.backgroundColor = 'white';
    uploadDiv.style.padding = '20px';
    uploadDiv.style.border = '1px solid black';
    uploadDiv.style.zIndex = '1000';
    uploadDiv.style.textAlign = 'center';
    uploadDiv.style.fontSize = '16px';
    uploadDiv.style.color = 'black';
    uploadDiv.innerHTML = "Yeah, this isn't really connected to anything so uh...";

    document.body.appendChild(uploadDiv);

    document.addEventListener('click', function(event) {
        if (!uploadDiv.contains(event.target) && event.target !== document.getElementById('upload-quiz-btn')) {
            uploadDiv.remove();
        }
    });
}