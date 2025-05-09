export const getUsers = async (query = "") => {
  let response;
  try {
    if (!query) {
      response = await fetch("http://localhost:3000/users");
    } else {
      response = await fetch(`http://localhost:3000/users?name_like=${query}`);
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    throw new Error("Error in fetching users list");
  }
};

export const getUser = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    throw new Error("Error in fetching user info");
  }
};
