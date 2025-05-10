import { headers } from "next/headers";

export const getUsers = async (query = "") => {
  try {
    // In Json server
    // const res = await fetch("http://localhost:3000/users");

    // When move to vercel
    const host = headers().get("host");
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
    const baseUrl = `${protocol}://${host}`;

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
    // In Json server
    // const res = await fetch("http://localhost:3000/users/${id}");

    // When move to vercel
    const host = headers().get("host");
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
    const baseUrl = `${protocol}://${host}`;

    const res = await fetch(`${baseUrl}/api/users/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch user");

    return await res.json();
  } catch (error) {
    throw new Error("Error in fetching user info");
  }
};
