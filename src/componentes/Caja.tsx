import React from 'react'
import {cajastatus} from './Tipos'

interface cajaProps{
    value:string;
    stauts:cajastatus;
}

const Caja = ({value,stauts}:cajaProps) => {
   
  return (
    <div>Caja</div>
  )

}

export default Caja