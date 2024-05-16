import React, { useState, useEffect } from 'react'
import "./Test.css"
import { data } from '../../assets/data';
import { results } from '../../assets/data';
// Logos
import fb from '../../assets/fb.png'
import ig from '../../assets/ig.png'
import wpp from '../../assets/wpp.png'


export const Test = () => {

  const [index, setIndex] = useState(0)
  const [question, setQuestion] = useState(data[index])
  const [score, setScore] = useState(0)
  const [selectedValue, setSelectedValue] = useState(0)
  const [loading, setLoading] = useState(false)
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
    setScore(score + selectedValue);
    setSelectedValue(0);
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
  }, [index]);

  useEffect(() => {
    if (index + 1 === data.length) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [index]);

  return (
    <div className='container'>
      <h1>UNDelta Test</h1>
      {index === data.length ?
        loading ? <Spinner /> :
        <div className='results'>
          {getResults()}
          <div>
            <button>Volver al Menú</button>
            <button onClick={resetTest}>Rehacer Test</button>
          </div>
          <div className='social'>
            <a href="https://www.facebook.com/UNIVERSIDADDELTA" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/universidaddelta?igsh=ajg3Y3NjYjlvNTdp" target="_blank" rel="noopener noreferrer">
              <img src={ig} alt="Instagram" />
            </a>
            <a href="https://wa.link/2bnt9s" target="_blank" rel="noopener noreferrer">
              <img src={wpp} alt="WhatsApp" />
            </a>
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
        </>
      }
    </div>
  )
}

const Spinner = () => {

  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Analizando respuestas...</p>
    </div>
  )
}