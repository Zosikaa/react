/*    ### Zadanie 1 — Łatwe — `useToggle`

    Stwórz Custom Hook `useToggle`, który:

    - Przyjmuje opcjonalny parametr `wartoscPoczatkowa`, domyślnie `false`.
    - Zwraca tablicę `[wartosc, toggle]`, podobnie jak `useState`.
    - Funkcja `toggle` odwraca wartość (`true` → `false`, `false` → `true`).

    Użyj go w komponencie `PrzelacznikWidoku`, który wyświetla przycisk „Pokaż szczegóły” lub „Ukryj szczegóły”. Gdy szczegóły są widoczne, pokaż dodatkowe informacje o uczniu. Tekst przycisku powinien zależeć od stanu.

    Przykład użycia: */


import { useState } from 'react';

function useToggle(wartoscPoczatkowa = false) {
    const [wartosc, setWartosc] = useState(wartoscPoczatkowa);

    function toggle() {
        setWartosc(poprzednie => !poprzednie);
    }

    return [wartosc, toggle];
}


function PrzelacznikWidoku() {
    const [pokazSzczegoly, toggleSzczegoly] = useToggle(false);

    return (
        <div>
            <button onClick={toggleSzczegoly}>
                {pokazSzczegoly
                    ? 'Ukryj szczegóły'
                    : 'Pokaż szczegóły'}
            </button>

            {pokazSzczegoly && (
                <div>
                    <h3>Szczegóły ucznia</h3>
                    <p>Imię: Zofia</p>
                    <p>Nazwisko: Bielińska</p>
                    <p>Wiek: 16</p>
                </div>
            )}
        </div>
    );
}

export default PrzelacznikWidoku;
