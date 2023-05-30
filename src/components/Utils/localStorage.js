const loadLocalStorage = key => {
    const successiveState = localStorage.getItem(key);
    return successiveState === null ? undefined : JSON.parse(successiveState);  
};

const saveLocalStorage = (key, value) => {
    const successiveState = JSON.stringify(value);
    localStorage.setItem(key, successiveState);
};

const removeLocalStorage = key => {
    localStorage.removeItem(key);
};

export { loadLocalStorage, saveLocalStorage, removeLocalStorage };