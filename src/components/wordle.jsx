import useWordle from '@/hooks/useWordle';
import { useEffect } from 'react';

const Wordle = ({ solution }) => {
	const { currentGuess, handleKeyup } = useWordle(solution);

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup);

		return () => window.removeEventListener('keyup', handleKeyup);
	}, [handleKeyup]);

	return (
		<div>
			Текущее предположение - {currentGuess} | {solution}
		</div>
	);
};

export default Wordle;
