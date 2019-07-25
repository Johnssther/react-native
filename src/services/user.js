import Api from '../api/api'
import { actions } from '../redux/actions/index'
import { store } from '../store'
import { generalError } from './error'

export const  getPlaces = () => dispatch  => {
    return Api.getPlaces()
        .then(response => {
          store.dispatch(actions.places.setPlaces(response))
        })
        .catch(error => generalError(error));
}

