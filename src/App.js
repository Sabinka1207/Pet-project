import { Hero, Cards, Header, Form } from "./views";
import { useEffect, useRef, useState } from "react";
import API from "./utils/API";
import "./css/main.min.css";

function App() {
  const [positions, setPositions] = useState(false);
  const [userList, setUserList] = useState([]);
  const [usersPage, setUsersPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const loadPositions = async () => {
    const res = await API.getPositions();
    setPositions(res);
  };

  const loadMore = () => {
    setUsersPage((prevCount) => prevCount + 1);
  };

  const resetPage = () => {
    setUsersPage(1);
  };

  const loadUsers = async (currentPage) => {
    const res = await API.getUsers(currentPage);
    const users = res.users;
    if (currentPage === 1) {
      setUserList(users);
    } else {
      const updatedList = [...userList, ...users];
      setUserList(updatedList);
    }
    setMaxPage(res.total_pages);
  };

  const cardRef = useRef();
  const handleBackClick = () => {
    cardRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    loadUsers(usersPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersPage]);

  useEffect(() => {
    loadPositions();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Cards
        userList={userList}
        btnHandler={loadMore}
        currentPage={usersPage}
        maxPage={maxPage}
        ref={cardRef}
      />
      <Form
        positions={positions}
        resetPage={resetPage}
        loadUsers={loadUsers}
        scroll={handleBackClick}
      />
    </div>
  );
}

export default App;
