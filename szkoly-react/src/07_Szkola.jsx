import { useState } from 'react';

function PanelLogowania() {
	// Stan - czy użytkownik jest zalogowany
	const [zalogowany, setZalogowany] = useState(false);
	const [imie, setImie] = useState('Jan Kowalski');

	const handleLogowanie = () => setZalogowany(true);
	const handleWylogowanie = () => setZalogowany(false);

	return (
		<div className="panel">
			<h1>System Szkolny</h1>

			{/* Ternary: zalogowany? pokaz panel ucznia : pokaz formularz */}
			{zalogowany
				? (
					<div className="panel-ucznia">
						<h2>Witaj, {imie}!</h2>
						<p>Jesteś zalogowany do systemu.</p>
						<button onClick={handleWylogowanie}>Wyloguj się</button>
					</div>
				)
				: (
					<div className="formularz-logowania">
						<h2>Zaloguj się</h2>
						<p>Musisz się zalogować, aby uzyskać dostęp.</p>
						<button onClick={handleLogowanie}>Zaloguj się</button>
					</div>
				)
			}
		</div>
	);
}

export default PanelLogowania;