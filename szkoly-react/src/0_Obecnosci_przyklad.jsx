import { useState } from 'react';

	function LicznikObecnosci() {
 		const [obecni, setObecni] = useState(0);
 		function dodajUcznia() {
			const maksUczniowie = 30;
			if (obecni < maksUczniowie) {
 				setObecni(obecni + 1);}
			else {
				<button disabled> </button>
			}

		}

		function usunUcznia() {
			setObecni(poprzedni => (poprzedni > 0 ? poprzedni - 1 : 0));
 		}

 		return (
			<div>



				<h2>Obecność na lekcji1</h2>
				{/* Wyświetlamy aktualny stan */}
 				<p>Liczba obecnych uczniów: {obecni}</p>
 				<button onClick={dodajUcznia}>+ Dodaj ucznia</button>
				<button onClick={usunUcznia}>- Usuń ucznia</button>

				<br></br>

 			</div>
 		);
 	}

export default LicznikObecnosci;
