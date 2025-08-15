export const saveToLocalStorage = (key: string, value: unknown) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string) => {
  const value = window.localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const removeFromLocalStorage = (key: string) => {
  window.localStorage.removeItem(key);
};
