import { useState, useEffect } from "react";
import axios from "axios";

function useFlip(initialFlipState = true) {
    const [isFlipped, setFlipped] = useState(initialFlipState);
    const flip = () => {
        setFlipped(isUp => !isUp);
    }
    return[isFlipped, flip];
}
function useAxios(keyInLS, baseUrl) {
    const [responses, setResponses] = uselocalStorage(keyInLS);
    const addResponseData = async (formatter = data => data, restOfUrl = "") => {
        const response = await axios.get(`${baseUrl}${restOfUrl}`);
        setResponses(data => [...data, formatter(response.data)]);
    }
    const clearResponses = () => setResponses([]);
    return [responses, addResponseData, clearResponses];
}
function uselocalStorage(key, initialValue = []) {
    if(localStorage.getItem(key)) {
        initialValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(initialValue);
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
    return [value, setValue];
}

export default uselocalStorage;

export { useFlip, useAxios, uselocalStorage };