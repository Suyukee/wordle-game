'use client';

import { useEffect, useState } from 'react';
import Header from './header';
import Wordle from './wordle';

const MainPage = () => {
	const [solution, setSolution] = useState(null);

	useEffect(() => {
		fetch('http://localhost:3001/solutions')
			.then((res) => res.json())
			.then((json) => {
				// случайное целое число от 0 до 14
				const randomSolution = json[Math.floor(Math.random() * json.length)];
				setSolution(randomSolution.word);
			});
	}, [setSolution]);

	return (
		<main className="main">
			<Header />
			{solution && <Wordle solution={solution} />}
		</main>
	);
};

export default MainPage;
