import Caja from './Caja'
import { cajastatus } from "./Tipos";
import styles from "./fila.module.scss";

interface PropiedadesFila {
   letra:string,
   solucion:string
}

export const FilaCompletada = ({letra,solucion}:PropiedadesFila) => {

   function comprobarLetra(letra: string, pos: number): cajastatus {
      if (solucion.includes(letra)) {
        if (solucion[pos] === letra) {
          return "correcto";
        } else {
          return "presente";
        }
      } else {
        return "ausente";
      }
    }

  return (
     
    <div className={styles.row}>

       {
          Array.from((Array(5))).map((_,i)=>(
             <Caja 
             key={i} 
             valor={letra[i]} 
             estado={comprobarLetra(letra[i],i)}
             
             />      

          ))


       }

    </div>
  
   )

}
