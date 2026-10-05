import { useState } from 'react';
function FormularzUcznia() {
 		const [uczen, setUczen] = useState({
 			imie: '',
 			nazwisko: '',
 			klasa: '1A',
            srednia: 0,
 		});

 		function handleChange(e) {
 			setUczen(poprzedni => ({
 				...poprzedni,                   
 				[e.target.name]: e.target.value, 
 			}));
 		}

 		return (
 			<div>
 				<h2>Dane ucznia</h2>
 				<input
					name="imie"
 					placeholder="Imię"
 					value={uczen.imie}
					onChange={handleChange}
 				/>
 				<input
 					name="nazwisko"
 					placeholder="Nazwisko"
 					value={uczen.nazwisko}
 					onChange={handleChange}
				/>
 				<input
 					name="klasa"
 					placeholder="Klasa"
					value={uczen.klasa}
					onChange={handleChange}
 				/>
                <input
 					name="srednia"
 					placeholder="Średnia ocen"
                    value={uczen.srednia}
                    onChange={handleChange}
 				/>  
                <button onClick={() => console.log(uczen)}>Zapisz dane</button>


 				{/* Podgląd aktualnego stanu - bardzo przydatne do debugowania */}
 				<h3>Podgląd danych:</h3>
 				<p>Imię: {uczen.imie}</p>
 				<p>Nazwisko: {uczen.nazwisko}</p>
 				<p>Klasa: {uczen.klasa}</p>
                <p>Średnia ocen: {uczen.srednia}</p>

                <br></br>
      
 			</div>
 		);
 	}
export default FormularzUcznia;