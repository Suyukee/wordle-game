import { useState } from 'react';

const useWordle = (solution) => {
	const [turn, setTurn] = useState(0);
	const [currentGuess, setCurrentGuess] = useState('');
	const [guesses, setGuesses] = useState([]); // каждое предположение является массивом
	const [history, setHistory] = useState([]); // каждое предположение является строкой
	const [isCorrect, setIsCorrect] = useState(false);

	// записать предложенные варианты в массив букв
	// пример [{key: 'a', color: 'yellow'}]
	const formatGuess = () => {};

	// добавить новое предложенный вариант в состояние вариантов
	// обновить состояние isCorrect, если состояние корректно
	// увеличить на один состояние ходов
	const addNewGuess = () => {};

	// обработать событие keyup и отследить предложенный вариант
	// если пользователь нажмёт enter, добавить предложенный вариант
	const handleKeyup = ({ key }) => {
		if (key === 'Backspace') {
			setCurrentGuess((prev) => {
				return prev.slice(0, -1);
			});
			return;
		}
		if (/^[А-Яа-я]$/.test(key)) {
			if (currentGuess.length < 5) {
				setCurrentGuess((prev) => {
					return prev + key;
				});
			}
		}
	};

	return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
