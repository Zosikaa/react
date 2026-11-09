 /* ## Zadanie 2: [ŚREDNIE] Lista zadań z memoizacją

1. Zbuduj komponent główny z listą zadań i polem tekstowym do filtrowania.
2. Wyodrębnij komponent `ElementListy` (podkomponent) opakowany w `React.memo`.
3. Funkcje obsługi przekaż przez `useCallback`.
4. Przefiltrowaną listę oblicz w `useMemo`.
5. Sprawdź w konsoli, czy zmiana filtra nie powoduje renderu elementów.*/


import { memo, useCallback, useMemo, useState } from "react";

const ElementListy = memo(function ElementListy({ zadanie, onUsun }) {
    console.log("Renderuję:", zadanie);

    return ( <li> {zadanie} <button onClick = {onUsun}> Usuń </button> </li> );
});

function Listy() {
    const [zadania, setZadania] = useState(["Zadanie 1", "Zadanie 2", "Zadanie 3"]);
    const [filtr, setFiltr] = useState("");

    const przefiltrowane = useMemo( 
        () => zadania.filter((zadanie) =>
            zadanie.toLowerCase().includes(filtr.toLowerCase())
        ),
        [zadania, filtr]
    );

    const usunZadanie = useCallback((nazwa) => {
        setZadania((prev) => prev.filter((zadanie) => zadanie !== nazwa));
    }, []);

    return (
        <div>

            <input value={filtr} onChange={(e) => setFiltr(e.target.value)} placeholder="Filtruj zadania..." />

            <ul>
                {przefiltrowane.map((zadanie) => (
                    <ElementListy
                        key={zadanie}
                        zadanie={zadanie}
                        onUsun={() => usunZadanie(zadanie)} />
                ))}
            </ul>

        </div>
    );
}

export default Listy;
