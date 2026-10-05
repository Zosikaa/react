/*	Zadanie 3 - Średnie (Lista obecności)
	Stwórz komponent 'ListaObecnosci', który:
	- Ma tablice uczniów (stan), każdy uczeń to obiekt: { id, imie, obecny: false }
	- Zaczyna z co najmniej 4 predefiniowanymi uczniami
	- Wyświetla listę uczniów z checkboxem przy każdym
	- Kliknięcie checkboxa przełącza pole 'obecny' dla danego ucznia
		(WAZNE: nie mutuj tablicy - użyj map() do stworzenia nowej wersji)
	- Na dole wyświetla: "Obecnych: X / Y" (X - obecni, Y - wszyscy)

	Podpowiedź do przełączania obecności (
		setUczniowie(poprzedni =>
			poprzedni.map(u =>
				u.id === id ? { ...u, obecny: !u.obecny } : u
			)
		);
	)
*/

import { useState } from 'react';

function ListaObecnosci() {
	const [uczniowie, setUczniowie] = useState([
		{ id: 1, imie: 'Zosia', obecny: false },
		{ id: 2, imie: 'Anna', obecny: false },
		{ id: 3, imie: 'Lena', obecny: false },
		{ id: 4, imie: 'Mateusz', obecny: false }
	]);	

	function zmienObecność(id) {
		setUczniowie(poprzedni =>
		poprzedni.map(uczen =>
				uczen.id === id ? { ...uczen, obecny: !uczen.obecny } : uczen
			)
		);
	}

	const obecni = uczniowie.filter(uczen => uczen.obecny).length;

	return (

		<div>
			<h2 >Lista obecności </h2>	

			<ul>
				{uczniowie.map(uczen => (<li key={uczen.id}>

						<input type="checkbox" checked={uczen.obecny} onChange={() => zmienObecność(uczen.id)} />		

						{uczen.imie}

					</li>

				))}

			</ul>
				
			<p> Obecnych: {obecni} / {uczniowie.length} </p>

			<br></br>	
			<br></br>
			<br></br>	
			<br></br>
			<br></br>	
			<br></br>
			<br></br>	
			<br></br>
			<br></br>	
			<br></br>
			<br></br>	
			<br></br>
			<br></br>	
			<br></br>
			
		</div>
	);
}

export default ListaObecnosci;