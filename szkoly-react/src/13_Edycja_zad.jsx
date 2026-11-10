/*

Zadanie 3: Edycja zadania [TRUDNE]
Dodaj trasę /tasks/:taskId/edit z komponentem edycji.
Odczytaj taskId, pozwól wpisać tytuł zadania, a po zatwierdzeniu
użyj useNavigate do przejścia z powrotem do szczegółów danego zadania.
Dodaj trasę * dla nieznanych adresów z komunikatem 404 i linkiem do /.
Dane mogą pozostać lokalne; nie jest wymagane połączenie z API.

Pytania pomocnicze: Czy ścieżka edycji jest bardziej szczegółowa od
trasy szczegółów? Czy kolejność deklaracji tras wpływa na ich dopasowanie
w Routes? Jak zachować ten sam identyfikator po zapisaniu? Jak obsłużyć
pusty tytuł i nieznany adres?

*/

import { useState } from "react";
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
    useNavigate,
    useParams,
} from "react-router-dom";

import { useState } from "react";
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
    useNavigate,
    useParams,
} from "react-router-dom";

function Home() {

    return <h1> Home </h1>;
}

function Help() {
    
    return <h1> Help </h1>;
}

function Tasks() {
    const [taskId, setTaskId] = useState("");
    const navigate = useNavigate();

    function openTask(event) {
        event.preventDefault();

        if (taskId.trim()) {
			navigate(`/tasks/${encodeURIComponent(taskId.trim())}`);
		}
	}

    return (
        <>
            <h1>Tasks</h1>

            <form onSubmit={openTask}>

                <label htmlFor = "taskId"> Szczegóły zadania: </label>

                <input
                    id = "taskId"
                    value = {taskId}
                    onChange = {(event) => setTaskId(event.target.value)}
                />

                <button type = "submit"> Otwórz </button>

            </form>
        </>
    );
}

function TaskDetails() {

    const { taskId } = useParams();

    return <h3> Szczegóły zadania: {taskId} </h3>
}    

function Trasa_z_parametrem() {

    return (
        <BrowserRouter>
            <nav>
                <Link to = "/"> Home </Link>
                <Link to = "/help"> Help </Link>
                <Link to = "/tasks"> Tasks </Link>
            </nav>

            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/help" element = {<Help />} />
                <Route path = "/tasks" element = {<Tasks />} />
                <Route path = "/tasks/:taskId" element = {<TaskDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Trasa_z_parametrem;


