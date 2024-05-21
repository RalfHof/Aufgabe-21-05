

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Assuming you have CSS rules in this file
import reportWebVitals from './reportWebVitals';

let myName = "Ralf";
let otherPerson = "Ralf";

let customStyles = {
  color: "brown",
  fontSize: "40px",
  border: "1px solid black"
};

function addieren(zahl1, zahl2) {
  return zahl1 + zahl2;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function App() {
  const number1 = 10;
  const number2 = 15;
  const sum = addieren(number1, number2);
  const sqrtNumber = 16;
  const sqrtResult = Math.sqrt(sqrtNumber);
  const randomNumber = getRandomNumber();
  const currentDate = new Date().toLocaleDateString();

  return (
    <div>
      <h1 className="text-red">Dieser Text ist rot und hat eine Schriftgröße von 20px.</h1>
      <p className="text-blue">Dieser Text ist blau und hat eine Schriftgröße von 25px.</p>
      <p style={{ color: 'green', fontSize: '30px' }}>
        Dieser Text ist grün und hat eine Schriftgröße von 30px. (Inline-Styling)
      </p>
      <h3>Ergebnis der Addition: {number1} + {number2} = {sum}</h3>
      <h3>Quadratwurzel von {sqrtNumber} ist {sqrtResult}</h3>
      <p>Die zufällige Zahl zwischen 1 und 100 ist: {randomNumber}</p>
      <p>Das aktuelle Datum ist: {currentDate}</p>
      <h1 className="heading" contentEditable="true">Hallo Welt, ich bin {myName}</h1>
      <h2>Hausaufgaben am 21.05.24, {otherPerson}</h2>
      <h2>Meine zufällige Zahl ist: {Math.round(Math.random() * 10)}</h2>
      <h3 style={customStyles}>-----------Das ist der Taschenrechner--------------</h3> 
      <h1>Das Ergebnis ist berechnet: {addieren(9, 11)}</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
