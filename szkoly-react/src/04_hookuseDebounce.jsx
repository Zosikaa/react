 /*   Zadanie 3 — Średnie — useDebounce
    Debounce to technika opóźniania wykonania operacji. Jest przydatna, gdy użytkownik szybko wpisuje tekst w wyszukiwarce — nie chcemy odpytywać API po każdej literze, tylko po chwili przerwy w pisaniu.

    Stwórz Custom Hook useDebounce(wartosc, opoznienie), który:

    Przyjmuje wartość i opóźnienie w milisekundach.
    Zwraca opóźnioną wersję wartości.
    Aktualizuje wartość dopiero po upływie zadanego czasu od ostatniej zmiany.
    Wskazówka: użyj useEffect z setTimeout i clearTimeout w funkcji cleanup. */