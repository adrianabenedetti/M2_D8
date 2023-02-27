const questions = [
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'difficult',
    question: 'What does CPU stand for?',
    correct_answer: 'Central Processing Unit',
    incorrect_answers: [
      'Central Process Unit',
      'Computer Personal Unit',
      'Central Processor Unit',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'In the programming language Java, which of these keywords would you put on a variable to make sure it doesn t get modified?',
    correct_answer: 'Final',
    incorrect_answers: ['Static', 'Private', 'Public'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question: 'The logo for Snapchat is a Bell.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question:
      'Pointers were not used in the original C programming language; they were added later on in C++.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'difficult',
    question:
      'What is the most preferred image format used for logos in the Wikimedia database?',
    correct_answer: '.svg',
    incorrect_answers: ['.png', '.jpeg', '.gif'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'difficult',
    question: 'In web design, what does CSS stand for?',
    correct_answer: 'Cascading Style Sheet',
    incorrect_answers: [
      'Counter Strike: Source',
      'Corrective Style Sheet',
      'Computer Style Sheet',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'difficult',
    question:
      'What is the code name for the mobile operating system Android 7.0?',
    correct_answer: 'Nougat',
    incorrect_answers: [
      'Ice Cream Sandwich',
      'Jelly Bean',
      'Marshmallow',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'On Twitter, what is the character limit for a Tweet?',
    correct_answer: '140',
    incorrect_answers: ['120', '160', '100'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question: 'Linux was first created as an alternative to Windows XP.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'difficult',
    question:
      'Which programming language shares its name with an island in Indonesia?',
    correct_answer: 'Java',
    incorrect_answers: ['Python', 'C', 'Jakarta'],
  },
];

let level;
let questionsArr = [];
let questionIndex = 0;
let points = 0;

window.onload = function() {

  let playButton = document.getElementById("playButton");
  playButton.addEventListener("click", selectLevel);

  function selectLevel() {
    let form = document.getElementById("form");
    let radioButtons = form.getElementsByTagName("input");
    for(let radioBtn of radioButtons) {
      if (radioBtn.checked) {
        level = radioBtn.value;
        break;
      }
    }
    if (level !== undefined) {
      refreshPage();
      selectQuestion();
    } else {
      alert("Seleziona il livello di difficoltà!");
    }
    if (questionsArr.length > 0) {
      popQuestion(questionsArr[questionIndex], questionIndex);
    }
  }

  function refreshPage() {
    let form = document.getElementById("form");
    form.remove();
  }

  function selectQuestion() {
    for(let question of questions) {
      if (level !== "both") {
        if (question.difficulty === level) {
          questionsArr.push(question);
        }
      } else {
        questionsArr.push(question);
      }
    }
  }


  function popQuestion(question, index) {
    let body = document.getElementsByTagName("body")[0];
    let div = document.createElement("div");
    div.setAttribute("id", "question_div");
    let p1 = document.createElement("p");
    p1.innerText = "category: " + question.category;
    div.appendChild(p1);
    let p2 = document.createElement("p");
    p2.innerText = "type: " + question.type;
    div.appendChild(p2);
    let p3 = document.createElement("p");
    p3.innerText = "difficulty: " + question.difficulty;
    div.appendChild(p3);
    let p4 = document.createElement("p");
    p4.innerText = "question: " + question.question;
    div.appendChild(p4);
    body.appendChild(div);
    displayChoices(question, index);
  }

  function displayChoices(question, index) {
    let body = document.getElementsByTagName("body")[0];
    let div = document.createElement("div");
    div.setAttribute("id", "answer_div");
    if (question.type === "boolean") {
      let trueOption = document.createElement("input");
      trueOption.setAttribute("type", "radio");
      trueOption.setAttribute("id", "true_option" + index);
      trueOption.setAttribute("name", "boolean_option" + index);
      trueOption.setAttribute("value", "True");
      div.appendChild(trueOption);
      let trueLabel = document.createElement("label");
      trueLabel.setAttribute("for", "true_option" + index);
      trueLabel.innerText = "True";
      div.appendChild(trueLabel);
      let falseOption = document.createElement("input");
      falseOption.setAttribute("type", "radio");
      falseOption.setAttribute("id", "false_option" + index);
      falseOption.setAttribute("name", "boolean_option" + index);
      falseOption.setAttribute("value", "False");
      div.appendChild(falseOption);
      let falseLabel = document.createElement("label");
      falseLabel.setAttribute("for", "false_option" + index);
      falseLabel.innerText = "False";
      div.appendChild(falseLabel);
    } else {
      let options = [];
      for(let answer of question.incorrect_answers) {
        options.push(answer);
      }
      options.push(question.correct_answer);
      options = sortOptions(options);
      for(let i = 0; i < options.length; i++) {
        let input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("id", "multiple_option" + index);
        input.setAttribute("name", "multiple_option" + index);
        input.setAttribute("value", options[i]);
        div.appendChild(input);
        let label = document.createElement("label");
        label.setAttribute("for", "multiple_options" + index);
        label.innerText = options[i];
        div.appendChild(label);
      }
    }
    let br = document.createElement("br");
    div.appendChild(br);
    let confirmButton = document.createElement("button");
    confirmButton.setAttribute("id", "confirm_button");
    confirmButton.innerText = "Confirm";
    confirmButton.addEventListener("click", confirmAnswer);
    div.appendChild(confirmButton);
    body.appendChild(div);
  }

  function sortOptions(arr) {
    let tries = arr.length;
    let temp = [];
    for(let i = 1; i <= tries; i++) {
      let random = Math.ceil(Math.random() * arr.length) - 1;
      temp.push(arr.splice(random, 1));
    }
    return temp;
  }

  function confirmAnswer() {
    let div = document.getElementById("answer_div");
    let radioButtons = div.getElementsByTagName("input");
    let selected = false;
    let target = false;
    for(let radioBtn of radioButtons) {
      if (radioBtn.checked) {
        selected = true;
        if (radioBtn.value === questionsArr[questionIndex].correct_answer) {
          target = true;
         points++;
        }
        break;
      }
    }
    if (selected) {
      if (target) {
        alert("Right Answer ✔");
      } else {
        alert("Wrong answer ❌");
      }
      questionIndex++;
      checkQuestionIndex();
    } else {
      alert("Seleziona una risposta!");
    }
  }

  function checkQuestionIndex() {
    blankPage();
    if (questionIndex === questionsArr.length) {
      showPoints();
    } else {
      popQuestion(questionsArr[questionIndex], questionIndex);
    }
  }

  function blankPage() {
    
    let div1 = document.getElementById("question_div");
    let div2 = document.getElementById("answer_div");
    div1.remove();
    div2.remove();
  }

  function showPoints() {
    let body = document.getElementsByTagName("body")[0];
    let p = document.createElement("p");
    p.setAttribute("id", "final_p");
    p.innerText = "Final Score 🏆: " + points;
    body.appendChild(p);
  }

  // ANCORA SUGGERIMENTI :)
  // Se stai mostrando al giocatore tutte le domande in un colpo solo:
  // Per ogni domanda, crea un elemento contenitore; poi crea un radio button (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)
  // con, come opzioni, sia la risposta corretta che quella/e non corretta/e. (puoi utilizzare google per capire come recuperare il valore di un
  // radio button per il punteggio finale)
  //
  // Se stai mostrando al giocatore le domande una alla volta:
  // All'inizio mostra la prima domanda con il testo i i radio buttons. Quando il giocatore seleziona una risposta, prendi la domanda
  // successiva dall'elenco e rimpiazza la domanda vecchia, salvando la risposta selezionata in una variabile.
}

// Come calcolare il punteggio? Puoi farlo in 2 modi:
// Se stai mostrando al giocatore tutte le domande in un colpo solo, seleziona tutti i radio buttons e controlla se la risposta selezionata
// è quella corretta.
// Se stai mostrando al giocatore le domande una alla volta, basta aggiungere o no 1 punto ogni volta che viene selezionata una risposta.