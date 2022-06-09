import React from 'react'
import Caja from './Caja'
import styles from "./fila.module.scss";

const FilaVacia = () => {
  return (

    <div className={styles.row}>
        {
            Array.from(Array(5)).map((_,i)=>(
                <Caja 
                key={i} 
                valor="" 
                estado="vacio"

                />      
   
            ))
        }

    </div>


  )

}

export default FilaVacia