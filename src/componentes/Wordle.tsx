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


export const Wordle = (props: any) => {
 
  const [wordOfTheDay, setWordOfTheDay] = useState<string>("");
  const [turn, setTurn] = useState<number>(1);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [completedWords, setCompletedWords] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.jugando);

  const { startingMinutes = 5, startingSeconds = 0 } = props;
  const [mins, setMinutes] = useState(startingMinutes);
  const [secs, setSeconds] = useState(startingSeconds);
 

  useWindows('keydown', handleKeyDown);

  useEffect(() => {
    setWordOfTheDay("GOLPE");
    let sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      }
      if (secs === 0) {
        if (mins === 0) {
          clearInterval(sampleInterval);
        } else {
          setMinutes(mins - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(sampleInterval);
    };
  });
  //cuenta regresiva
  
  console.log(mins);


  function handleKeyDown(event:KeyboardEvent){
    const letter = event.key.toUpperCase();

    
    

    //detectar teclas especiales
    if(gameStatus !== GameStatus.jugando){
      return;
    }


    if (letter === "BACKSPACE" && currentWord.length > 0) {
      Borrar();
      return;
    }

    if(letter === 'ENTER' && currentWord.length ===5 && turn<=6){
      Enter();
      return;
    }
    if(currentWord.length >= 5){
      return;
    }
    //ingresar la letra al estado
    if(teclas.includes(letter)){
        
      Entrada(letter);  
      return;
    }

    
  }

  function Entrada(letter:string){
    const newLetra = currentWord+letter;
    setCurrentWord(newLetra);

  }

  function Borrar() {
    const newLetra = currentWord.slice(0, -1);
    setCurrentWord(newLetra);
  }

  function Enter(){
    
    console.log("Diste Enter");
    
    if (currentWord === wordOfTheDay) {
      //ganó el usuario
      setCompletedWords([...completedWords, currentWord]);
      setGameStatus(GameStatus.gano);
      
      if(mins === 4){
        alert("Bien");
      }
      if(mins === 3){
        alert("Excelente");
      }
      if(mins <= 2){
        alert("Asombroso");
      }

      return;
    }
    if (turn === 6) {
      //perdió el usuario
      setCompletedWords([...completedWords, currentWord]);
      setGameStatus(GameStatus.perdio);
      return;
    }

    //validar si no existe la palabra


    setCompletedWords([...completedWords, currentWord]);
    setTurn(turn + 1);
    setCurrentWord("");

  }

  return (
  
    <div>
        {
          completedWords.map((word,i)=>(
            <FilaCompletada letra={word}  solucion={wordOfTheDay} />
          ))

        }

        
        { gameStatus === GameStatus.jugando ? (
        
        <FilaActual letra={currentWord} />) : null}


        {
          Array.from(Array(6 - turn)).map((_,i)=>(
            <FilaVacia key={i}/>
          ))

        }
          
        
          <div>
        {!(mins && secs) ? "" : (
        <h1>
          {" "}
          {mins}:{secs < 10 ? `0${secs}` : secs}
        </h1>
        )}
        </div>
        
      
    </div>
    
  )

}

export default Wordle;