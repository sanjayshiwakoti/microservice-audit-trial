import Boom from 'boom';

/**
 * Utility helper for Joi validation.
 *
 * @param  {object}  data
 * @param  {object}  schema
 * @return {Promise}
 */
export function boomError(payload) {
    if(payload.code == 400) {
        throw new Boom.badRequest(payload.message);
    } else if(payload.code == 401) {
        throw new Boom.unauthorized(payload.message);
    } else if(payload.code == 403) {
        throw new Boom.forbidden(payload.message);
    } else if(payload.code == 404) {
        throw new Boom.notFound(payload.message);
    } else if (payload.code == 500) {
        throw new Boom.serverUnavailable(payload.message);
    } else {
        throw new Boom.badRequest(payload.message)
    }
}


