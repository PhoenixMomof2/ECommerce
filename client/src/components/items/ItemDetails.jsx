import React, { useState, useEffect, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart, adjustQty } from '../actions/items'
import { addReview } from "../actions/reviews"
import CheckoutImg from "../images/CheckoutImg.jpg"
// import { loadReviews } from "../actions/reviews"

// TODO : edit component 
const ItemDetails = () => {
    const [title, setTitle] =useState("");
    const [review, setReview] =useState("");
    const { id } = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items, currentUser } = useSelector(store => store.usersReducer)
    const currentItem = items?.find((item) => item.id === parseInt(id))
    const itemQ = currentUser?.user_items.find((item) => item.id === currentItem.id)
    const [qty, setQty] = useState(itemQ?.quantity || 1);
    const lastQtyRef = useRef(qty);
    // debugger
   
    useEffect(() => {
        lastQtyRef.current = qty;
      }, [qty]);
    // console.log(itemQ.quantity, "current item")
    console.log(qty, "qty")
// TODO : build out handleClick onChange to change the value on line 55 to reflect the item number

// Take the qty and * it by the current_item and set the new cartCount.
//find the current_item qty and set the new qty to the current_item

// const handleAddItem=(item) => {
//     dispatch(addToCart(item))
// }

const handleAddItem = () => {
    const updatedQty = parseInt(qty) + 1;
    const updatedItem = { ...itemQ, quantity: updatedQty };
    dispatch(addToCart(itemQ));
    dispatch(adjustQty({id: itemQ.id, quantity: qty}))
    navigate('/checkout');
    // console.log(itemQ, itemQ.id, qty, "updated itemQ")
  };

// const handleRemoveItem= (id) => {
//     dispatch(removeFromCart(currentItem.id))
//     console.log(`currentItem ${id} clicked `) 
// }

const handleRemoveItem = () => {
    if (qty > 0) {
      const updatedQty = qty - 1;
      const updatedItem = { ...itemQ, quantity: updatedQty };
      dispatch(addToCart(updatedItem));
    }
}

const handleSubmit = (event) => {
    event.preventDefault();
    handleAddItem()
}

const submitReviewForm = (e) =>  {
    e.preventDefault();
    
    const newReview = {
        title,
        review,
        user_id: currentUser.id,
        item_id: currentItem.id
    }
    console.log(newReview)
    dispatch(addReview(newReview))
}

// create a useEffect that clears out the form and also calls the setReview
   
  console.log(lastQtyRef.current, "last qty");
// const handleSubmit = (event) => {
//     event.preventDefault();
//     const handleAddItem = (qty) => {
//         // const updatedQty = parseInt(qty) + 1;
//         // const updatedItem = { ...itemQ, quantity: updatedQty };
//         // dispatch(addToCart(updatedItem));
//         dispatch(adjustQty({id: currentItem.id, quantity: qty}))
//         navigate('/checkout');
//       };
//       handleAddItem(qty)
//   };

  //adjust qty from input field and. handleAdjustQuanttiy function called on AddToCart . 
if (!currentItem) {
return <div>Loading...</div>
}

return ( 
    <main className="mt-5 pt-4">
        <div className="container mt-5">    
            <div className="row">
                <div key={currentItem.id} className="col-md-6 mb-4">
                    {currentItem && (
                        <img src={CheckoutImg} className="img-fluid" alt={CheckoutImg} />
                    )}
                </div>
                <div className="col-md-6 mb-4">
                    <div className="p-4">
                        <p className="lead">                        
                        <span>Price ${currentItem.price}</span>
                        </p>
                        <strong><p className="text-bold">Description</p></strong>
                        <p>{currentItem.name}</p>
                        <p>{currentItem.description}</p>                    
                        <form className="d-flex justify-content-left" onSubmit={handleSubmit}>                        
                            <div className="form-outline me-1" style={{width: '100px'}}>
                                <input min="0" type="number" defaultValue={qty} className="form-control" onChange={(e) => setQty(parseInt(e.target.value))} />
                            </div>                        
                            <button className="btn btn-primary shadow-0 me-1" type="submit">Add To Cart
                                <i className="fas fa-shopping-cart ms-1"></i>
                            </button>
                            <button onClick={() => handleRemoveItem(currentItem)} className="btn btn-primary shadow-0 me-1"><i className="bi-trash"></i>
                                <i className="fas fa-shopping-cart ms-1"></i>
                            </button>
                        </form>                         
                    </div>                
                </div>        
            </div>   
            <hr />
            <div className="row d-flex justify-content-center">
                {currentItem.reviews && currentItem.reviews.map((review) =>
                <div key={review.id} className="col-md-6 text-center">
                    <h4 className="my-4 h4">Reviews:</h4>
                    <p>{review.title}</p>
                    <p>{review.review}</p>
                </div>
                )} 
            </div>
            <div className="row">
                <form onSubmit={submitReviewForm}>
                    <input type="text" value={title} className="form-control" placeholder="Type Title..." onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" value={review} className="form-control" placeholder="Type Product Review" onChange={(e) => setReview(e.target.value)} />
                    <button type="submit" className="btn bg-warning p-2 btn-outline-primary fw-bold">Add Review</button> 
                </form>
            </div>    
        </div>
    </main>
    )
}
export default ItemDetails