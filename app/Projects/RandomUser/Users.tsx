"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../api/FetchUser";
import UserCard from "./UserCard";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    medium: string;
  };
  dob: {
    date: string;
  };
  location: {
    city: string;
    country: string;
  };
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers()
      .then((users) => {
        setUsers(users);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>Random Users</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 m:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {users.map((user) => (
            <UserCard key={user.email} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;