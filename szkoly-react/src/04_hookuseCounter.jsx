/*    ### Zadanie 2 — Łatwe–średnie — `useCounter`

    Stwórz Custom Hook `useCounter`, który zarządza licznikiem. Hook przyjmuje obiekt konfiguracyjny z opcjami:

    - `start` — wartość początkowa, domyślnie `0`.
    - `min` — minimalna wartość, domyślnie `0`.
    - `max` — maksymalna wartość, domyślnie `0`.
    - `krok` — o ile zmieniamy wartość, domyślnie `1`.

    Hook zwraca `{ licznik, zwieksz, zmniejsz, resetuj }`.

    Użyj go w komponencie `LicznikObecnosci`, który:

    - Liczy obecnych uczniów na zajęciach (min. 0, maks. 35, krok 1).
    - Wyświetla aktualną liczbę.
    - Ma przyciski `+` (`zwieksz`) i `-` (`zmniejsz`).
    - Wyłącza przyciski (`disabled`) po osiągnięciu min. lub maks.
    - Ma przycisk „Resetuj”, który ustawia licznik na 0.

    **Wskazówka:** aby sprawdzić min. i maks., zwróć je z hooka lub sprawdź w komponencie. */


import { useState } from 'react';

function useCounter({ start = 0, min = 0, max = 0, krok = 1 }) {

    const [licznik, setLicznik] = useState(start);

    return { licznik, setLicznik, min, max, krok };
}

function LicznikObecnosci_1() {
    const { licznik, setLicznik, min, max, krok } = useCounter({ start: 0, min: 0, max: 35, krok: 1 });

    function zwieksz() {
        setLicznik(prev => (prev + krok));
    }

    function zmniejsz() {
        setLicznik(prev => (prev - krok));
    }

    function resetuj() {
        setLicznik(0);
    }   

    return (
        <div>   
            
            <h2> Licznik obecności </h2>
            <p> Obecni uczniowie: {licznik} </p>

            <button onClick = {zmniejsz} disabled = {licznik <= min} > - </button>
            <button onClick = {zwieksz} disabled = {licznik >= max} > + </button>
            <button onClick = {resetuj}> Resetuj </button>

        </div>
    );
}   

export default LicznikObecnosci_1;