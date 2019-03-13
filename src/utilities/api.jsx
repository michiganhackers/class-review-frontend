const GET = "GET";
const PUT = "PUT";
const POST = "POST";
const DELETE = "DELETE";

// TODO: implement
function getHeaders() {
    return {

    }
}


/* Wrapper for fetch. Three parameters:
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
    }

    // Make the request
    return fetch(url, options)
    .then(response => {
        // If the request was good, then attempt to unmarshal
        if (response.ok) {
            return response.json();
        }
        // Else, 
        return Promise.reject({ response, status: response.status });
    })
    .then(json => {
        return { json, error: null}
    })
    .catch(error => {
        // Two cases: error code or failed unmarshalling
        // Error code
        console.log(error);
        if (error.status) {
            return { json: error.response.json(), error }; // 
        }
        // Failed unmarshalling
        else {
            return { json: null, error };
        }
    })
}

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
    return fetch(url, options)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
    .catch(error => {
        // Two cases: error code or failed unmarshalling
        // TODO: proper error handling
        console.log(error)
        return Promise.reject(error);
    })
}

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
  
    return fetch(url, options)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response)
    })
    .catch(error => {
        // Two cases: error code or failed unmarshalling
        // TODO: proper error handling
        console.log(error)
        return Promise.reject(error);
    })
}

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
    return fetch(url, options)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response)
    })
    .catch(error => {
        // Two cases: error code or failed unmarshalling
        // TODO: proper error handling
        console.log(error)
        return Promise.reject(error);
    })
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

