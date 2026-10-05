function PropsyDziecko1(props) {
    return <p>Wartość propsa1: {props.jakasZmienna} drugi wartość: {props.drugaZmienna}</p>;
}

function PropsyDziecko2(props) {
    return <p>Wartość propsa2: {props.jakasZmienna}</p>;
}

function PropsyRodzic1() {
    const jakasZmienna = "rodzic";
    return (
        <div>
            <PropsyDziecko1 jakasZmienna={jakasZmienna + '1'} drugaZmienna={jakasZmienna + '1.1'} />
            <PropsyDziecko2 jakasZmienna={jakasZmienna + '2'} />
        </div>
    );
}

function PropsyDziecko3(props) {
    return (
        <div>
            <button onClick={() => props.zmienZmienna("dziecko3")}> 
                Zmien Zmienna
            </button>
        </div>
    );
}

function PropsyRodzic2() {
    let jakasZmienna = "rodzic2";

    const zmienZmienna = (nowaWartosc) => {
        jakasZmienna = nowaWartosc;
        alert("Zmienna została zmieniona na: " + jakasZmienna);
    };

    return (
        <PropsyDziecko3 zmienZmienna={zmienZmienna} />
    );
}


export default function Zadanie() {
    return (
        <div>
           <p> Zadanie1 </p>
           <PropsyRodzic1 />

            <p> Zadanie2 </p>
            <PropsyRodzic2 />

        </div>
    );
}
