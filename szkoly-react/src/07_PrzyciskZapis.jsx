/*	Zadanie 2 - Łatwe (ternary operator)
	Stwórz komponent 'PrzyciskZapisz', który przyjmuje props:
	- czyZapisano (boolean)
	- onZapisz (funkcja)

	Gdy czyZapisano jest false: wyświetl przycisk "Zapisz zmiany" który wywołuje onZapisz
	Gdy czyZapisano jest true: wyświetl tekst "Zmiany zostały zapisane!" (zamiast przycisku)

	Użyj operatora ternary.

	Wskazówka: możesz użyć useState do przełączania stanu w komponencie nadrzędnym.
*/

import { useState } from 'react';

function PrzyciskZapisz() {
    const [Zapisano, CzyZapisano] = useState(false);

    return (
        <div className = " panel">
            {Zapisano
                ? <p> Zmiany zostały zapisane! </p>
                : <button onClick={() => CzyZapisano(true)}>
                    Zapisz zmiany
                  </button>
            }
        </div>
    );
}

export default PrzyciskZapisz;