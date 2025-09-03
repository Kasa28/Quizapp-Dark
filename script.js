let questions = [
    {
        "question": "Wer hat HTML erfunden",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Was bedeutet CSS?",
        "answer_1": "Creative Style System",
        "answer_2": "Cascading Style Sheets",
        "answer_3": "Computer Style Structure",
        "answer_4": "Colorful Style Scripts",
        "right_answer": 2
    },
    {
        "question": "Welche Programmiersprache wird hauptsächlich für Webseiten verwendet?",
        "answer_1": "Python",
        "answer_2": "C++",
        "answer_3": "JavaScript",
        "answer_4": "Java",
        "right_answer": 3
    },
    {
        "question": "Was macht der Befehl console.log() in JavaScript?",
        "answer_1": "Er zeigt Text auf der Webseite an",
        "answer_2": "Er öffnet eine neue Seite",
        "answer_3": "Er loggt den Benutzer aus",
        "answer_4": "Er gibt eine Nachricht in der Konsole aus",
        "right_answer": 4
    },

    {
        "question": "Wie beginnt ein HTML-Dokument?",
        "answer_1": "&#60;html&#62;",
        "answer_2": "&#60;body&#62;",
        "answer_3": "&#60;!DOCTYPE html&#62;",
        "answer_4": "&#60;head&#62;",
        "right_answer": 3
    },
    {
        "question": "Welche HTML-Tags benutzt man für Überschriften?",
        "answer_1": "&#60;headline&#62;",
        "answer_2": "&#60;heading&#62;",
        "answer_3": "&#60;h1&#62; bis &#60;h6&#62;",
        "answer_4": "&#60;head&#62;",
        "right_answer": 3
    },
    {
        "question": "Wie bindet man eine CSS-Datei in HTML ein?",
        "answer_1": "&#60;css&#62;style.css&#60;/css&#62;",
        "answer_2": "&#60;link rel='stylesheet' href='style.css'&#62;",
        "answer_3": "&#60;script src='style.css'&#62;",
        "answer_4": "&#60;style src='style.css'&#62;",
        "right_answer": 2
    },
    {
        "question": "Wie kann man in JavaScript eine Funktion definieren?",
        "answer_1": "function meinFunktion() { }",
        "answer_2": "func meinFunktion()",
        "answer_3": "define meinFunktion()",
        "answer_4": "create function meinFunktion()",
        "right_answer": 1
    },
    {
        "question": "Welcher Wert bedeutet in CSS: Element ist **nicht sichtbar**, aber **nimmt Platz ein**?",
        "answer_1": "display: none",
        "answer_2": "visibility: hidden",
        "answer_3": "opacity: 0",
        "answer_4": "z-index: -1",
        "right_answer": 2
    },
    {
        "question": "Was ist das Standard-Ausgabeformat von console.log()?",
        "answer_1": "Popup",
        "answer_2": "Alert-Fenster",
        "answer_3": "Browser-Konsole",
        "answer_4": "Webseite",
        "right_answer": 3
    }
];

let rightQuestions = 0;
let currentQuestion = 0;//beginnen mit erste Frage





function init() {
    document.getElementById('all_questions').innerHTML = questions.length;//wird angezeigt wie viel Fragen es existieren

    showQuestion();
}



function showQuestion() {

    if (currentQuestion >= questions.length) { //currentQuestioon hat nummer 10 am ende weil so viele fragen sind
    document.getElementById('endscreen').style = '';
    document.getElementById('questionbody').style = 'display:none';
     document.getElementById('amount-of-questions').innerHTML = questions.length;
     document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
     document.getElementById('header-image').src = 'img/winner.jpg'//bild ersetzen


    }else{
        document.getElementById('numberquestion').innerHTML = currentQuestion + 1;

    let question = questions[currentQuestion];//machen container daraus holen wir aus questions die 1 frage

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    }

}

function answer(selection){
     let question = questions[currentQuestion];
     let SelectedQuestionNumber = selection.slice(-1);
     let idOfRightAnswer = `answer_${question['right_answer']}`;


        if(SelectedQuestionNumber == question['right_answer']) { //richtig beantwortrt
            console.log('Richtig');
            document.getElementById(selection).parentNode.classList.add('bg-success');
            rightQuestions++;
        }else {
             document.getElementById(selection).parentNode.classList.add('bg-danger');
             document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');

        }

        document.getElementById('next').disabled = false;//Nächste Frage button kann gedrückt werden
    }

    function nextQuestion() {
        currentQuestion++;//nächste frage 
        document.getElementById('next').disabled = true; //das der button nächste frage wieder deaktiviert wird
        resetAnswerButtons();
        showQuestion();
    }


    function resetAnswerButtons() {
         document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
         document.getElementById('answer_1').parentNode.classList.remove('bg-success');
         document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
         document.getElementById('answer_2').parentNode.classList.remove('bg-success');
         document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
         document.getElementById('answer_3').parentNode.classList.remove('bg-success');
         document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
         document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    }
