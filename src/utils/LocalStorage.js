export const getKeysFromLocalStorage = () => {
  let localStorageKeys = JSON.parse(
    window.localStorage.getItem("favourite_activity_keys")
  );
  if (!localStorageKeys) {
    localStorageKeys = [];
  }
  return localStorageKeys;
};

export const saveKeysToLocalStorage = (keys) => {
  window.localStorage.removeItem("favourite_activity_keys");
  window.localStorage.setItem("favourite_activity_keys", JSON.stringify(keys));
};

export default { getKeysFromLocalStorage, saveKeysToLocalStorage };
