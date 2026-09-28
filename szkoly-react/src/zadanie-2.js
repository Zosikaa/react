function PersonCard({firstName, lastName, age, occupation = "Bez zawodu"}) {
   //  const {firstName, lastName, age, occupation = "Bez zawodu"} = props;
    return (
        <div>
            <p>Imię: {firstName}</p>
            <p>Nazwisko: {lastName}</p>
            <p>Wiek: {age}</p>
            <p>Zawód: {occupation}</p>
        </div>
    );
}
