import { Hero, Cards, Header, Form } from "./views";
import { useEffect, useState } from "react";
import API from "./utils/API";

function App() {
  const [positions, setPositions] = useState(false);
  const [users, setUsers] = useState(null);
  const [usersPage, setUsersPage] = useState(1);

  const loadPositions = async () => {
    const loadedPositions = [];
    const res = await API.getPositions();
    res.forEach((item) => {
      loadedPositions.push(item.name);
    });
    setPositions(loadedPositions);
  };

  const loadMore = () => {
    setUsersPage((prevCount) => prevCount + 1);
  };

  const resetPage = () => {
    setUsersPage(1);
  };

  const loadUsers = async (page) => {
    const res = await API.getUsers(page);
    setUsers({ ...users, res });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    loadPositions(usersPage);
  }, [usersPage]);

  return (
    <div>
      <Header />
      <Hero />
      <Cards userList={users} onClick={loadMore} />
      <Form positions={positions} />
    </div>
  );
}

export default App;
