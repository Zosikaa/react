import { useState, useEffect } from 'react';

function PrzykladTablicaPusta() {
    const [zmienna1, setZmienna1] = useState(12);
    const [zmienna2, setZmienna2] = useState(15);

    useEffect(() => {
        alert('Inicjacja')
    }, [zmienna1, zmienna2])

    return (

        <div>

            <p> Przyklad useEffect! </p>

            <button onClick={() => setZmienna1(zmienna1 + 1)}> ZMIENA SIE NIE WAZNE CO KLIKNIESZ (zmienna1) </button> <br></br>
            <button onClick={() => setZmienna2(zmienna2 + 1)}> TU TEZ (zmienna2) </button>


            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
        </div>

    )

}

export default PrzykladTablicaPusta