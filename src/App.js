import './App.css';
import ProductList from './Components/ProductList';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import AddProduct from './Components/AddProduct';
import { useState } from 'react';
import axios from 'axios';

function App() {

  // const [productsArr, setProductsArr] = useState([]);
  const [isChecked, setIsChecked] = useState([]);

  const [products, setProducts] = useState({
    SKU: "",
    Name: "",
    Price: "",
    Size: ""
  })

  
  const handlerChange = (e) => {
    setProducts({
      ...products,  
      [e.target.name]: e.target.value
    });
     
  };  

  let {SKU, Name, Price, Size} = products;
  const addProduct = async (e)=> {
    try {
      await axios.post("http://localhost:8800", products)
    } catch (err) {
      console.log(err)
    }
    // setProductsArr([...productsArr, {SKU, Name, Price, Size}])
    setProducts({
      SKU: "",
      Name: "",
      Price: "",
      Size: ""
    })
    e.preventDefault()
  }

  // const handlecheckbox = (e)=>{ 
  //   const {value, checked} = e.target;
  //   if(checked){
  //     setIsChecked([...isChecked, value]);
  //     console.log(isChecked)
  //   } else {
  //     setIsChecked(isChecked.filter((e)=> e !== value));
  //   }
  // }

  // const deleteItem = () => {
  //   const newProductsArr = productsArr.filter((obj, index) => !isChecked.includes(String(index)));
  //   setIsChecked([]);  
  //   // setProductsArr(newProductsArr);  
    
  // }
  // deleteItem={deleteItem}
  // handlecheckbox={handlecheckbox}
  // products={productsArr} 
    return (
    <div>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/addproduct" element={<AddProduct products={products} addProduct={addProduct} handlerChange={handlerChange} />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
