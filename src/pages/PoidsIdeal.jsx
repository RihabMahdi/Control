import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWeight, setHeight, calculateBMI } from '../features/bmiSlice';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PoidsIdeal() {
  const dispatch = useDispatch();
  const bmi = useSelector((state) => state.bmi.bmi);
  const error = useSelector((state) => state.bmi.error);

  const [weightInput, setWeightInput] = useState(0);
  const [heightInput, setHeightInput] = useState(0);
  const [gender, setGender] = useState('female'); 
  const [idealWeight, setIdealWeight] = useState(null); 

  const handleWeightChange = (e) => {
    const weight = Number(e.target.value);
    setWeightInput(weight);
    dispatch(setWeight(weight));
  };

  const handleHeightChange = (e) => {
    const height = Number(e.target.value);
    setHeightInput(height);
    dispatch(setHeight(height));
  };

  const handleCalculate = () => {
    dispatch(calculateBMI());
    calculateIdealWeight(); // Calculate ideal weight on button click
  };

  const calculateIdealWeight = () => {
    const heightInMeters = heightInput / 100; // Convert cm to m
    let idealWeight;

    if (gender === 'male') {
      idealWeight = 50 + 2.3 * ((heightInput / 2.54) - 60); // Devine formula
    } else {
      idealWeight = 45.5 + 2.3 * ((heightInput / 2.54) - 60); // Devine formula
    }

    setIdealWeight(idealWeight);
  };


  return (
    <div className="App">
      <h1>Calculateur Poids Idéal</h1>
      <h3 style={{ color: 'red' }}>{error}</h3>
      <div>
        <label>
          Poids (kg):
          <input type="number" value={weightInput} onChange={handleWeightChange} placeholder="Entrez votre poids en kg" />
        </label>
      </div>
      <div>
        <label>
          Taille (cm):
          <input type="number" step="1" value={heightInput} onChange={handleHeightChange} placeholder="Entrez votre taille en cm" />
        </label>
      </div>
      <div className='d-flex mx-5'>
        <label>
          <input
            type="radio"
            value="male"
            checked={gender === 'male'}
            onChange={() => setGender('male')}
          />
          Homme
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={gender === 'female'}
            onChange={() => setGender('female')}
          />
          Femme
        </label>
        <div className='mx-5'>
          {gender === 'male' ? (
            <img src="https://static.vecteezy.com/system/resources/previews/001/761/308/original/young-man-standing-in-white-background-free-vector.jpg" alt="Homme" width={200} height={200} />
          ) : (
            <img src="https://st4.depositphotos.com/1077687/27921/v/450/depositphotos_279211052-stock-illustration-young-woman-standing-on-white.jpg" alt="Femme" width={200} height={200} />
          )}
        </div>
      </div>
      <button onClick={handleCalculate}>Calculer Poids Idéal</button>
      <h2>Votre Poids Idéal: {bmi}</h2>
      {idealWeight && <h3>Votre Poids Idéal: {idealWeight.toFixed(2)} kg</h3>} 
    </div>
  );
}

export default PoidsIdeal;
