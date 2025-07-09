/**
 * Save data to localStorage
 * @param {string} key
 * @param {*} value
 */
export const saveToStorage = (key, value) => {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
  } catch (err) {
    console.error(`Error saving ${key} to localStorage`, err);
  }
};

/**
 * Load data from localStorage
 * @param {string} key
 * @param {*} defaultValue
 * @returns {*}
 */
export const loadFromStorage = (key, defaultValue = null) => {
  try {
    const serialized = localStorage.getItem(key);
    return serialized ? JSON.parse(serialized) : defaultValue;
  } catch (err) {
    console.error(`Error loading ${key} from localStorage`, err);
    return defaultValue;
  }
};

/**
 * Remove item from localStorage
 * @param {string} key
 */
export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error(`Error removing ${key} from localStorage`, err);
  }
};
