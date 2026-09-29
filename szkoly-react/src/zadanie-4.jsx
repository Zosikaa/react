/*	Zadanie praktyczne 4: Komponent z callback props
	Utwórz komponent Counter z props:
	- initialValue (number, opcjonalne, domyślnie 0)
	- onIncrement (function, wymagane)
	- onDecrement (function, wymagane)

	Komponent wyświetli:
	- Bieżącą wartość licznika
	- Przycisk "Zwiększ" i "Zmniejsz" które wywołują callback'i

	Waliduj że onIncrement i onDecrement to funkcje (PropTypes.func)
*/

function Counter(intialValue = 0, onIncrement, onDecrement) {

    return (
        <div>
            <p>Licznik: {intialValue}</p>
        </div>
    )
};