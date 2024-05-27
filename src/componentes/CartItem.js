import React from 'react'

const CartItem = ({data,delFromCart}) => {
  let{id,name,price,quantity}=data;
  return (
    <div style={{borderBottom:"thin solid gray"}}>
      <h4>{name}</h4>
      <h5>${price}x{quantity}=${price*quantity}</h5>
      <button class="noselect" onClick={()=>delFromCart(id)}>
        <span class="text">Eliminar <br/>uno</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
      </button>
      <br/>
      <button class="noselect" onClick={()=>delFromCart(id,true)}>
        <span class="text">Eliminar <br/>todos</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
      </button>
      <br/><br/>
    </div>
  )
}

export default CartItem
