
const api = require('../../utils/api');

/**
 * @private Base asset path for the Mux API
 * */
const PATH = '/data/v1/filters';

/**
 * Filters Class
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Data } = muxClient;
 *
 * // List all of the values across every breakdown for a specific metric
 * Data.filters.list();
 */
class Filters {
  /**
   * @ignore
   * Exports Constructor
   *
   * @param {string} accessToken - Mux API Access Token
   * @param {string} secret - Mux API Access Token secret
   * @constructor
   */
  constructor(accessToken, secret) {
    if (typeof accessToken === 'undefined') {
      throw new Error('API Access Token must be provided.');
    }

    if (typeof secret === 'undefined') {
      throw new Error('API secret key must be provided');
    }

    /**
     *  @ignore
     *  @type {Object} requestOptions - The HTTP request options for Mux Assets
     *  @property {string} requestOptions.auth.username - HTTP basic auth username (access token)
     *  @property {string} requestOptions.auth.password - HTTP basic auth password (secret)
     * */
    this.requestOptions = {
      auth: {
        username: accessToken,
        password: secret,
      },
    };
  }

  /**
   *
   * @param filterId
   * @param queryParams
   */
  get(filterId, queryParams) {
    return api.get(`${PATH}/${filterId}`, queryParams, this.requestOptions);
  }

  /**
   *
   */
  list() {
    return api.get(PATH, {}, this.requestOptions);
  }
}

module.exports = Filters;
