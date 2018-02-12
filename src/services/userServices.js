import Boom from 'boom';
import axios from 'axios';


const baseAuthUrl = process.env.MSA_AUTH;
/**
 * Get a user.
 *
 * @param  {Number|String}  id
 * @return {Promise}
 */
export function getUser(id) {

    return axios.get(`${baseAuthUrl}/users/${id}`)
    .then(function (response) {
            return response;
    })
    .catch(function (error) {
        return new Boom.notFound('Could not post');
    });
}



