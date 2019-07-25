import { handleErrors } from '../services/error'

const API_URL = 'http://104.236.57.82/SSSmartapi/public/api';


class Api {
    getPlaces() {
        return fetch(`${API_URL}/sitio`, {
            method: 'GET',
        })
        .then(response => handleErrors(response))
        .then(response => response.json())
        .catch(error => {
            throw error;
        })
    }
}
export default new Api();