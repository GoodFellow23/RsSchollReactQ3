import axios from "axios";

export const LIST = {};

export function setList(text) {
    return {type: LIST, text}
}
