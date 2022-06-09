import { useState,useEffect, KeyboardEvent } from 'react';
import { useWindows } from '../hook/useWindows';
import FilaActual from './FilaActual';
import { FilaCompletada } from './FilaCompletada';
import FilaVacia from './FilaVacia';
import {GameStatus} from './Tipos';

const teclas = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "Ñ",
  "M",
];


export const Wordle = () => {
 
  const [wordOfTheDay, setWordOfTheDay] = useState<string>("");
  const [turn, setTurn] = useState<number>(1);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [completedWords, setCompletedWords] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.jugando);


  useWindows('keydown', handleKeyDown);

  useEffect(() => {
    setWordOfTheDay("letra");

    
  });
  
  function handleKeyDown(event:KeyboardEvent){
    const letter = event.key.toUpperCase();

    //detectar teclas especiales
    if(event.key === 'BACKSPACE' && currentWord.length >0){
      return;
    }
    if(event.key === 'ENTER'){
      return;
    }
    if(currentWord.length >= 5){
      return;
    }
    //ingresar la letra al estado
    if(teclas.includes(letter)){
        
      onInput(letter);  
      return;
    }
  }

  function onInput(letter:string){
    const newLetra = currentWord+letter;
    setCurrentWord(newLetra);

  }

  return (
  
    <div>
        <FilaCompletada letra="sabio"  solucion={wordOfTheDay} />
        <FilaCompletada letra="saruk"  solucion='letra'/>
        <FilaActual letra={currentWord} />
        <FilaVacia />
        <FilaVacia />
        <FilaVacia />
    </div>
    
  )

}

export default Wordle;