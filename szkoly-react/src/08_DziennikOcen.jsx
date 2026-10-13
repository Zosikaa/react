/*	Zadanie 3 (średnie) - Dziennik ocen z filtrami
	Stwórz komponent 'DziennikOcen'.
	Dane: tablica ocen z polami: id, przedmiot, ocena (1-6), data.
	Wymagania:
	- Wyświetl listę ocen
	- Dodaj filtr (select) pozwalający wybrać konkretny przedmiot lub 'Wszystkie'
	- Wyświetl średnią ocen z aktualnie wyświetlanych przedmiotów
	- Użyj id jako klucza
	- Jeśli po filtrowaniu nie ma żadnych ocen, wyświetl tekst 'Brak ocen z tego przedmiotu'

	Wskazówka: listę unikalnych przedmiotów do selecta możesz stworzyć używając:
	[...new Set(oceny.map(o => o.przedmiot))]
*/

import { useState } from 'react';

function DziennikOcen() {
    const [wybranyPrzedmiot, setWybranyPrzedmiot] = useState('wszystkie');

    const oceny = [
        { id: 1, przedmiot: 'Matematyka', ocena: 2, data: '2026-10-13' },
        { id: 2, przedmiot: 'Język polski', ocena: 4, data: '2026-09-25' },
        { id: 3, przedmiot: 'Historia', ocena: 3, data: '2026-10-30' },
		{ id: 4, przedmiot: 'Matematyka', ocena: 3, data: '2026-11-02' },
    ];

    const przedmioty = [...new Set(oceny.map(o => o.przedmiot))];

    const przefiltrowaneOceny = oceny.filter(ocena =>
        wybranyPrzedmiot === 'wszystkie' ||
        ocena.przedmiot === wybranyPrzedmiot
    );

    const srednia = przefiltrowaneOceny.length > 0
        ? przefiltrowaneOceny.reduce((suma, ocena) => suma + ocena.ocena, 0)
            / przefiltrowaneOceny.length
        : 0;

    return (
        <div>
    		Wybierz przedmiot: 

            <select id = "przedmiot" value = {wybranyPrzedmiot} onChange = {(e) => setWybranyPrzedmiot(e.target.value)}>

                <option value = "wszystkie"> Wszystkie </option>

                {przedmioty.map(przedmiot => (
                    <option key={przedmiot} value={przedmiot}>
                        {przedmiot}
                    </option>
                ))}

            </select>

            <table>
                <thead>
                    <tr>
                        <th>Przedmiot</th>
                        <th>Ocena</th>
                        <th>Data dodania</th>
                    </tr>
                </thead>

                <tbody>
                    {przefiltrowaneOceny.length > 0 
					? (
                        przefiltrowaneOceny.map(ocena => (
                            <tr key={ocena.id}>
                                <td>{ocena.przedmiot}</td>
                                <td>{ocena.ocena}</td>
                                <td>{ocena.data}</td>
                            </tr>
                        )))
			        : (
                        <tr>
                            <td> Brak ocen z tego przedmiotu </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <p>
                Średnia ocen: {przefiltrowaneOceny.length > 0
                    ? srednia.toFixed(2)
                    : 'Brak ocen'}
            </p>
        </div>
    );
}
export default DziennikOcen