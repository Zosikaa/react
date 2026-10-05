export function MojPierwszykomponent() {

    const zmienna1 = "zawartosc 1";
    const zmienna2 = "zawartosc 2";
    const zmienna3 = "zawartosc 3";
    const zmienna4 = "zawartosc 4";

    const tablica = [4, 2, 3, 5];

    const tablicaParzysta = tablica.filter((element) => {

        // musi zwrocic boolean, jesli true to element zostanie dodany do nowej tablicy, jesli false to nie zostanie dodany
        return element % 2 === 0;
    })

    return(<>

        <ul>

            <li>{zmienna1}</li>
            <li>{zmienna2}</li>

        </ul>
        <ul>

            <li>{zmienna3}</li>
            <li>{zmienna4}</li>

        </ul>
        <ul>

            {tablica.map((element) => {
               return (<li>{element}</li>)
        })}

        </ul>

        <ul>

            {tablica.filter((element) => {
                return (<li>{element}</li>)
            })}

        </ul>
        <ul>

            {tablicaParzysta.map((element) => {
                return (<li>{element}</li>)
            })}

        </ul>

        </>) 
        
}