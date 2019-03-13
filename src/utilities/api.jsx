const GET = "GET";
const PUT = "PUT";
const POST = "POST";
const DELETE = "DELETE";

// TODO: implement
function getHeaders() {
    return {

    }
}

// Helper function, wraps around fetch
function fetcher(url, options) {
    // Make the request
    return fetch(url, options)
        .then(response => {
            // If the request was good, then attempt to unmarshal
            if (response.ok) {
                return response.json();
            }
            // Else, 
            return Promise.reject({ response, stat: response.status });
        })
        .then(json => {
            // Response was good and we successfully unmarshalled
            return { json, error: null };
        })
        .catch(error => {
            // Two cases: error code or failed unmarshalling
            // Error code
            console.log(error);
            if (error.stat) {
                return { json: error.response.json(), error }; // Attempt to grab message from body of error
            }
            // Failed unmarshalling
            else {
                return { json: null, error };
            }
        })
        .catch(error => {
            // Only way to get here would be to fail to unmarshal error message to json
            return { json: null, error };
        });
}


/* Perform a get request. Three parameters:
baseUrl: string, the url for the endpoint you wish to hit without any query strings, ids, etc
queryParams (optional): object where each key is the key and each value is the value for the query string (go figure). Set to null if you're not using query params but are using an id.
id (optional): int that will get concatenated onto the baseUrl as a path param.
Returns an object of the form: {json, error} where json is the unmarshalled body as json (if possible) and error is the error (if any)
*/
function Get(baseUrl, queryParams, id) {
    let url = baseUrl;
    // Append id if we have one
    url = concatId(url, id);
    // Append query param strig
    if (queryParams) {
        // Strip off trailing backslash
        if (url[url.length - 1] === '/') {
            url = url.substring(0, -1);
        }
        url += mapObjectToQueryParamString(queryParams);
    }
    const options = {
        method: GET,
        headers: getHeaders()
    };

    // Make the request
    return fetcher(url, options);
}

/* Perform a put request. Three parameters:
baseUrl: string, the url for the endpoint you wish to hit without any query strings, ids, etc
body (optional): object that represents the body of the put request
id (optional): int that will get concatenated onto the baseUrl as a path param.
Returns an object of the form: {json, error} where json is the unmarshalled body as json (if possible) and error is the error (if any)
*/
function Put(baseUrl, body, id) {
    let url = baseUrl;
    // Append id if we have one
    url = concatId(url, id);
    const options = {
        method: PUT,
        headers: getHeaders()
    };
    if (body) {
        options.body = JSON.stringify(body);
    }
    return fetcher(url, options);
}

/* Perform a post request. Three parameters:
baseUrl: string, the url for the endpoint you wish to hit without any query strings, ids, etc
body (optional): object that represents the body of the post request
id (optional): int that will get concatenated onto the baseUrl as a path param.
Returns an object of the form: {json, error} where json is the unmarshalled body as json (if possible) and error is the error (if any)
*/
function Post(baseUrl, body, id) {
    let url = baseUrl;
    url = concatId(url, id);
    if (body) {

    }
    const options = {
        method: POST,
        headers: getHeaders()
    }
    if (body) {
        options.body = JSON.stringify(body);
    }
  
    return fetcher(url, options);
}

/* Perform a delete request. Three parameters:
baseUrl: string, the url for the endpoint you wish to hit without any query strings, ids, etc
body (optional): object that represents the body of the delete request. Set to null if not used but you wish to include an id path param.
id (optional): int that will get concatenated onto the baseUrl as a path param.
Returns an object of the form: {json, error} where json is the unmarshalled body as json (if possible) and error is the error (if any)
*/
function Delete(baseUrl, body, id) {
    let url = baseUrl;
    url = concatId(url, id);
    const options = {
        method: DELETE,
        headers: getHeaders()
    }
    if (body) {
        options.body = JSON.stringify(body);
    }
    return fetcher(url, options);
}

// Concatenates an id as a path parameter if and only if it is provided and is an integer.
function concatId(url, id) {
    if (Number.isInteger(id)) {
        if (url[url.length - 1] !== '/') {
            url += '/';
        }
        url += id.toString();
    }
    return url;
}

function mapObjectToQueryParamString(object) {
    return Object.keys(object).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(object[key])).join('&');
}

