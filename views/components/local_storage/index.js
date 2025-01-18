export const setLocalStorage = (key, data) => {
  // if (key && data) {
    localStorage.setItem(key, data);
  // }
};

export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export const emptyLocalStorage = () => {
  localStorage.clear();
}; 

export const removeLocalStorage = (key) => {
  if (key) {
    localStorage.removeItem(key);
  }
}
export const userLoginToken = getLocalStorage('userLoginToken');
