import useWordle from '@/hooks/useWordle';
import { useEffect } from 'react';

const Wordle = ({ solution }) => {
	const { currentGuess, handleKeyup } = useWordle(solution);

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup);

		return () => window.removeEventListener('keyup', handleKeyup);
	}, [handleKeyup]);

	return (
		<main>
			<div>Решение - {solution}</div>
			<div>Текущее предположение - {currentGuess}</div>
		</main>
	);
};

export default Wordle;
