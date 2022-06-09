import { useState,useEffect } from 'react';
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
  
  useEffect(() => {
    setPalabra("break");
  }, []);

  return (
  
    <div>
        <FilaCompletada letra="sabio"  solucion='sabio'/>
        <FilaCompletada letra="saruk"  solucion='sabio'/>
        <FilaActual letra='sab'/>
        <FilaVacia />
        <FilaVacia />
        <FilaVacia />
    </div>
    
  )

}

export default Wordle;