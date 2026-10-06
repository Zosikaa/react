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
	const [czas, setCzas] = useState([])

	useEffect(() => {
		const interval = setInterval(() => {
			setSekundy(s => s + 1);
		}, 1);


	})

	return (
		<div>

			<h1> ZEGAR CYFROWY </h1>

		</div>
	)
}

export default ZegarCyfrowy