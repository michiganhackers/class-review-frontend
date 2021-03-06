import store from '../store.js';


const REQUEST_VERBS = Object.freeze({
    GET: "GET",
    PUT: "PUT",
    POST: "POST",
    DELETE: "DELETE",
})

const NOT_JSON_AND_OK = "NOT_JSON_AND_OK";
const NOT_JSON_AND_NOT_OK = "NOT_JSON_AND_NOT_OK";
const JSON_AND_NOT_OK = "JSON_AND_NOT_OK";

// TODO: implement
function getHeaders() {
    const state = store.getState()
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        //'ID-Token': (state.loginReducers.setLoginTokens && state.loginReducers.setLoginTokens.tokens) ? state.loginReducers.setLoginTokens.tokens.id_token : undefined,
    }
}

// Helper function, wraps around fetch
function fetcher(url, options) {
    // Make the request
    let goodJSON = true;
    return fetch(url, options)
        .then(response => {
            const contentType = response.headers.get("content-type");
            // If the request was good, then attempt to unmarshal
            if (response.ok) {
                if (contentType && contentType.includes("application/json")) {
                    return response.json();
                }
                else {
                    return Promise.reject({ response, status: response.status, reason: NOT_JSON_AND_OK });
                }
            }
            else {
                if (contentType && contentType.includes("application/json")) {
                    goodJSON = false;
                    return response.json();
                }
                else {
                    return Promise.reject({ response, status: response.status, reason: NOT_JSON_AND_NOT_OK});
                }
            }
        })
        .then(json => {
            // Response was good and we successfully unmarshalled
            if (goodJSON) return { json, error: null };
            return Promise.reject({ json, reason: JSON_AND_NOT_OK });
        })
        .catch(error => {
            switch (error.reason) {
                case NOT_JSON_AND_OK:
                    return { json: null, error };
                case NOT_JSON_AND_NOT_OK:
                    return { json: null, error };
                case JSON_AND_NOT_OK:
                    return { json: error.json, error };
                default: 
                    return { json: null, error };
            }
        });
}


/* Perform a get request. Three parameters:
baseUrl: string, the url for the endpoint you wish to hit without any query strings, ids, etc
queryParams (optional): object where each key is the key and each value is the value for the query string (go figure). Set to null if you're not using query params but are using an id.
id (optional): int that will get concatenated onto the baseUrl as a path param.
Returns an object of the form: {json, error} where json is the unmarshalled body as json (if possible) and error is the error (if any)
*/
export function Get(url) {
    const options = {
        method: REQUEST_VERBS.GET,
        headers: getHeaders()
    };

    // Make the request
    return fetcher(url.str(), options);
}

/* Perform a put request. Three parameters:
baseUrl: string, the url for the endpoint you wish to hit without any query strings, ids, etc
body (optional): object that represents the body of the put request
id (optional): int that will get concatenated onto the baseUrl as a path param.
Returns an object of the form: {json, error} where json is the unmarshalled body as json (if possible) and error is the error (if any)
*/
export function Put(url, body) {
    const options = {
        method: REQUEST_VERBS.PUT,
        headers: getHeaders()
    };
    if (body) {
        options.body = JSON.stringify(body);
    }
    return fetcher(url.str(), options);
}

/* Perform a post request. Three parameters:
baseUrl: string, the url for the endpoint you wish to hit without any query strings, ids, etc
body (optional): object that represents the body of the post request
id (optional): int that will get concatenated onto the baseUrl as a path param.
Returns an object of the form: {json, error} where json is the unmarshalled body as json (if possible) and error is the error (if any)
*/
export function Post(url, body) {
    const options = {
        method: REQUEST_VERBS.POST,
        headers: getHeaders()
    }
    if (body) {
        options.body = JSON.stringify(body);
    }
  
    return fetcher(url.str(), options);
}

/* Perform a delete request. Three parameters:
baseUrl: string, the url for the endpoint you wish to hit without any query strings, ids, etc
body (optional): object that represents the body of the delete request. Set to null if not used but you wish to include an id path param.
id (optional): int that will get concatenated onto the baseUrl as a path param.
Returns an object of the form: {json, error} where json is the unmarshalled body as json (if possible) and error is the error (if any)
*/
export function Delete(url, body) {
    const options = {
        method: REQUEST_VERBS.DELETE,
        headers: getHeaders()
    }
    if (body) {
        options.body = JSON.stringify(body);
    }
    return fetcher(url.str(), options);
}
