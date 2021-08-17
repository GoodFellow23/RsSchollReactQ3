import axios from "axios";

export const LIST = {};

export function addTodo(text) {
    return {type: LIST, text}
}
