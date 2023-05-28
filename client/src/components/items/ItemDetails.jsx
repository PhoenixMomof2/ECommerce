import React from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart, adjustQty } from '../actions/items'
// import { loadReviews } from "../actions/reviews"

// TODO : edit component 
const ItemDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items } = useSelector(store => store.usersReducer)
    // const { user_items } = useSelector(store => store.reviewsReducer)
    const { reviews } = useSelector(store => store.reviewsReducer)
    const item = items.find((item) => item.id === parseInt(id))
    // const review = reviews.find((review) => review.id === parseInt(id))

    console.log(item, "current item")
// TODO : build out handleClick onChange to change the value on line 55 to reflect the item number

const handleAddItem= (id) => {
    dispatch(addToCart(item, navigate))
    console.log(`item ${id} clicked `) 
}

const handleRemoveItem= (id) => {
    dispatch(removeFromCart(item, navigate))
    console.log(`item ${id} clicked `) 
}

const handleAdjustQty= (id, value) => {
    dispatch(adjustQty(item, navigate))
    console.log(`item ${id} clicked `) 
}
 
return (
 
<main className="mt-5 pt-4">
    <div className="container mt-5">
        {/* <!--Grid row--> */}
        <div className="row">
            {/* <!--Grid column--> */}
            <div key={item.id} className="col-md-6 mb-4">
                <img src={item.image} className="img-fluid" alt={item.image} />
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-md-6 mb-4">
                {/* <!--Content--> */}
                <div className="p-4">
                    {/* <div className="mb-3">
                        <Link to="">
                            <span className="badge bg-dark me-1">Category 2</span>
                        </Link>
                        <Link to="">
                            <span className="badge bg-info me-1">New</span>
                        </Link>
                        <Link to="">
                            <span className="badge bg-danger me-1">Bestseller</span>
                        </Link>
                    </div> */}

                    <p className="lead">
                        <span className="me-1">
                            {/* <del>$200</del> */}
                        </span>
                        <span>${item.price}</span>
                    </p>

                    <strong><p className="text-bold">Description</p></strong>

                    <p>{item.name}</p>
                    <p>{item.description}</p>
                 

                    <form className="d-flex justify-content-left" >
                        {/* <!-- Default input --> */}
                        <div className="form-outline me-1" style={{width: '100px'}}>
                            {/* TODO : provide an onChange function for the value prop on line 55 */}
                            <input type="number" value="1" className="form-control" />
                        </div>
                        <button onClick={handleAddItem} className="btn btn-primary ms-1" type="submit">
                            Add to cart
                            <i className="fas fa-shopping-cart ms-1"></i>
                        </button>
                    </form>
                </div>
                {/* <!--Content--> */}
            </div>
            {/* <!--Grid column--> */}
        </div>
        {/* <!--Grid row--> */}

        <hr />

        {/* <!--Grid row--> */}
        
        <div className="row d-flex justify-content-center">
            {reviews.map((review) =>
            <div key={review.id} className="col-md-6 text-center">
                <h4 className="my-4 h4">Additional information</h4>

               
                <p>{review.title}</p>
                <p>{review.review}</p>
            </div>
         )} 
        </div>
            
    
        {/* <!--Grid row--> */}

        {/* <!--Grid row--> */}
        <div className="row">
            {/* <!--Grid column--> */}
            <div className="col-lg-4 col-md-12 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg" className="img-fluid" alt="" />
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-4 col-md-6 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg" className="img-fluid" alt="" />
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-4 col-md-6 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" className="img-fluid" alt="" />
            </div>
            {/* <!--Grid column--> */}
        </div>
        {/* <!--Grid row--> */}
    </div>
</main>
       )
    }

export default ItemDetails