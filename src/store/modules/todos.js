import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => {
        return state.todos;
    }
};

const actions = {
    async fetchTodos({ commit }) {
        const resp = await axios.get("https://jsonplaceholder.typicode.com/todos");
        commit('setTodos', resp.data);
    },

    async addNewTodo({ commit }, title) {
        const resp = await axios.post("https://jsonplaceholder.typicode.com/todos", {
            title,
            completed: false
        });
        commit('newTodo', resp.data);
    },

    async deleteTodo({ commit }, todo) {
        await axios.delete("https://jsonplaceholder.typicode.com/todos/" + todo.id);
        commit('removeTodo', todo.id);
    },

    async filterTodo({ commit }, limit) {
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit.target.value}`);
        commit('setTodos', resp.data);
    }
};

const mutation = {
    setTodos: (state, todos) => {
        state.todos = todos;
    },

    newTodo: (state, todo) => {
        state.todos.unshift(todo);
    },

    removeTodo: (state, id) => {
        state.todos = state.todos.filter(todo => todo.id !== id);
    }

};

export default {
    state,
    getters,
    actions,
    mutations: mutation
};