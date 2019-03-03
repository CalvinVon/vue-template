/**
 * Stringify query string
 * @param {Object} query query object
 */
export function queryString(query) {
    return Object.keys(query).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(query[key])
    }).join('&');
};

/**
 * Parse stringified query string
 * @param {*} string 
 */
export function queryParse(string) {
    const query = {};
    if (typeof string !== 'string') return {};

    string.split('&').forEach(str => {
        const res = str.split('=');
        query[decodeURIComponent(res[0])] = decodeURIComponent(res[1]);
    });
    return query;
};