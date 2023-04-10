import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HtmlTestBasic() {
  const question = [
    {
      questionText: 'HTML - это?',
      answerOptions: [
        { answertext: 'приложение', isCorrect: false },
        { answertext: 'язык программирования', isCorrect: false },
        { answertext: 'текстовый редактор', isCorrect: false },
        { answertext: 'язык разметки гипертекста', isCorrect: true },
      ],
    },
    {
      questionText: 'Выберите тег переноса строки:',
      answerOptions: [
        { answertext: 'img', isCorrect: false },
        { answertext: 'src', isCorrect: false },
        { answertext: 'tr', isCorrect: false },
        { answertext: 'br', isCorrect: true },
      ],
    },
    {
      questionText: 'Значением атрибута border может быть?',
      answerOptions: [
        { answertext: 'green', isCorrect: false },
        { answertext: 'left', isCorrect: false },
        { answertext: 'top', isCorrect: false },
        { answertext: '2', isCorrect: true },
      ],
    },
    {
      questionText: 'Атрибут  background задает?',
      answerOptions: [
        { answertext: 'фон страницы', isCorrect: false },
        { answertext: 'фон ячейки', isCorrect: false },
        { answertext: 'фон таблицы', isCorrect: false },
        { answertext: 'все ответы верны', isCorrect: true },
      ],
    },
    {
      questionText: 'Какой из перечисленных не является параметром тега font?',
      answerOptions: [
        { answertext: 'border', isCorrect: true },
        { answertext: 'face', isCorrect: false },
        { answertext: 'color', isCorrect: false },
        { answertext: 'size', isCorrect: false },
      ],
    },
    {
      questionText: 'Какой вариант является правильно организованной гиперссылкой?',
      answerOptions: [
        { answertext: 'a href="page1.html"', isCorrect: true },
        { answertext: 'a src="page1.html"', isCorrect: false },
        { answertext: 'img href="page.html"', isCorrect: false },
        { answertext: 'a img="page1.html"', isCorrect: false },
      ],
    },
    {
      questionText: 'Какой тег задает абзац?',
      answerOptions: [
        { answertext: 'allign', isCorrect: false },
        { answertext: 'p', isCorrect: true },
        { answertext: 'td', isCorrect: false },
        { answertext: 'br', isCorrect: false },
      ],
    },
    {
      questionText: 'Какой тег задает ячейку в таблице?',
      answerOptions: [
        { answertext: 'tr', isCorrect: false },
        { answertext: 'th', isCorrect: false },
        { answertext: 'tu', isCorrect: false },
        { answertext: 'td', isCorrect: true },
      ],
    },
    {
      questionText: 'Какой тег из перечисленных не является основным?',
      answerOptions: [
        { answertext: 'html', isCorrect: false },
        { answertext: 'caption', isCorrect: true },
        { answertext: 'body', isCorrect: false },
        { answertext: 'head', isCorrect: false },
      ],
    },
    {
      questionText: 'С помощью какого тега можно вставить рисунок?',
      answerOptions: [
        { answertext: 'img', isCorrect: true },
        { answertext: 'br', isCorrect: false },
        { answertext: 'title', isCorrect: false },
        { answertext: 'p', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuistion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const hendleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < question.length) {
      setCurrentQuistion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const refresh = () => {
    setCurrentQuistion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="test">
      {
        showScore
          // ? <Result/>
          ? <div className="section_score">
            <div>Правильных ответов {score} из {question.length}</div>
            <button
              className="btn_test refresh_btn"
              onClick={refresh}
            >Повторить</button>
            <button className="btn_test">
              <Link
                style={{ textDecoration: 'none', color: 'inherit' }}
                to={'/quizs/html'}
              >
                Выход
              </Link>
            </button>
          </div>
          : <div className="quizz">
            <div className="questin_section">
              <div style={{ color: 'white' }} className="questin_count">
                <span style={{ color: 'white' }}>Вопрос {currentQuestion + 1}</span>/{question.length}
              </div>
              <div style={{ color: 'white' }} className="question_text">{question[currentQuestion].questionText}</div>
            </div>
            <div className="answer_section">
              {question[currentQuestion].answerOptions.map(item => (
                <button className="btn_test"
                  onClick = {() => hendleAnswerOptionClick(item.isCorrect)}
                >{item.answertext}</button>))}
            </div>
          </div>
      }
    </div>);
}
