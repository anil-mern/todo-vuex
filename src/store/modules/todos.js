// import axios from 'axios';

const state = {
    todos: [{
            id: 1,
            title: "one"
        },
        {
            id: 2,
            title: "two"
        }
    ]
};

const getters = {
    allTodos: (state) => {
        return state.todos;
    }
};

const actions = {};

const mutation = {};

export default {
    state,
    getters,
    actions,
    mutations: mutation
};