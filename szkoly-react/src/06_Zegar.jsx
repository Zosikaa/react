/*	Zadanie 1 - Latwe
	Stwórz komponent 'ZegarCyfrowy', który wyświetla aktualny czas (godziny, minuty, sekundy).
	Wymagania:
	- Użyj useEffect z [] do uruchomienia interwalu co 1 sekundę
	- Użyj useState do przechowywania aktualnego czasu
	- Wyświetl czas w formacie HH:MM:SS
	- W cleanup zatrzymaj interval (clearInterval)
	- Wskazówka: new Date().toLocaleTimeString()
*/


import { useState, useEffect } from 'react';


function ZegarCyfrowy() {
	const [czas, setCzas] = useState(new Date().toLocaleTimeString('pl-PL'));

	useEffect(() => {
		const interval = setInterval(() => {
			setCzas(new Date().toLocaleTimeString('pl-PL'));
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

		return (
		<div>
			<h2>ZEGAR CYFROWY</h2>

			<h2>{czas}</h2>

			<br></br>
			<br></br>
			<br></br>	
		</div>
	);
}

export default ZegarCyfrowy;