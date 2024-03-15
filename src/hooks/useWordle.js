import { useState } from 'react';

const useWordle = (solution) => {
	const [turn, setTurn] = useState(0);
	const [currentGuess, setCurrentGuess] = useState('');
	const [guesses, setGuesses] = useState([]); // каждое предположение является массивом
	const [history, setHistory] = useState(['кирка']); // каждое предположение является строкой
	const [isCorrect, setIsCorrect] = useState(false);

	// записать предложенные варианты в массив букв
	// пример [{key: 'a', color: 'yellow'}]
	const formatGuess = () => {
		console.log('форматирование', currentGuess);
	};

	// добавить новое предложенный вариант в состояние вариантов
	// обновить состояние isCorrect, если состояние корректно
	// увеличить на один состояние ходов
	const addNewGuess = () => {};

	// обработать событие keyup и отследить предложенный вариант
	// если пользователь нажмёт enter, добавить предложенный вариант
	const handleKeyup = ({ key }) => {
		if (key === 'Enter') {
			// добавлять слово, только если ход меньше 5
			if (turn > 5) {
				console.log('Использованы все попытки');
				return;
			}
			// не добавлять слово, если оно совпадает с предыдущими
			if (history.includes(currentGuess)) {
				console.log('Слово уже использовалось');
				return;
			}
			// слово длинной 5 букв
			if (currentGuess.length !== 5) {
				console.log('Длина слова должна иметь 5 символов');
				return;
			}
			formatGuess();
		}
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
