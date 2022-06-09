import { useState,useEffect, KeyboardEvent } from 'react';
import { useWindow } from '../hook/useWindow';
import FilaActual from './FilaActual';
import { FilaCompletada } from './FilaCompletada';
import FilaVacia from './FilaVacia';
import {GameStatus} from './Tipos';

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