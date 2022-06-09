import { useState,useEffect, KeyboardEvent } from 'react';
import { useWindow } from '../hook/useWindow';
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
  const [palabra, setPalabra] = useState<string>("");
  const [turno, setTurno] = useState<number>(1);
  const [currentPalabra, setCurrentPalabra] = useState<string>("");
  const [completedPalabra, setCompletedPalabra] = useState<string[]>([]);
  const [estadoJuego, setestadoJuego] = useState<GameStatus>(GameStatus.jugando);
  
  useWindow('keydown',teclaPresionada);

  useEffect(() => {
    setPalabra("break");
  }, []);

  function teclaPresionada(event:KeyboardEvent){
    const letter = event.key.toUpperCase();

    if(event.key === 'Backspace' && currentPalabra.length >0){
      return;
    }

    if(event.key === 'Enter'){
      return;
    }

    if(currentPalabra.length >= 5){
      return
    }

    //ingresar letra al estado (Validacion de letra)

    if(teclas.includes(letter)){
      return;

    }
    

  }

  return (
  
    <div>
        <FilaCompletada letra="sabio"  solucion={palabra}/>
        <FilaCompletada letra="saruk"  solucion='sabio'/>
        <FilaActual letra='sab'/>
        <FilaVacia />
        <FilaVacia />
        <FilaVacia />
    </div>
    
  )

}

export default Wordle;