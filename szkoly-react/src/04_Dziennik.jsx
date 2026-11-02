/*	Zadanie 4 - Średniozaawansowane (Koszyk ocen z usuwaniem)
	Stwórz komponent 'DziennikOcen', który symuluje dziennik:
	- Stan: tablica obiektów { id, przedmiot, ocena, data }
	- Formularz z polem select dla przedmiotu (min 4 przedmioty),
		polem number dla oceny (1-6) - data ustawiania automatycznie (new Date().toLocaleDateString())
	- Po kliknięciu "Dodaj ocenę" - dodaje wpis do stanu
	- Wyświetla wszystkie wpisy w tabeli HTML (kolumny: Przedmiot, Ocena, Data, Akcja)
	- Przycisk "Usuń" w każdym wierszu usuwa dany wpis
	- Na dole: średnia wszystkich ocen (lub komunikat "Brak ocen")
*/

import { useState } from 'react';

function DziennikOcen_1() {
	const [oceny, setOceny] = useState([]);

	const dodajOcene = (e) => {
		e.preventDefault();
		const nowaOcena = {
			id: oceny.length + 1,
			przedmiot: przedmiot,
			ocena: parseInt(ocena),
			data: new Date().toLocaleDateString(),
		};
		setOceny([...oceny, nowaOcena]);
	}

	const usunOcene = (id) => {
		setOceny(oceny.filter(ocena => ocena.id !== id));
	}

	return (
		<div>
			<h2>Dziennik ocen</h2>

			<form onSubmit = {dodajOcene}>

				<label>

					Przedmiot:

					<select value = {przedmiot} onChange={(e) => setPrzedmiot(e.target.value)}>
						<option value = "Matematyka" > Matematyka </option>
						<option value = "Język polski" > Język polski </option>
						<option value = "Historia" > Historia </option>
						<option value = "Fizyka" > Fizyka </option>
					</select>

				</label>

			</form>		

			<table>

				<thead>
					<tr>
						<th>Przedmiot</th>	
						<th>Ocena</th>
						<th>Data</th>
					</tr>
				</thead>

				<tbody>
					{oceny.map((ocena) => (
						<tr key={ocena.id}>
							<td>{ocena.przedmiot}</td>
							<td>{ocena.ocena}</td>
							<td>{ocena.data}</td>
							<td>
								<button onClick={() => usunOcene(ocena.id)}> Usuń </button>
							</td>
						</tr>
					))}
				</tbody>	

			</table>	

			<p> Średnia: {oceny.length > 0 ? (oceny.reduce((sum, ocena) => sum + ocena.ocena, 0) / oceny.length).toFixed(2) : "Brak ocen"} </p>

		</div>
	);

}

export default DziennikOcen_1