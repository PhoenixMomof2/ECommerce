import React from 'react'
import dingyShoes from "../images/dingyShoes.jpg"
import { Link } from "react-router-dom"


const ItemCardCheckout = ({item}) => {
  return (
    <div key={item.id} className="card mb-3">
                  <div className="card-body">

                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src={dingyShoes}
                            className="img-fluid rounded-3" alt="dingy shoes" style={{width: '65px'}}/>
                        </div>
                        <div className="ms-3">
                          <h5>{item.title}</h5>
                          <p className="small mb-0">{item.name}</p>
                          <p className="small mb-0">{item.description}</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{width: '50px'}}>
                          <h5 className="fw-normal mb-0">{item.quantity}</h5>
                        </div>
                        <div style={{width: '80px'}}>
                          <h5 className="mb-0">${item.price}</h5>
                        </div>
                        <Link to="#!" style={{color: '#cecece'}}><i className="fas fa-trash-alt"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>                
  )
}

export default ItemCardCheckout