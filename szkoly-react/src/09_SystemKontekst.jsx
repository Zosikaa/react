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

function UserProvider({ children }) {

  	const [user] = useState({ name: 'dr Makowski', subject: 'Matematyka' }); 

	const [grades, setGrades] = useState([]);

	const addGrade = (studentName, grade, addedBy) => {
		const newGrade = {
		id: Date.now(),
		studentName,
		grade,
		addedBy,
		date: new Date().toLocaleString()
		};

		setGrades([...grades, newGrade]);
	}

	const deleteGrade = (id) => {
		setGrades(grades.filter(grade => grade.id !== id));
	}

	return (
		<UserContext.Provider value = {user}>

		<GradesContext.Provider
			value = {{ grades, addGrade, deleteGrade }}>
			{children}
		</GradesContext.Provider>

		</UserContext.Provider>
	);
}

function AddGradeForm() {
  const { grades, addGrade, deleteGrade } = useContext(GradesContext);

  return (
    <div>

      <form>

		<input type = "text" placeholder = "Imię ucznia" />

		<select>
			<option value = "1"> 1 </option>
			<option value = "2"> 2 </option>
			<option value = "3"> 3 </option>
			<option value = "4"> 4 </option>
			<option value = "5"> 5 </option>	
			<option value = "6">6 </option>
		</select>

		<button type = "submit"> Dodaj ocenę </button>

      </form>

    </div>
  );
}

function GradesList() {
  return (
    <div>
    </div>
  );
}

function TeacherInfo() {
  const teacher = useContext(UserContext);

  return (
    <div>
      <p>{teacher.name}</p>
      <p>Przedmiot: {teacher.subject}</p>
    </div>
  );
}

export { UserProvider, TeacherInfo, AddGradeForm, GradesList };

	<UserProvider>
	  <TeacherInfo />
	  <AddGradeForm />
	  <GradesList />
	</UserProvider>

	import { SystemProvider, TeacherInfo } from './09_SystemKontekst'