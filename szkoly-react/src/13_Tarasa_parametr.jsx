/*

Zadanie 2: Trasa z parametrem [ŚREDNIE]
Rozbuduj aplikację o trasę /tasks/:taskId.
Komponent szczegółów ma odczytać parametr 
za pomocą useParams i wyświetlić identyfikator zadania. 
Dodaj formularz lub przycisk, który po podaniu identyfikatora
przechodzi do szczegółów przez useNavigate. Sprawdź co najmniej
dwa identyfikatory.

Pytania pomocnicze: Jak zapisuje się zmienny fragment ścieżki?
Skąd komponent pobiera taskId? Jaki typ ma wartość parametru?
Co się stanie dla pustego identyfikatora?

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


