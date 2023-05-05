import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../actions/items';

const ItemCard = ({ item }) => {
  const navigate = useNavigate();
  const currentUser = useSelector(store => store.usersReducer.currentUser);

  const dispatch = useDispatch()
  
  const handleDelete = () => {
    dispatch(deleteItem(item.id))
  }

  return (
    <div>
      <hr />
      <h4><Link to={`/itemss/${ item.id }`}>{ item.title }</Link></h4>
    <p>By: { item.author?.username }</p>
      <p>{ item.content }</p>
      {currentUser && currentUser.id === item.author.id ? <>
        <button onClick={() => navigate(`/items/${ item.id }/edit`)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </> : null}
    </div>
  )
}

export default ItemCard