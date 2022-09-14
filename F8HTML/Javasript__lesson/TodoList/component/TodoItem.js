import html from "../core.js";
import {connect} from "../store.js"

function TodoItem({ todo, index, editingIndex }) {
    return html`
            <li class="${todo.isCompleted && 'completed'} ${editingIndex === index && 'editing'}">
                <div class="view">
                    <input 
                    class="toggle" 
                    type="checkbox" 
                     ${todo.isCompleted && 'checked'}
                    onchange="dispatch('toggle', ${index})" 
                    >
                    <label ondblclick="dispatch('onEditing', ${index})">${todo.title}</label>
                    <button class="destroy" onclick="dispatch('destroy', ${index})"></button>
                </div>
                <input 
                class="edit" 
                value="${todo.title}"
                onkeyup="event.keyCode === 13 && dispatch('saveEdit', this.value.trim()) || event.keyCode === 27 && dispatch('cancelEdit')"
                onblur="dispatch('saveEdit', this.value.trim())"
                >
            </li>
    `
}


export default connect()(TodoItem)


