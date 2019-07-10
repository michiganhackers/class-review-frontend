
const BASE_URL = "localhost:8080/"

export default class Url {
    // Takes in base URL. If there is not a trailing slash, one is added.
    constructor() {
        this.url = BASE_URL;
    }

    // Adds on a namespace (e.g. in localhost:8080/review/5, "review"). Also adds on a trailing slash.
    namespace(name) {
        this.url += (name + '/');
        return this;
    }

    // Adds on a path parameter (e.g. in localhost:8080/review/5, "5"). Also adds on a trailing slash.
    pathParameter(id) {
        this.url += (toString(id) + '/');
        return this;
    }

    queryStrings(object) {
        this.url += Object.keys(object).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(object[key])).join('&');
        return this;
    }
}

