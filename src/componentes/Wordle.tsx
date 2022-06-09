import FilaActual from './FilaActual';
import { FilaCompletada } from './FilaCompletada';
import FilaVacia from './FilaVacia';

export const Wordle = () => {
    
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