import { useState } from "react";

function SystemZarzadzaniaSzkola() {

    const [uczen, setUczen] = useState("")
    const [ocena, setOcena] = useState("1")
    const [przedmiot, setPrzedmiot] = useState("matematyka")
    const [oceny, setOceny] = useState([]);

     const dodajOcene = (e) => {
        e.preventDefault();

        const nowaOcena = {
            id: Date.now(),
            uczen: uczen.trim(),
            przedmiot: przedmiot,
            ocena: ocena,
        };

        setOceny((poprzednieOceny) => [ ...poprzednieOceny, nowaOcena ]);
        setUczen("");
    };

    return (

        <div>

            <form onSubmit = {dodajOcene}> 

                <input type = "text" placeholder = "imię i nazwisko ucznia" value = {uczen} onChange = {(e) => setUczen(e.target.value)} required />

                <select value = {ocena} onChange = {(e) => setOcena(e.target.value)} >
                    <option value = "1"> 1 </option>
                    <option value = "2"> 2 </option>
                    <option value = "3"> 3 </option>
                    <option value = "4"> 4 </option>
                    <option value = "5"> 5 </option>
                    <option value = "6"> 6 </option>

                </select>

                <select value = {przedmiot} onChange = {(e) => setPrzedmiot(e.target.value)} >

                    <option value = "matematyka"> Matematyka </option>
                    <option value = "polski"> Polski </option>
                    <option value = "angielski"> Angielski </option>
                    <option value = "historia"> Historia </option>
                    <option value = "biologia"> Biologia </option>

                </select>

                <button type = "submit"> Dodaj ocenę </button>

            </form>

            {oceny.length === 0 ? ( <p>Brak dodanych ocen.</p> )

            : (

            <ul>

            {oceny.map((wpis) => ( <li key={wpis.id}> {wpis.uczen} - {wpis.przedmiot}: {wpis.ocena} </li> ))}
            
            </ul> )}


        </div>

    )
}

export default SystemZarzadzaniaSzkola