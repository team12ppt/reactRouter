import React from 'react'
export default function Header(props) {
return (
<div>
<div onClick={()=>props.handleShow(false)}>ShoppingCart</div>
<div onClick={()=>props.handleShow(true)}> Cart
<sup>{props.count}</sup>
</div>
</div>

)}