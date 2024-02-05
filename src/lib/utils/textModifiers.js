export function slugify(text) {
    return text
        .toString() // convert to string in case of non-string input
        .toLowerCase()
        .trim() // remove leading/trailing white spaces
        .replace(/\s+/g, '-') // replace spaces with dashes
        .replace(/[^\w-]+/g, '') // remove non-alphanumeric characters except dashes
        .replace(/-+/g, '') // replace dashes 
        .replace(/^-+|-+$/g, ''); // remove dashes from the start and end of the string
}

// export function deslugify(slug) {
//     return slug
//         .replace(/-/g, ' ')
//         .replace(/(^|\s)\S/g, (match) => match.toUpperCase());
// }


export function deslugify(str) {
    const uuidWithDashes = [
        str.slice(0, 8),
        str.slice(8, 12),
        str.slice(12, 16),
        str.slice(16, 20),
        str.slice(20)
    ].join('-');

    return uuidWithDashes;
}

export function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }

    return text.slice(0, maxLength) + '...';
}