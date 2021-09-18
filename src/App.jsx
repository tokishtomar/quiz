import React, {useEffect, useState, useMemo} from 'react';
import "./app.css";
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import Start from './components/Start';

const App = () => {
    const [username, setUsername] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [stop, setStop] = useState(false);
    const [earned, setEarned] = useState("Rs 0");

    const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel RedCliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who painted the Mona Lisa?",
      answers: [
        {
          text: "Pable Picasso",
          correct: false,
        },
        {
          text: "Michelangelo",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Sandro Botticelli",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "What was the most streamed show on Netflix in 2020?",
      answers: [
        {
          text: "NARCOS: MEXICO",
          correct: true,
        },
        {
          text: "MONEY HEIST",
          correct: false,
        },
        {
          text: "FRIENDS",
          correct: false,
        },
        {
          text: "TAJ MAHAL 1989",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the largest country in the world?",
      answers: [
        {
          text: "Canada",
          correct: false,
        },
        {
          text: "Russia",
          correct: true,
        },
        {
          text: "China",
          correct: false,
        },
        {
          text: "United States",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What does IPO stand for?",
      answers: [
        {
          text: "Indian public offering",
          correct: true,
        },
        {
          text: "Initial public offering",
          correct: false,
        },
        {
          text: "Indian private offering",
          correct: false,
        },
        {
          text: "Initial private offering",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is the longest river in the world?",
      answers: [
        {
          text: "Amazon",
          correct: false,
        },
        {
          text: "Mississippi",
          correct: false,
        },
        {
          text: "Yangtze",
          correct: false,
        },
        {
          text: "Nile",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "India's first metro railway service in Kolkata was started in the year",
      answers: [
        {
          text: "1984",
          correct: true,
        },
        {
          text: "1990",
          correct: false,
        },
        {
          text: "1992",
          correct: false,
        },
        {
          text: "1995",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "The population census in India is conducted after every",
      answers: [
        {
          text: "5 Years",
          correct: false,
        },
        {
          text: "10 Years",
          correct: true,
        },
        {
          text: "12 Years",
          correct: false,
        },
        {
          text: "15 Years",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which city is known as the diamond city of India",
      answers: [
        {
          text: "Ahmedabad",
          correct: false,
        },
        {
          text: "Chandigarh",
          correct: false,
        },
        {
          text: "Hyderabad",
          correct: false,
        },
        {
          text: "Surat",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "India won its first Olympic hockey gold in?",
      answers: [
        {
          text: "1938",
          correct: false,
        },
        {
          text: "1948",
          correct: true,
        },
        {
          text: "1942",
          correct: false,
        },
        {
          text: "1947",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which is India's first artificial satellite",
      answers: [
        {
          text: "INSAT",
          correct: false,
        },
        {
          text: "Aryabhata",
          correct: true,
        },
        {
          text: "Bhaskara",
          correct: false,
        },
        {
          text: "Rohini",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "First University established in India",
      answers: [
        {
          text: "University of Calcutta",
          correct: true,
        },
        {
          text: "Delhi University",
          correct: false,
        },
        {
          text: "Madras University",
          correct: false,
        },
        {
          text: "Banaras Hindu University",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "The first IIT was established in1951 known as",
      answers: [
        {
          text: "IIT Delhi",
          correct: false,
        },
        {
          text: "IIT Kanpur",
          correct: false,
        },
        {
          text: "IIT Kharagpur",
          correct: true,
        },
        {
          text: "IIT Madras",
          correct: false,
        },
      ],
    },
  ];

    const moneyPyramid = useMemo(()=>
        [
        {id:15, amount:"₹ 7 crore"},
        {id:14, amount:"₹ 1 crore"},
        {id:13, amount:"₹ 50,00,000"},
        {id:12, amount:"₹ 25,00,000"},
        {id:11, amount:"₹ 12,50,000"},
        {id:10, amount:"₹ 6,40,000"},
        {id:9, amount:"₹ 3,20,000"},
        {id:8, amount:"₹ 1,60,000"},
        {id:7, amount:"₹ 80,000"},
        {id:6, amount:"₹ 40,000"},
        {id:5, amount:"₹ 20,000"},
        {id:4, amount:"₹ 10,000"},
        {id:3, amount:"₹ 5,000"},
        {id:2, amount:"₹ 2,000"},
        {id:1, amount:"₹ 1,000"},
    ],
    []);

useEffect(()=> {
  questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
},[moneyPyramid, questionNumber])

    return (
        <div className="app">
          {username ? (
            <>
                <div className="main">
              {stop ? (<h1 className="endText">You Earned: {earned}</h1>) : (
                <>
                  <div className="top">
                      <div className="timer">
                        <Timer setStop={setStop} questionNumber={questionNumber} />
                      </div>
                  </div>
                  <div className="bottom">
                      <Quiz 
                          data={data} 
                          setStop={setStop}
                          questionNumber={questionNumber}
                          setQuestionNumber={setQuestionNumber}
                      />
                  </div>
                </>
              )}
            </div>
            <div className="pyramid">
                <ul className="moneyList">
                    {moneyPyramid.map((m)=> (
                        <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                        <span className="moneyListItemNumber">{m.id}</span>
                        <span className="moneyListItemAmount">{m.amount}</span> 
                    </li>
                    ))}                    
                </ul>
            </div>
            </>
          ) : ( <Start setUsername={setUsername} /> )}   
        </div>
    )
}

export default App
