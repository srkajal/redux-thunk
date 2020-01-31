import { CATEGORY_DATA_LOADED, ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY, CATEGORY_UPDATE_REQUESTED } from '../../shared/action-type';

const initalState = { categories: [], message: '', category: {} };

function rootReducer(state = initalState, action) {
    if (action.type === CATEGORY_DATA_LOADED) {
        return Object.assign({}, state, { categories: action.payload });
    } else if (action.type === ADD_CATEGORY) {
        const responseData = action.payload;
        return Object.assign({}, state, { message: responseData.message, categories: responseData.data });
    } else if (action.type === DELETE_CATEGORY) {
        const responseData = action.payload;
        return Object.assign({}, state, { message: responseData.message, categories: state.categories.filter(el => el.id !== responseData.id) });
    } else if (action.type === UPDATE_CATEGORY) {
        const responseData = action.payload;
        let newCategories = [];

        for (const el of state.categories) {
            let nel = { name: el.name, id: el.id };

            if (el.id === responseData.category.id) {
                nel.name = responseData.category.name;
            }

            newCategories.push(nel);

        }

        //console.log("Updated data: ", tempData);

        return Object.assign({}, state, {
            message: responseData.message, categories: newCategories
        });
    } else if (action.type === CATEGORY_UPDATE_REQUESTED) {
        return Object.assign({}, state, { category: action.payload });
    }
    else {
        return state;
    }
}

export default rootReducer;