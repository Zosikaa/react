/*	Zadanie 2 - Łatwe (Oceny ucznia)
	Stwórz komponent 'OcenyUcznia', który:
	- Przechowuje tablice ocen (stan), np. [5, 4, 3]
	- Umożliwia dodanie oceny przez input numeryczny (wartosci 1-6)
	- Wyświetla wszystkie oceny jako listę
	- Wyświetla średnią ocen obliczoną na bieżąco
		(podpowiedź: suma / ilość, metoda reduce lub pętla) - zaokrąglona do 2 miejsc po przecinku

	Podpowiedź obliczania średniej (
		const srednia = oceny.length > 0
			? (oceny.reduce((suma, o) => suma + o, 0) / oceny.length).toFixed(2)
			: 0;
	)
*/

import { useState } from 'react';

 function OcenyUcznia() {
	const [oceny, setOceny] = useState([5, 2, 3]);
	
	function dodajOcene() {
		const nowaOcena = parseInt(document.getElementById('ocenaInput').value);
		if (nowaOcena >= 1 && nowaOcena <= 6) {
			setOceny(poprzednie => [...poprzednie, nowaOcena]);
		}
	}

	const srednia = oceny.length > 0
		? (oceny.reduce((suma, o) => suma + o, 0) / oceny.length).toFixed(2)
		: 0;

	return (
		<div>

			<h2> Oceny ucznia </h2>	

			<input id = "ocenaInput" type = "number" placeholder = "Dodaj ocenę (1-6)" />

			<button onClick={dodajOcene}> Dodaj ocenę </button>

			<ul>
				{oceny.map((ocena, index) => ( <li key={index}>{ocena}</li>))}
			</ul>

			<p> Średnia ocen: {srednia} </p>

			<br></br>

		</div>
	);
}

export default OcenyUcznia;

