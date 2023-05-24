import React, { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameStatus, setGameStatus] = useState('ongoing');

  const makeMove = (row, col) => {
    if (board[row][col] === '' && gameStatus === 'ongoing') {
      const newBoard = [...board];
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);

      if (checkWin(currentPlayer)) {
        setGameStatus('win');
        alert(`La ${currentPlayer} gana!`);
      } else if (checkDraw(newBoard)) {
        setGameStatus('draw');
        alert('Empate!');
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    }
  };

  const checkWin = (player) => {
    // Verificar filas
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player
      ) {
        return true;
      }
    }

    // Verificar columnas
    for (let j = 0; j < 3; j++) {
      if (
        board[0][j] === player &&
        board[1][j] === player &&
        board[2][j] === player
      ) {
        return true;
      }
    }

    // Verificar diagonales
    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    ) {
      return true;
    }

    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    ) {
      return true;
    }

    return false;
  };

  const checkDraw = (currentBoard) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (currentBoard[i][j] === '') {
          return false;
        }
      }
    }
    return true;
  };

  const resetGame = () => {
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
    setCurrentPlayer('X');
    setGameStatus('ongoing');
  };

  return (
    <div className="App">
      
      <div className='header' >   
      <h1>Tic Tac Toe</h1>
     

     <div className='container'>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell}`}
                onClick={() => makeMove(rowIndex, colIndex)}
              >
                {cell
}
              </div>
            ))}
          </div>
        ))}
        {gameStatus !== 'ongoing' && (
        <button onClick={resetGame}>Jugar de nuevo</button>
      )}
      </div>
      </div>
      
<div className='historia'>
  <h2>Historia</h2>
  <p>El juego del Tic Tac Toe, también conocido como Tres en Raya, es un juego de estrategia simple y popular que se juega en un tablero de 3x3. Aunque no se conoce su origen exacto, se cree que tiene raíces milenarias y ha sido jugado en diferentes culturas a lo largo de la historia.

El concepto básico del juego es colocar tres símbolos iguales en una fila, columna o diagonal, antes que el oponente. Generalmente, los jugadores utilizan dos símbolos diferentes, uno representado por una "X" y otro por una "O".

La historia del Tic Tac Toe se remonta a los juegos de tablero antiguos. Algunos historiadores creen que el juego podría haberse originado en el Antiguo Egipto, donde se encontraron tableros similares grabados en rocas que datan de alrededor del año 1300 a.C.

El juego también se ha asociado con el Pasatiempo Romano, conocido como "Terni Lapilli", que se jugaba en un tablero de 3x3 con piedras o fichas. Este juego se popularizó durante el Imperio Romano y fue jugado tanto por niños como por adultos.

  </p>


      </div> 
    <div className='proyecto' >
      <h2>Proyecto:</h2>
      <p>El proyecto fue realizado la logica por chatgpt con react. 
        Los estilos y diseños con css puro.</p>
      </div> 
     <div className='footer'>
     
      </div>
      </div>
    </div>
  );
}

export default App;