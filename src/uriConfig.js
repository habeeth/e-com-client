export const api = 'http://localhost:3000/api';
export const imageSource = 'http://localhost:3000/public';
export const generateImgURI = (imageID) => {
    return `${imageSource}/${imageID}`;
}