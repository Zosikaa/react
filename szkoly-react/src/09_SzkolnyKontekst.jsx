/*	Zadanie 1 - Poziom: Łatwy
	Temat: Pierwszy własny Context

	Stwórz Context o nazwie SchoolNameContext przechowujący nazwę szkoły.
	Wymagania:
	1. Utwórz SchoolNameContext używając createContext()
	2. Stwórz komponent SchoolNameProvider który w stanie przechowuje
		nazwę szkoły "Liceum Ogólnokształcące nr 1 im. Jana Kochanowskiego"
	3. Stwórz komponent SchoolHeader który pobiera nazwę z Context
		i wyświetla ją w tagu <h1>
	4. Złóż wszystko w App i uruchom

	Oczekiwany wynik:
	Na stronie widoczny nagłówek z pełną nazwą szkoły.

	Wskazówka: Pamiętaj o "owinięciu" SchoolHeader w SchoolNameProvider!
*/

import { createContext, useContext, useState } from 'react';


const SchoolNameContext = createContext(null);


function SchoolNameProvider({ children }) {

  const [name] = useState('Liceum Ogólnokształcące nr 1 im. Jana Kochanowskiego');

  return (

    <SchoolNameContext.Provider value = {name}>
      {children}
    </SchoolNameContext.Provider>

  );
}

function SchoolHeader() {
	
  const name = useContext(SchoolNameContext);

  return <h1> {name} </h1>;
}

export { SchoolNameProvider, SchoolHeader };