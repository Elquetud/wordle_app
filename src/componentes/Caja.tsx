import classNames from 'classnames';
import React from 'react'
import {cajastatus} from './Tipos'

interface cajaProps{
    valor:string;
    estado:cajastatus;
}

const Caja = ({valor,estado}:cajaProps) => {
  
   const cajaestado = classNames({
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