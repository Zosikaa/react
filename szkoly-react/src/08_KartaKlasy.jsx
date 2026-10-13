/*	Zadanie 2 (lekko trudniejsze) - Karta klasy
	Stwórz komponent 'KartaKlasy'.
	Dane: tablica obiektów uczniów, każdy z polami: id, imie, nazwisko, nrDziennika.
	Wyświetl uczniów jako tabelę HTML z kolumnami: Nr dziennika, Imię, Nazwisko.
	Posortuj uczniów po nrDziennika przed wyświetleniem.
	Użyj id ucznia jako klucza.

	Przykładowe dane do użycia:
	const uczniowie = [
		{ id: 1, imie: 'Celina', nazwisko: 'Wiśniowska', nrDziennika: 3 },
		{ id: 2, imie: 'Anna', nazwisko: 'Kowalska', nrDziennika: 1 },
		{ id: 3, imie: 'Bartek', nazwisko: 'Nowak', nrDziennika: 2 },
	];
*/

function KartaKlasy() {

	const uczniowie = [
		{ id: 1, imie: 'Celina', nazwisko: 'Wiśniowska', nrDziennika: 3 },
		{ id: 2, imie: 'Anna', nazwisko: 'Kowalska', nrDziennika: 1 },
		{ id: 3, imie: 'Bartek', nazwisko: 'Nowak', nrDziennika: 2 },
	];

	const posortowani = [...uczniowie].sort((a, b) => a.nrDziennika - b.nrDziennika);

	return (	
		<div>
			<table>

				<thead>	
					<tr>
						<th> Nr dziennika </th>	
						<th> Imię </th>
						<th> Nazwisko </th>	
					</tr>
				</thead>

				<tbody>
					{posortowani.map((uczen) => (
						<tr key={uczen.id}>
							<td> {uczen.nrDziennika} </td>	
							<td> {uczen.imie} </td>
							<td> {uczen.nazwisko} </td>	
						</tr>
					))}
				</tbody>
			</table>	
		</div>
	)
}

export default KartaKlasy