import { createStore } from 'redux';

const initialState = {
    user: null,
    resources: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // Define your action cases here
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
