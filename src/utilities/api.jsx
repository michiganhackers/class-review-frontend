// TODO: implement
function getHeaders() {
    return {

    }
}


// Wrapper for fetch
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
        method: 'GET',
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
        return Promise.reject(response);
    })
    .catch(error => {
        // Two cases: error code or failed unmarshalling
        // TODO: proper error handling
        console.log(error)
        return Promise.reject(error);
    })
}

function Put(baseUrl, body, id) {
    let url = baseUrl;
    // Append id if we have one
    url = concatId(url, id);
    const options = {
        method: 'PUT',
        headers: getHeaders(),
        body
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

function Post(baseUrl, body, id) {
    let url = baseUrl;
    url = concatId(url, id);
    const options = {
        method: 'POST',
        headers: getHeaders(),
        body
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
        method: 'DELETE',
        headers: getHeaders(),
        body
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

