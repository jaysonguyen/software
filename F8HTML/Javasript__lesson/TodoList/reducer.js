import storage from './ulti/storage.js'

const init = {
    todos: storage.get(), // ! Lấy dữ liệu 
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.isCompleted,
        completed: todo => todo.isCompleted,
    },
    editingIndex: null,
};


const actions = {
    add({ todos }, title) {
        if(title != '') {
            todos.push({title, isCompleted: false});
            storage.set(todos); // ! Lưu dữ liệu
        }
    },
    toggle({todos}, index) {
        const todo = todos[index];
        todo.isCompleted = !todo.isCompleted;
        storage.set(todos); // ! Lưu dữ liệu
    },
    toggleAll({todos}, isCompleted) {
        todos.forEach(todo => todo.isCompleted = isCompleted);
        storage.set(todos);
    },
    destroy({todos}, index) {
        todos.splice(index, 1);
        storage.set(todos);
    },
    switchFilter(state, filter) {
        state.filter = filter;
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos);
    },
    onEditing(state, index) {
        state.editingIndex = index;
    },
    saveEdit(state, title) {
        if(state.editingIndex != null) {
            if(title) {
                state.todos[state.editingIndex].title = title;
                storage.set(state.todos);
            } else {
                this.destroy(state, state.editingIndex)
            }
            state.editingIndex = null;
        }
    },
    cancelEdit(state) {
        state.editingIndex = null;
    }
}




export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
}

