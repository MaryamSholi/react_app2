import React from 'react'

export default function Product(props) {
  return (
    <div className='col-md-4 text-center  '>
    <div className='pro-item prod pt-3 pb-5'>
    <h2 className='proName py-3'>
       {props.title}
    </h2>
    <p className='py-3'>{props.desc}</p>
    <p className=''>{props.price}</p>
    </div>
 </div>
  )
}
