import { headers } from "../Globals"
import { setErrors } from "./errors";



// TODO: finish building out loadReviews action file. Look at items action file for reference.

export const loadReviews = () => {
    return dispatch => {
       fetch('/reviews')
       .then(resp => resp.json())
       .then(data => {
        const action = {
            type: "LOAD_REVIEWS", payload: data }
        dispatch(action)
       })
    }

    <div>
        reviews
        build out similar to items.jsx action file.
    </div>
  
}

