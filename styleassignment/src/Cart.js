function Cart({Img,Text1,Text2}){
    return(
       <>
       <div className="cart">
         <div className="img-box">
           <img src={Img} alt="" />
         </div>
         <span className="f-5">{Text1}</span>
         <span className="f-6">{Text2}</span>
       </div>
       </>
    )
}
export default Cart