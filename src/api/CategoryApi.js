import { baseUrl, categoryUrl, commentUrl } from '../shared/CategoryConstant';

export function getCategories() {
    return fetch(baseUrl + categoryUrl)
    .then(response => response.json())
    .then(json => json.data);
}

export function addCategory(categoryName) {
    const data = { name: categoryName };
    return commonOperation((baseUrl + categoryUrl), data, 'POST');
}

export function updateCategory(category) {
    const data = { name: category.name, id: category.id };
    return commonOperation((baseUrl + categoryUrl), data, 'PUT');
}

export function deleteCategory(categoryId) {
    const data = { id: categoryId };
    return commonOperation((baseUrl + categoryUrl), data, 'DELETE');
}

export function getComments() {
    return fetch(baseUrl + commentUrl)
    .then(response => response.json())
    .then(json => json.data);
}

function commonOperation(url, data, method){
    return fetch(url, {
        method: method,
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
    })
    .then(response => response.json());
}