 /*   Zadanie 3 — Średnie — useDebounce
    Debounce to technika opóźniania wykonania operacji. Jest przydatna, gdy użytkownik szybko wpisuje tekst w wyszukiwarce — nie chcemy odpytywać API po każdej literze, tylko po chwili przerwy w pisaniu.

    Stwórz Custom Hook useDebounce(wartosc, opoznienie), który:

    Przyjmuje wartość i opóźnienie w milisekundach.
    Zwraca opóźnioną wersję wartości.
    Aktualizuje wartość dopiero po upływie zadanego czasu od ostatniej zmiany.
    Wskazówka: użyj useEffect z setTimeout i clearTimeout w funkcji cleanup. */

    import { useState, useEffect } from 'react';

function useDebounce(wartosc, opoznienie) {
    const [opoznionaWartosc, setOpoznionaWartosc] = useState(wartosc);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpoznionaWartosc(wartosc);
        }, opoznienie);

        return () => {
            clearTimeout(timer);
        };
    }, [wartosc, opoznienie]);

    return opoznionaWartosc;
}


function WyszukiwarkaUczniow() {
    const [imie, setImie] = useState('');

    const opoznioneImie = useDebounce(imie, 500);

    const uczniowie = {
        Jan: ['Jan Szulik 3TP', 'Jan Ptasiński 2TR'],
        Anna: ['Anna Stępień 4TI']
    };

    const wyniki = uczniowie[opoznioneImie] || [];

    return (
        <div>

            <h2>Wyszukiwarka uczniów</h2>

            <input
                type="text"
                value={imie}
                onChange={(e) => setImie(e.target.value)}
                placeholder="Wpisz imię ucznia..."
            />

            {imie !== opoznioneImie ? (

                <p>Wpisz imię ucznia...</p>

            ) : (

                <div>

                    <h3>Wyniki wyszukiwania:</h3>

                    {wyniki.length > 0 ? (

                        <ul>

                            {wyniki.map((uczen, index) => (
                                <li key={index}>{uczen}</li>
                            ))}

                        </ul>
                        
                    ) : (

                        <p>Nie znaleziono uczniów.</p>
                    )}

                </div>
            )}

        </div>
    );
}

export default WyszukiwarkaUczniow;