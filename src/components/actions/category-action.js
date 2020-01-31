import { baseUrl, categoryUrl } from '../../shared/CategoryConstant';
import { CATEGORY_DATA_LOADED, ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY, CATEGORY_UPDATE_REQUESTED } from '../../shared/action-type';

export function getCategoriesAction() {
    return function (dispatch) {
        return getCommonData(baseUrl + categoryUrl)
            .then(json => {
                //console.log('data:', json.data);
                dispatch(generatePayload(CATEGORY_DATA_LOADED, json.data));
            })
    }
};

export function addCategoryAction(category) {
    return function (dispatch) {
        return commonOperation((baseUrl + categoryUrl), category, 'POST')
            .then(json => {
                //console.log('data:', json.message);
                getCommonData(baseUrl + categoryUrl)
                    .then(jsonData => dispatch(generatePayload(ADD_CATEGORY, { message: json.message, data: jsonData.data })))
                    ;
            })
    }
};

export function deleteCategory(catergory) {
    return function (dispatch) {
        return commonOperation((baseUrl + categoryUrl), catergory, 'DELETE')
            .then(json => {
                dispatch(generatePayload(DELETE_CATEGORY, { message: json.message, id: catergory.id }));
            });
    }

}

export function updateCategory(category) {
    return function (dispatch) {
        return commonOperation((baseUrl + categoryUrl), category, 'PUT')
            .then(json => {
                dispatch(generatePayload(UPDATE_CATEGORY, { message: json.message, category: category }));
            });
    }
}

export function categoryUpdateRequestred(category) {
    return generatePayload(CATEGORY_UPDATE_REQUESTED, { category: category })
}

function generatePayload(actionType, payload) {
    return { type: actionType, payload: payload };
}

function getCommonData(url) {
    return fetch(url)
        .then(response => response.json());
}

function commonOperation(url, data, method) {
    return fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => response.json());
}

