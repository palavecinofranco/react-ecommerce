import React, { useContext, useEffect, useState } from 'react'
import "./itemDetail.css"
import ItemCount from '../../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { Button, Chip } from '@mui/material';
import { cartContext } from '../../../storage/cartContext'
import { Grid } from '@mui/material'

function ItemDetail({title, image, detail, price, onAddToCart, stock, quantity, idProduct, discount}) {

  const {isInCart} = useContext(cartContext);
  let priceWithDiscount = price-(price*discount/100);

  return (
  <Grid container sx={{m:"50px auto 400px auto", width:"80%", height:"600px"}}>
    <Grid item xs={12} md={8}>
        <div className="container-img">
            <img src={image} alt={title} className="detail-img"/>
        </div>
    </Grid>
    <Grid item xs={12} md={4}>
      <Grid container direction={'row'} sx={{p:"20px", height:"100%", backgroundColor:"#222", color:"white"}}>
        <Grid item xs={12}>
          <Grid container spacing={3} direction={"column"}>
            <Grid item><h4 className='detail-title'>{title.toUpperCase()}</h4></Grid>
            <Grid item><small className='detail-desc'>{detail}</small></Grid>
            {
              price>=7000 && <Grid item><div className='container-env'><Chip label="Envío gratis" color="warning" variant="outlined"/></div></Grid>
            }
            {
              discount!==0&&<Grid item><span className="discount-msg">Descuento %{discount}</span><br/></Grid>
            }
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div className="price-count-container">
            {
              discount===0?<p className='detail-price'>${price}</p>
              :
              <div className='price-container'>
                <span className="detail-price detail-price-modified">${price}</span>
                <span className="discount-price">${priceWithDiscount}</span>
              </div>
            }
            {
              isInCart(title)?<div className='btn-container'><Link to="/cart" style={{textDecoration:"none"}}><Button variant='outlined' color='warning' sx={{fontFamily:"'Inter', sans-serif"}}>Ir al carrito</Button></Link></div>
              :
              <div>
                <ItemCount className="itemcount-container" onAddToCart={onAddToCart} stock={stock} quantity={quantity}/><small className='disponibles'>Disponibles: {stock}</small>
              </div>
            }
            </div>
        </Grid>
        </Grid>
        </Grid>
    </Grid>
  )
}

export default ItemDetail