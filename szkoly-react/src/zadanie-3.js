    /*	Zadanie praktyczne 3: Komponent Lista filmów
	Utwórz komponent MovieList, który przyjmuje:
	- movies (tablica obiektów z polami: id, title, year, rating)

	Komponent powinien:
	- Iterować przez tablicę filmów
	- Wyświetlić każdy film na liście
	- Walidować że movies to tablica obiektów z wymaganymi polami

	Przykład użycia:
	<MovieList movies={[
	  { id: 1, title: "Inception", year: 2010, rating: 8.8 },
	  { id: 2, title: "Avatar", year: 2009, rating: 8.5 }
	]} />
    */

    
function MovieList({ movies = [] }) {
    if(!Array.isArray(movies)) {
        return <p>Błąd: musi byc tablicą</p>;
    }
    Array.foreach(movies, (movie) => { 
        
    })


};