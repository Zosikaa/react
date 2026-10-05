/*	Zadanie 1 - Proste (Przełącznik trybu ciemnego)
	Stwórz komponent 'TrybKoloru', ktory:
	- Przechowuje stan 'ciemnyTryb' (boolean, domyślnie false)
	- Wyświetla przycisk "Włącz tryb ciemny" lub "Wyłącz tryb ciemny"
		w zależności od aktualnego stanu
	- Po kliknięciu przełącza tryb na przeciwny
	- Wyświetla tekst "Aktualny tryb: ciemny" lub "Aktualny tryb: jasny"

	Podpowiedz:
	- useState(false) dla wartości logicznej
	- setTryb(poprzedni => !poprzedni) do przełączania
*/

import { useState } from 'react';

	function TrybKoloru() {

		const [ciemnyTryb, setCiemnyTryb] = useState(false);

		function zmienKolor() {
			setCiemnyTryb(poprzedni => !poprzedni);
		}

		return (
			<div>

				<h2> Tryb koloru </h2>	

				<button onClick={zmienKolor}>

						{ciemnyTryb ? 'Wyłącz tryb ciemny' : 'Włącz tryb ciemny'}

				</button>

				<p> Aktualny tryb: {ciemnyTryb ? 'ciemny' : 'jasny'} </p>

				<br></br>
				<br></br>

			</div>
		);
	}

export default TrybKoloru;