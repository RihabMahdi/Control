import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWeight, setHeight, calculateBMI } from './features/bmiSlice';
import './App.css'
function App() {
  const dispatch = useDispatch();
  const bmi = useSelector((state) => state.bmi.bmi);

  const [weightInput, setWeightInput] = useState(0);
  const [heightInput, setHeightInput] = useState(0);

  const handleWeightChange = (e) => {
    setWeightInput(e.target.value);
    dispatch(setWeight(Number(e.target.value)));
  };

  const handleHeightChange = (e) => {
    setHeightInput(e.target.value);
    dispatch(setHeight(Number(e.target.value)));
  };

  const handleCalculate = () => {
    dispatch(calculateBMI());
  };

  const getBMICategory = (bmi) => {
    if (bmi < 19) return "Sous-poids";
    if (bmi >= 19 && bmi <= 25) return "Normal";
    if (bmi > 25) return "Surpoids";
  };

  return (
    <div className="App">
      <h1>Calculateur BMI</h1>
      <div>
        <label>
          Poids (kg):
          <input type="number" value={weightInput} onChange={handleWeightChange} />
        </label>
      </div>
      <div>
        <label>
          Taille (m):
          <input type="number" step="0.01" value={heightInput} onChange={handleHeightChange} />
        </label>
      </div>
      <button onClick={handleCalculate}>Calculer BMI</button>
      <h2>Votre BMI: {bmi}</h2>
      <h3>Catégorie: {bmi > 0 ? getBMICategory(bmi) : "Veuillez entrer vos données"}</h3>
    </div>
  );
}

export default App;
