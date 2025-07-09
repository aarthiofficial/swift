const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetch all comments (500 records)
 * @returns {Promise<Array>}
 */
export const fetchComments = async () => {
  try {
    const response = await fetch(`${BASE_URL}/comments`);
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
};

/**
 * Fetch all users
 * @returns {Promise<Array>}
 */
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};
