import Caja from './Caja'
import { cajastatus } from "./Tipos";

interface PropiedadesFila {
   casilla:string,
   solucion:string
}

export const FilaCompletada = ({casilla,solucion}:PropiedadesFila) => {

   function comprobarLetra(letter: string, pos: number): cajastatus {
      if (solucion.includes(letter)) {
        if (solucion[pos] === letter) {
          return "correcto";
        } else {
          return "presente";
        }
      } else {
        return "vacio";
      }
    }

  return (
     
    <div>
       {
          Array.from((Array(5))).map((_,i)=>(
             <Caja 
             key={i} 
             valor={"a"} 
             estado={'correcto'}
             
             />      

          ))


       }

    </div>
  
   )

}
