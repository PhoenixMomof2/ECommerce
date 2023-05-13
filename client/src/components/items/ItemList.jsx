import React, { useEffect} from 'react'
// import { loadFakeItems } from '../actions/items'
import { loadLists } from '../actions/items'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const ItemList = () => {

const dispatch = useDispatch();
const items = useSelector(store => store.itemsReducer)
console.log(items)

useEffect(() => {
    dispatch(loadLists());
}, [dispatch])

  return (
    <div className="row">
        {items.map((item) => 
        <div className="card" style={{'width': '18rem'}} key={item.id}>
        <img src={item.image} className="card-img-top img-thumbnail" alt={item.title}/>
        <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">{item.price}</p>
  </div>
  <div className="card-body">
    <Link to="#" className="card-link">Card link</Link>
    <Link to="#" className="card-link">Another link</Link>
  </div>
</div>

)}
</div>
)}

export default ItemList