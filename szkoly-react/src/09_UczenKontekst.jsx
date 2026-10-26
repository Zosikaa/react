/*	Zadanie 2 - Poziom: Łatwy
	Temat: Context z możliwością zmiany danych

	Stwórz system zmiany klasy dla ucznia.
	Wymagania:
	1. Utwórz StudentContext przechowujący obiekt { name: 'Jan Kowalski', class: '1A' }
	2. Dodaj do Providera funkcję changeClass(newClass) która aktualizuje klasę ucznia
	3. Stwórz komponent StudentInfo wyświetlający imię i klasę ucznia
	4. Stwórz komponent ClassChanger z przyciskami: "1A", "2B", "3C"
		- Kliknięcie przycisku zmienia klasę ucznia w Contexcie
	5. Oba komponenty mają działać bez przekazywania props
S
	Oczekiwany wynik:
	Wyświetla się "Jan Kowalski - Klasa: 1A"
	Po kliknięciu "2B" zmienia się na "Jan Kowalski - Klasa: 2B"
*/

import { createContext, useContext, useState } from 'react';

const StudentContext = createContext(null);

function StudentProvider({ children }) {

	const [student, setStudent] = useState({ name: 'Jan Kowalski', class: '1A' }); 

	const changeClass = (newClass) => { setStudent({ ...student, class: newClass }); }

	return (

		<StudentContext.Provider value={{ student, changeClass }}>
			{children}
		</StudentContext.Provider>

	);
}





function StudentInfo() {

	const { student } = useContext(StudentContext);	

	return (

		<div>

			<p> {student.name} </p>
			<p> Klasa: {student.class} </p>

		</div>

	);
}

function ClassChanger() {

	const { changeClass } = useContext(StudentContext);	

	return (

		<div>

			<p>Zmiana klasy</p>	

			<button onClick={() => changeClass('1A')}> 1A </button>
			<button onClick={() => changeClass('2B')}> 2B </button>
			<button onClick={() => changeClass('3C')}> 3C </button>

		</div>

	);
}

export { StudentProvider, StudentInfo, ClassChanger };
