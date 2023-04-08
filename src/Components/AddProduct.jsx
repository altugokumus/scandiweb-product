import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function AddProduct(props) {

  const [type, setType] = useState("");  

  const formTypeChange = (e) => {
    setType(e.target.value);
    e.preventDefault();
  }  
  
  return (

    <div className='main'>
      <div className='navbar'>
          <div className='header'>
            <h3>Product Add</h3>
          </div>
          <div className='btn'>
            <Link to={"/"} id='cancel-btn'>CANCEL</Link>{''}
          </div>
        </div>
        <div>
            <form id='product_form'>
                <div>
                  <label htmlFor="sku">SKU:</label>
                  <input onChange={props.handlerChange} value={props.products.SKU} type="text" name="SKU" id="sku" required/> 
                </div>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input onChange={props.handlerChange} value={props.products.Name} type="text" name="Name" id="name" required/>
                </div>
                <div>
                  <label htmlFor="price">Price ($):</label>
                  <input onChange={props.handlerChange} value={props.products.Price} type="price" name="Price" id="price" required/>
                </div>
                <label htmlFor="type">Type Switcher: </label>
                <select onChange={formTypeChange} value="" name="type" id="productType" required>
                    <option disabled="disabled" value="" >--Please choose product type--</option>
                    <option value="dvd">DVD</option>
                    <option value="book">Book</option>
                    <option value="furniture">Furniture</option>
                 </select>
            
            <div id='size-section'>
                { type === "dvd" ? (
                  <div id='DVD'>
                    <label htmlFor="Size">Size (MB): </label>
                    <input onChange={props.handlerChange} value={props.products.Size} type="number" name="Size" id="size" required/>
                    <p>* Please provide size of DVD in MB.</p>
                  </div>
                ) : type === "book" ? (
                  <div id='Book'>
                    <label htmlFor="Size">Size (Kg): </label>
                    <input onChange={props.handlerChange} value={props.products.Size} type="number" name="Size" id="weight" required/>
                    <p>* Please provide size of book in Kg.</p>
                  </div>
                ) : type === "furniture" ? (
                  <div id='Furniture'>
                    <label htmlFor="size-h">Height x Width x Lenght (CM): </label>
                    <input onChange={props.handlerChange} value={props.products.Size} type="text" name="Size" id="HxWxL" required/>
                    <p>* Please provide dimentions of furniture in H x W x L.</p>
                  </div>
                ) : (
                  <h1></h1>
                )}
            </div>
            <Link to={"/"} onClick={props.addProduct} id='save-btn'>SAVE</Link>{''}
            </form>
        </div>
    </div>
  )
}

export default AddProduct;