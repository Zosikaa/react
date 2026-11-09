import { useMemo, useState } from "react";

export default function Kwadraty() {
	const [n, setN] = useState(3);
	const [kolor, setKolor] = useState("niebieski");

	// Obliczenie wykonywane tylko wtedy, gdy zmieni się n
	const kwadrat = useMemo(() => {
		console.log("Liczenie kwadratu...");
		return n * n;
	}, [n]);

	// Zmiana koloru nie powoduje ponownego liczenia kwadratu
	return (
		<div style={{ color: kolor }}>
			<p>Kwadrat liczby {n}: {kwadrat}</p>
			<button onClick={() => setN(n + 1)}>Zwiększ n</button>
			<button onClick={() => setN(n - 1)}>Zmniejsz n</button>
			<button onClick={() => setKolor("czerwony")}>Zmień kolor</button>
		</div>
	);
}