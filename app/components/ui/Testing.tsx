// app/users/page.tsx
import React from "react";

interface User {
  id: string;
  title: string;
  description: string;
  owner_id: string;
}
const UsersPage = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/v1/items/", { cache: "no-store" });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch users: ${res.statusText}`);
    }

    const { data }: { data: User[] } = await res.json(); // Update: Access `data` instead of `users`

    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Items List</h1>
        <ul className="space-y-2">
          {data.map((user) => ( // Use `data` here instead of `users`
            <li
              key={user.id}
              className="border p-4 rounded shadow-md hover:bg-gray-100"
            >
              <h2 className="text-xl font-semibold">
                {user.title} - {user.description}
              </h2>
              <p className="text-gray-700">{user.owner_id}</p>
            </li>
          ))}
        </ul>
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error);

    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Items List</h1>
        <p className="text-red-500">Failed to load data. Please try again later.</p>
      </main>
    );
  }
};

export default UsersPage;
