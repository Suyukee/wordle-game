import useWordle from '@/hooks/useWordle';
import { useEffect } from 'react';
import Grid from './grid';

const Wordle = ({ solution }) => {
	const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution);

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup);

		return () => window.removeEventListener('keyup', handleKeyup);
	}, [handleKeyup]);

	useEffect(() => {
		console.log(guesses, turn, isCorrect);
	}, [guesses, turn, isCorrect]);

	return (
		<main>
			<div>Решение - {solution}</div>
			<div>Текущее предположение - {currentGuess}</div>
			<Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
		</main>
	);
};

export default Wordle;
