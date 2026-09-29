export function PersonCard({firstName, lastName, age, occupation = "Bez zawodu"}) {
    return (
        <div>
            <p>Imię: {firstName}</p>
            <p>Nazwisko: {lastName}</p>
            <p>Wiek: {age}</p>
            <p>Zawód: {occupation}</p>
        </div>
    );
}

