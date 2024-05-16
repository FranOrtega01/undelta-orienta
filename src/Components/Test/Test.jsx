import React, { useState, useEffect } from 'react'
import "./Test.css"
import { data } from '../../assets/data';
import { results } from '../../assets/data';

export const Test = () => {

  const [index, setIndex] = useState(0)
  const [question, setQuestion] = useState(data[index])
  const [score, setScore] = useState(0)
  const [selectedValue, setSelectedValue] = useState(0)

  const checkAns = (ans) => {
    const optionsElements = document.querySelectorAll('div ul li');
    optionsElements.forEach((option, index) => {
      if (index === ans) {
        option.classList.add('checked');
      } else {
        option.classList.remove('checked');
      }
    });
    setSelectedValue(ans + 1);
  }

  const handleQuestion = () => {
    setIndex(index + 1);
    const optionsElements = document.querySelectorAll('div ul li');
    optionsElements.forEach((option) => {
      option.classList.remove('checked');
    });
  }

  const getResults = () => {
    let i;
    if (score > 4) i = 0;
    if (score > 8) i = 1;
    if (score > 12) i = 2;
    if (score > 17) i = 3;
    const paragraphs = results[i]?.p.map((txt, idx) => {
      if (idx === results[i]?.p.length - 1) {
        // Si es el último párrafo, agrega el span al final
        return (
          <p key={idx}>
            {txt} <span>{results[i]?.span}</span>
          </p>
        );
      } else {
        // Para otros párrafos, solo renderiza el texto del párrafo
        return <p key={idx}>{txt}</p>;
      }
    });
  
    return <>{paragraphs}</>;
  }

  const resetTest = () => {
    setIndex(0);
    setScore(0);
    setSelectedValue(0);
  }

  useEffect(() => {
    setQuestion(data[index]);
    setScore(score + selectedValue);
    setSelectedValue(0);
  }, [index]);

  return (
    <div className='container'>
      <h1>UNDelta Test</h1>
      {index === data.length ?
        <div className='results'>
          {getResults()}
          <div>
            <button>Volver al Menú</button>
            <button onClick={resetTest}>Rehacer Test</button>
          </div>
        </div>
        :
        <>
          <h2>{index + 1}. {question?.question}</h2>
          <ul>
            {question?.options.map((q, i) => <li className='shadow' onClick={(e) => checkAns(i)}>{q}</li>)}
          </ul>
          <button disabled={!selectedValue} onClick={handleQuestion}>Siguiente</button>
          <div className="index">Pregunta {index + 1} de {data.length}</div>
        </>}
    </div>
  )
}
