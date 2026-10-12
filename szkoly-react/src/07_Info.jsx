/*	Zadanie 1 - Proste (operator &&)
	Stwórz komponent 'InfoUczen', który przyjmuje props:
	- imie (string)
	- czyObecny (boolean)
	- numerDziennika (number)

	Wyświetl:
	- Zawsze: imie ucznia i numer w dzienniku
	- Tylko gdy czyObecny jest true: tekst "(obecny)"
	- Tylko gdy czyObecny jest false: tekst "(nieobecny)"
		Wskazówka: Użyj dwóch osobnych operatorów && dla każdego przypadku.

	Przykładowe użycie:
	<InfoUczen imie="Kasia Nowak" czyObecny={true} numerDziennika={5} />
	Oczekiwany wynik: "5. Kasia Nowak (obecny)"
*/

function InfoUczen({ imie, czyObecny, numerDziennika }) {
    return (
        <div className = "panel">
            <h2>Obecność</h2>

            <p>
                {numerDziennika}. {imie}
                {czyObecny && <span> (obecny)</span>}
                {!czyObecny && <span> (nieobecny)</span>}
            </p>
        </div>
    );
}

export default InfoUczen;
