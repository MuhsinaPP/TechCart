import React from 'react'
import { useEffect,useState } from 'react'
import './ProductDetails.css'
import { getProductById } from '../apiServices/Api'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function ProductDetails() {

       const {id}= useParams()
       const [products, setProducts] = useState({})

       const handleByNow=()=>{
        window.confirm("The product is out of stock")
       }

    useEffect(() => {
        const fetchProductDetails=async()=>{
            const data=await getProductById(id)
            console.log(data,"data")
            setProducts(data)
            
        }
        fetchProductDetails()
     
    }, [id])
    

  return (
    <div className='productDetails-container'>
        <img className='product-image' src={products.image} alt='Alternative'></img>
        <div className='product-info'>
            <h2 className='product-title'>{products.title}</h2>
            <p className='product-description'>
                {products.description}
            </p>
            <p className='product-price'>
                {products.price}
            </p>
            <button className='buy-now' onClick={handleByNow}>Buy now</button>
            <Link to='/'>
            <button className='bsck-to-home'>Bcak to Home</button>

            </Link>
          
           
        </div>
    </div>
  )
}

export default ProductDetails