import Caja from './Caja'


interface PropiedadesFila {
   casilla:string,
   solucion:string
}

export const FilaCompletada = ({casilla,solucion}:PropiedadesFila) => {

  return (
    <div>
       {
          Array.from((Array(5))).map((_,i)=>(
             <Caja key={i} valor={"a"} estado={'correcto'} />      

          ))


       }

    </div>
  
   )

}
