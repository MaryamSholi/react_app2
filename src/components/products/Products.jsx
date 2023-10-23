import React from 'react'
import './Product.css'
import Product from '../product/Product.jsx'

export default function Products() {
  const products = [
    {id:1,title:'Product One',desc:'This Is Product One', price: '1000'},
    {id:2,title:'Product Two',desc:'This Is Product Two', price: '2000'},
    {id:3,title:'Product Three',desc:'This Is Product Three', price: '3000'},
    {id:4,title:'Product Four',desc:'This Is Product Four', price: '4000'},
    {id:5,title:'Product Five',desc:'This Is Product Five', price: '5000'},
    {id:6,title:'Product Six',desc:'This Is Product Six', price: '6000'},
    

];
  return (
    <div className='container py-5'>
      <div className='row row-gap-3 '>
         {
          products.map((product) =>{
            return <Product {...product} key={product.id} />

          })
         }
  
      </div>
    

  </div>
  )
}
