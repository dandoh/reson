import path    from 'path';

const flatten = (arr) => {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
};

/**
 * Parse an URI, encoding some characters
 *
 * @return string
 * @param uri
 */
const parseUri = (uri) => {
    const root = process.platform === 'win32' ? '' : path.parse(uri).root;
    const location = uri
        .split(path.sep)
        .map((d, i) => {
            return i === 0 ? d : encodeURIComponent(d);
        })
        .reduce((a, b) => path.join(a, b));
    return `file://${root}${location}`;
};

export default {
    flatten,
    parseUri
}