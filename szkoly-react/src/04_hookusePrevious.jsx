/*    ### Zadanie 4 — Średnie — `usePrevious`

    Czasem chcemy wiedzieć, jaka była poprzednia wartość stanu, np. uczeń miał ocenę 4, a teraz ma 5 — to poprawa.

    Stwórz Custom Hook `usePrevious(wartosc)`, który:

    - Przyjmuje dowolną wartość.
    - Zwraca poprzednią wartość, sprzed ostatniego renderu.
    - Przy pierwszym renderze zwraca `undefined`.

    **Wskazówka:** użyj `useRef` do przechowywania poprzedniej wartości. `useRef` nie powoduje ponownego renderowania komponentu, ale zachowuje wartość.
    import { useState, useRef, useEffect } from 'react';

    function usePrevious(wartosc) {
        const ref = useRef();

        useEffect(() => {
            ref.current = wartosc;
        }, [wartosc]);

        return ref.current;
    }
*/

import { useState, useRef, useEffect } from 'react';

function usePrevious(wartosc) {
    const ref = useRef();

    useEffect(() => {
        ref.current = wartosc;
    }, [wartosc]);

    return ref.current;
}


function HistoriaOcen() {
    const [ocena, setOcena] = useState(3);

    const poprzedniaOcena = usePrevious(ocena);

    return (
        <div>
            <h2>Historia ocen ucznia</h2>

            <p>Aktualna ocena: {ocena}</p>

            <p>
                Poprzednia ocena: {poprzedniaOcena ?? 'Brak'}
            </p>

            {poprzedniaOcena !== undefined && (
                <div>
                    {ocena > poprzedniaOcena ? (
                        <p> Poprawa ⬆️ </p>
                    ) : ocena < poprzedniaOcena ? (
                        <p> Pogorszenie ⬇️ </p>
                    ) : (
                        <p> Bez zmian </p>
                    )}
                </div>
            )}

            <h3>Zmień ocenę:</h3>

            <button onClick={() => setOcena(1)}> 1 </button>
            <button onClick={() => setOcena(2)}> 2 </button>
            <button onClick={() => setOcena(3)}> 3 </button>
            <button onClick={() => setOcena(4)}> 4 </button>
            <button onClick={() => setOcena(5)}> 5 </button>
            <button onClick={() => setOcena(6)}> 6 </button>

        </div>
    );
}

export default HistoriaOcen;