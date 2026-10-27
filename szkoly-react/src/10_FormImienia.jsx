import { useState } from "react";

function FormularzImienia() {

    const [imie, setImie] = useState();

    return (

        <div>

            <input type = "text" placeholder = "Wpisz swoje imie" value = {imie} onChange={(e) => setImie(e.target.value)} /> 

            <p> {imie ? `Witaj, ${imie}` : "Wpisz swoje imię"} </p>

        </div>

    )

}

export default FormularzImienia