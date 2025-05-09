export const getUsers = async (query = "") => {
  let response;
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(
      `${baseUrl}/api/users${query ? `?name_like=${query}` : ""}`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch users");
    return await res.json();
  } catch (error) {
    throw new Error("Error in fetching users list");
  }
};

export const getUser = async (id) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/users/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch user");

    return await res.json();
  } catch (error) {
    throw new Error("Error in fetching user info");
  }
};
