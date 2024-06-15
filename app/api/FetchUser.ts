export const fetchUsers = async () => {
  const response = await fetch("https://randomuser.me/api/?results=40");
  const data = await response.json();
  return data.results;
};
