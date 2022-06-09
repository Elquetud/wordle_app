import React from 'react'
import Caja from './Caja'
import styles from "./fila.module.scss";

interface CurrentRowProps {
    letra: string;

}

const FilaActual = ({letra}:CurrentRowProps) => {

  return (
    <div className={styles.row}>
      
        {letra.split("").map((letter,i)=>(
          <Caja key={i} valor= {letter} estado="editar"   />
        ))}
      
        {Array.from(Array(5 - letra.length)).map((letter,i)=>(
            <Caja key={i} valor={""} estado="editar"   />
        ))}
      
      
      
      </div>

  )

}

export default FilaActual