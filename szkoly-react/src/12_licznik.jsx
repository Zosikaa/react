/*    ## Zadanie 1: [ŁATWE] Licznik z useCallback

    Napisz komponent `Licznik`, który wyświetla liczbę i posiada przycisk "+1". Funkcję zwiększającą
    opakuj w `useCallback`. Dodaj `console.log` w ciele komponentu i zaobserwuj, kiedy się loguje. */

import { memo, useCallback, useState } from "react";

const Przycisk = memo(function Przycisk({ etykieta, onClick }) {

    return ( <button onClick={onClick}> {etykieta} </button> );

 });

function Licznik() {
    const [liczba, setLiczba] = useState(0);

    console.log("Loguje sie");

    const zwieksz = useCallback(() => { setLiczba((poprzednia) => poprzednia + 1); }, []);

    return (

        <section>

            <p>Licznik: {liczba}</p>
            <Przycisk etykieta = "+1" onClick={zwieksz} />

        </section>
    );
}

export default Licznik;