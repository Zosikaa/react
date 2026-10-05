import { useState } from 'react';

 	function ListaUczniow() {

 		const [uczniowie, setUczniowie] = useState([
 			{ id: 1, imie: 'Anna Kowalska' },
			{ id: 2, imie: 'Bartek Nowak' },
 		]);

 		const [noweImie, setNoweImie] = useState('');

 		function dodajUcznia() {
			if (noweImie.trim() === '') return; 
 			const nowyUczen = {
 				id: Date.now(), 
 				imie: noweImie,
 			};
 			setUczniowie(poprzedni => [...poprzedni, nowyUczen]);
			setNoweImie(''); 
 		}

 		function usunUcznia(id) {
 			setUczniowie(poprzedni => poprzedni.filter(u => u.id !== id));
 		}

 		return (
 			<div>
 				<h2>Lista uczniów</h2>
 				<input
 					placeholder="Imię i nazwisko"
 					value={noweImie}
 					onChange={e => setNoweImie(e.target.value)}
 				/>
 				<button onClick={dodajUcznia}>Dodaj ucznia</button>
 				<ul>
 					{uczniowie.map(uczen => (
 						// 'key' musi być unikalny w liście - więcej w lekcji 6
 						<li key={uczen.id}>
 							{uczen.imie}
 							<button onClick={() => usunUcznia(uczen.id)}>Usuń</button>
 						</li>
 					))}
 				</ul>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
 			</div>
 		);
 	}

export default ListaUczniow;    
