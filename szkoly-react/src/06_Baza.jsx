/*	Zadanie 2 - Latwe
	Stwórz komponent 'PowitanieZBazy', który:
	- Przy montowaniu (useEffect z []) "pobiera" imię ucznia z localStorage
		(klucz: 'imie-ucznia') lub ustawia domyślne "Nieznajomy"
	- Wyświetla "Witaj, [imie]!"
	- Ma pole input i przycisk "Zapisz imię"
	- Po kliknieciu przycisku zapisuje imie do localStorage i aktualizuje stan
	- Przy ponownym otwarciu strony pamięta zapisane imię
*/

import { useState, useEffect } from 'react';

function PowitanieZBazy() {
	const [imie, setImie] = useState('Nieznajomy');

	useEffect(() => {
		const imieZBazy = localStorage.getItem('imie-ucznia');		
		if (imieZBazy) {
			setImie(imieZBazy);
		}	
	}, []);

	const handleZapiszImie = () => {
		localStorage.setItem('imie-ucznia', imie);
	};	

	return (
		<div>
			<h2>POWITANIE Z BAZY</h2>	

			<p>Witaj, {imie}!</p>

			<input type = "text" value =  {imie} onChange = {(e) => setImie(e.target.value)}/>		

			<button onClick = {handleZapiszImie}> Zapisz imię </button>

			<br></br>	
			<br></br>
			<br></br>
			
		</div>
	);
}

export default PowitanieZBazy;