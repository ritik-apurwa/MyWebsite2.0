import Image from "next/image";
import React from "react";

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

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const birthdate = new Date(user.dob.date);
  const formattedBirthdate = birthdate.toLocaleDateString();

  return (
    <div className=" border rounded-lg p-4">
      <div className="flex items-center justify-center mb-4">
       <div className="flex-center size-20">
       <Image
          src={user.picture.medium}
          alt={`${user.name.first} ${user.name.last}`}
          width={800}
          height={700}
          className="rounded-full"
        />
       </div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold">
          {user.name.first} {user.name.last}
        </h3>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600 text-wrap overflow-hidden ">Birthday: {formattedBirthdate}</p>
        <p className="text-gray-600">
          Location: {user.location.city}, {user.location.country}
        </p>
      </div>
    </div>
  );
};

export default UserCard;