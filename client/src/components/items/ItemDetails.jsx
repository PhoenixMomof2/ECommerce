import React from "react"
import { Link } from "react-router-dom"



// TODO : edit component 
const ItemDetails = () => {

    const handleClick = () => {
        console.log("this is my item details page")
    }
    return (
 
<main className="mt-5 pt-4">
    <div className="container mt-5">
        {/* <!--Grid row--> */}
        <div className="row">
            {/* <!--Grid column--> */}
            <div className="col-md-6 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg" className="img-fluid" alt="" />
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-md-6 mb-4">
                {/* <!--Content--> */}
                <div className="p-4">
                    <div className="mb-3">
                        <Link to="">
                            <span className="badge bg-dark me-1">Category 2</span>
                        </Link>
                        <Link to="">
                            <span className="badge bg-info me-1">New</span>
                        </Link>
                        <Link to="">
                            <span className="badge bg-danger me-1">Bestseller</span>
                        </Link>
                    </div>

                    <p className="lead">
                        <span className="me-1">
                            <del>$200</del>
                        </span>
                        <span>$100</span>
                    </p>

                    <strong><p className="text-bold">Description</p></strong>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor suscipit libero eos atque quia ipsa sint voluptatibus! Beatae sit assumenda asperiores iure at maxime atque repellendus maiores quia sapiente.</p>

                    <form className="d-flex justify-content-left" onClick={handleClick}>
                        {/* <!-- Default input --> */}
                        <div className="form-outline me-1" style={{width: '100px'}}>
                            <input type="number" value="1" className="form-control" />
                        </div>
                        <button className="btn btn-primary ms-1" type="submit">
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
            {/* <!--Grid column--> */}
            <div className="col-md-6 text-center">
                <h4 className="my-4 h4">Additional information</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit modi sapiente illo soluta odit voluptates, quibusdam officia. Neque quibusdam quas a quis porro? Molestias illo neque eum in laborum.</p>
            </div>
            {/* <!--Grid column--> */}
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