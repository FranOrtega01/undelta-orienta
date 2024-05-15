import React, { useState } from 'react';
import './App.css';
import { Form } from './Components/Form';
import { Answer } from './Components/Answer';
import { Home } from './Components/Home';

function App() {

  const [currentComponent, setCurrentComponent] = useState('form');
  const [loading, setLoading] = useState(false);
  const [pts, setPts] = useState(0);

  const handleButtonClick = (nextComponent, points) => {
    setLoading(true);

    // Simular un retraso de carga
    setTimeout(() => {
      setCurrentComponent(nextComponent);
      setLoading(false);
      setPts(points);
    }, 1000); // Cambia esto al tiempo de carga deseado en milisegundos
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case 'home':
        return (
          <Home
            onNext={() => handleButtonClick('form', 0)}
          />
        );
      case 'form':
        return (
          <Form
            onNext={(points) => handleButtonClick('results', points)}
          />
        );
      case 'results':
        return <Answer onNext={() => handleButtonClick('form', 0)} pts={pts} />;
      default:
        return <Home onNext={() => handleButtonClick('form', 0)} />;
    }
  };
  return (
    <>
      <div className="app">
        {loading ? (
            <p style={{fontSize:18}}>Cargando...</p>
        ) : (
          <div className="content">
            {renderComponent()}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
