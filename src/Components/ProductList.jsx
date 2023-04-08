import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



function ProductList(props) {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchAllProducts = async ()=> {
      try {
        const res = await axios.get("http://localhost:8800/products")
        setProducts(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllProducts()
  }, [])

  const handleDelete = async (id)=>{
    try {
      await axios.delete("http://localhost:8800/products/"+id)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }
  
  

  return ( 
    <div className='main'>
        <div className='navbar'>
          <div className='header'>
            <h3>Product List</h3>
          </div>
          <div className='btn'>
            <Link to={"/addproduct"} id='add-btn'>ADD</Link>{''}
            <Link onClick={()=>handleDelete()}to={"/"} id='delete-btn'>MASS DELETE</Link>{''}
          </div>
        </div>
        {products.map((product, index) => {
          return <div key={product.product_id} id={product.product_id}  className="card-container">
           
          <div className='product-card'>
          <input className='delete-checkbox' type="checkbox" value={product.product_id} checked={product.isChecked}/>
             <div className='item-info'>  
                <h5>{product.SKU}</h5>
                <p>{product.Name}</p>
                <p>{product.Price}$</p>
                <p>Size: {product.Size} </p>
                <button onClick={()=>handleDelete(product.product_id)}>Delete</button>
              </div>
            </div>
          
          </div>
        })}
    </div>
  )
} 

export default ProductList;