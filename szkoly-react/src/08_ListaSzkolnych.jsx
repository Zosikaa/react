/*	Zadanie 1 (proste) - Lista przedmiotów szkolnych
	Stwórz komponent 'ListaPrzedmiotow'.
	Dane: tablica stringów z nazwami przedmiotów: Matematyka, Polski, Angielski, Historia, Fizyka, Chemia, Biologia.
	Wyświetl je jako listę nieuporządkowaną <ul>.
	Ponieważ są to stringi (nie obiekty z id), możesz użyć indeksu jako klucza
	- lista jest statyczna i się nie zmienia.

	Oczekiwany wynik:
	Lista przedmiotów:
	- Matematyka
	- Polski
	- Angielski
	- (i tak dalej...)
*/

function ListaPrzedmiotow() {

	const przedmioty = ['Matematyka', 'Polski', 'Angielski', 'Historia', 'Fizyka', 'Chemia', 'Biologia']

	return (
		<div>
			<ul>
				{przedmioty.map((przedmiot) => <li>{przedmiot}</li>)}
			</ul>	
		</div>
	)

}

export default ListaPrzedmiotow