import SearchForm from "../../components/SearchForm";
import UsersList from "../../components/UsersList";
import { getUsers } from "../../lib/users";

export default async function Home({ searchParams }) {
  const query = searchParams?.q || "";
  const users = await getUsers(query);

  return (
    <div className="text-white mt-10">
      <div className="flex justify-center p-4 m-4">
        <SearchForm initialQuery={query} />
      </div>
      <UsersList users={users} />
    </div>
  );
}
