export default class Loader {
    load(url) {
        return fetch(url).then((response) => {
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("No JSON-Data received.");
        })
    }
}