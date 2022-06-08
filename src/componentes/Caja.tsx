import React from 'react'
import {cajastatus} from './Tipos'

import styles from "./caja.module.scss"
import classNames from "classnames/bind"

const classes = classNames.bind(styles);

interface cajaProps{
    valor:string;
    estado:cajastatus;
}

const Caja = ({valor,estado}:cajaProps) => {
  
   const cajaestado = classes({
     correcto: estado ==='correcto',
     presente: estado === "presente",
     ausente:  estado === "ausente",
     vacio:    estado === "vacio",
     editar:   estado === "editar",
   });

  return (
    <div className={cajaestado}>{valor}</div>
    
  )

}

export default Caja