import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"


function Home() {
  const [products, setProducts] = useState(null)

  useEffect(()=>{
    axios('https://fakestoreapi.com/products')
    .then((res)=>{
      console.log(res.data);
      setProducts(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <>
    <div>
      {
        products ? products.map((item)=>{
          return (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection : 'column',
              alignItems: 'center',
              margin: '20px',
              border: '1px solid black',
              padding: '10px',
              flex: 'wrap'
            }} key={item.id}>
              <h3>{item.title}</h3>
              <img width= '100px' src={item.image} alt={item.title} />
              <p>${item.price}</p>
            </div>
          )
        }): <h1>Loading...</h1>
      }
    </div>
    </>
  )
}

export default Home
