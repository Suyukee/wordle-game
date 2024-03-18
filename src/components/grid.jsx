import Row from './row';

const Grid = ({ currentGuess, guesses, turn }) => {
	return (
		<div>
			{guesses.map((g, i) => {
				return <Row key={i} />;
			})}
		</div>
	);
};

export default Grid;
