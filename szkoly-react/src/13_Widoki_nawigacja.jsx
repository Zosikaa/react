/*  Zadanie 1: Widoki i nawigacja [ŁATWE]
    Dodaj widoki Home i Help, skonfiguruj trasy 
    / i /help oraz dwa odnośniki Link. Uruchom aplikację 
    i sprawdź, czy przechodzenie między widokami
    nie przeładowuje całej strony.

    */


import {
    BrowserRouter,
    Link,
    Route,
    Routes,
} from "react-router-dom";

function Home() {

    return <h1> Home </h1>

}

function Help() {

    return <h1> Help </h1>

}

function Widoki_i_nawigacja() {
    return (

        <BrowserRouter>
            <nav>
                <Link to = "/"> Home </Link>
                <Link to = "/help"> Help </Link>
            </nav>
            
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/help" element = {<Help />} />
            </Routes>
        </BrowserRouter>

    );
}

export default Widoki_i_nawigacja;
