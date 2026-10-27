import { useState } from "react";

function RejestracjaUcznia() {

    const [dane, setDane] = useState({

        imie: "",
        nazwisko: "",
        email: "",
        haslo: "",
        powtorzHaslo: "" })

    const [bledy, setBledy] = useState({})   
    
    const [poprawnie, setPoprawnie] = useState(false)

    const wpisanieDanych = (e) => {

        setDane({...dane, [e.target.name]: e.target.value})

    }

    const wyslij = (e) => {

        e.preventDefault();

        const noweBledy = {}

        if (dane.imie.length < 2) {
            noweBledy.imie = "Imie musi miec minimum 2 znaki"
        }

        if (dane.nazwisko.length < 2) {
            noweBledy.nazwisko = "Nazwisko musi miec minimum 2 znaki"
        }

        if (!dane.email.includes("@") || !dane.email.includes(".")) {
            noweBledy.email = "Niepoprawny email"
        }

        if (dane.haslo.length < 8) {
            noweBledy.haslo = "Haslo musi miec minimum 8 znaków"
        }

        if (dane.powtorzHaslo !== dane.haslo || dane.powtorzHaslo === "") {
            noweBledy.powtorzHaslo = "Hasla się nie zgadzają"
        }

        setBledy(noweBledy)

        if (
            noweBledy.imie === undefined &&
            noweBledy.nazwisko === undefined &&
            noweBledy.email === undefined &&
            noweBledy.haslo === undefined &&
            noweBledy.powtorzHaslo === undefined
        ) {
            setPoprawnie(true)

            setDane({
                imie: "",
                nazwisko: "",
                email: "",
                haslo: "",
                powtorzHaslo: ""
            })
        } else {
            setPoprawnie(false)
        }

    }

    return (

        <div>

            <form onSubmit = {wyslij}>

                <input name = "imie" placeholder = "Imię" value = {dane.imie} onChange = {wpisanieDanych} />

                <p style = {{color: "red"}}> {bledy.imie} </p>

                <input name = "nazwisko" placeholder = "Nazwisko" value = {dane.nazwisko} onChange = {wpisanieDanych} /> 

                <p style = {{color: "red"}}> {bledy.nazwisko} </p>

                <input name = "email" placeholder = "Email" value = {dane.email} onChange = {wpisanieDanych} />  

                <p style = {{color: "red"}}> {bledy.email} </p>

                <input name = "haslo" type = "password" placeholder = "Hasło" value = {dane.haslo} onChange = {wpisanieDanych} />

                <p style = {{color: "red"}}> {bledy.haslo} </p>

                <input name = "powtorzHaslo" type = "password" placeholder = "Powtórz hasło" value = {dane.powtorzHaslo} onChange = {wpisanieDanych} />

                <p style = {{color: "red"}}> {bledy.powtorzHaslo} </p>    
                
                <button type = "submit"> Zarejestruj </button>

            </form>

            {poprawnie && <p style = {{color: "green"}}> Rejestracja przebiegła pomyślnie </p>}

        </div>

    )

}

export default RejestracjaUcznia