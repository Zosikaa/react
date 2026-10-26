/*	Zadanie 4 - Poziom: Sredni
	Temat: Kilka Contextów i komunikacja między nimi

	Stwórz mini panel ocen dla systemu szkolnego.
	Wymagania:
	1. UserContext: przechowuje zalogowanego nauczyciela { name: 'dr Makowski', subject: 'Matematyka' }
	2. GradesContext: przechowuje tablicę ocen z funkcjami addGrade i deleteGrade:
		- addGrade(studentName, grade) - dodaje ocenę { id, studentName, grade, addedBy, date }
		- pole addedBy powinno pobierać imię z UserContext... ale Contexty nie mogą się wzajemnie
			odczytywać bezpośrednio! Wskazówka: przekaż imię nauczyciela jako parametr do addGrade.
		- deleteGrade(id) - usuwa ocenę po ID
	3. Komponent AddGradeForm: formularz z polem na imię ucznia i select z ocenami (1-6)
	4. Komponent GradesList: lista wszystkich ocen z przyciskiem usuwania
	5. Komponent TeacherInfo: wyświetla informacje o zalogowanym nauczycielu

	Oczekiwany wynik:
	Widoczne imię nauczyciela, formularz dodawania ocen, lista ocen.
	Po dodaniu oceny pojawia się na liście z imieniem nauczyciela.
*/

import { createContext, useContext, useState } from 'react';


const UserContext = createContext(null);
const GradesContext = createContext(null);

function SystemProvider({ children }) {

  	const [user] = useState({ name: 'dr Makowski', subject: 'Matematyka' }); 
	const [grade, SetGrade] = useState([])

  	return (

		<UserContext.Provider value = {user}>
      		{children}
    	</UserContext.Provider>

  )

}

function AddGradeForm() {

	const grade = useContext(GradesContext);

	return (

		<div>

			<form>



			</form>

		</div>

	)


}

function  GradesList() {

}

function TeacherInfo() {

	const teacher  = useContext(UserContext);	

	return (

		<div>

			<p> {teacher.name} </p>
			<p> Przedmiot: {teacher.subject} </p> 

		</div>

	);

}

export { SystemProvider, TeacherInfo };