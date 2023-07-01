import { useState, useEffect } from "react";
import styles from "./Cards.module.css";
import { Link } from "react-router-dom";

const Cards = () => {
  const [users, setUsers] = useState([]);
  const [usersFavorite, setUsersFavorite] = useState([]);

  const localStorageKey = "usuarioDestacado";

  async function fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const storedUsersFavorite = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    setUsersFavorite(storedUsersFavorite);
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(usersFavorite));
  }, [usersFavorite]);

  function handleClick(e, user) {
    e.preventDefault();
    const favoriteUsers = usersFavorite || [];
    if (favoriteUsers.some((favUser) => favUser.id === user.id)) {
      const updatedUsers = favoriteUsers.filter((favUser) => favUser.id !== user.id);
      setUsersFavorite(updatedUsers);
    } else {
      const updatedUsers = [...favoriteUsers, user];
      setUsersFavorite(updatedUsers);
    }
  }

  return (
    <div className={styles.cardContainer}>
      {users.map((user) => (
        <div key={user.id} className={styles.cardContainerItem}>
          <Link to={`/detalle/${user.id}`} className={styles.cardLink}>
            <div className={styles.card}>
              <h3>{user.name}</h3>
              <p>{user.username}</p>
              <button onClick={(e) => handleClick(e, user)}>
                {usersFavorite.some((favUser) => favUser.id === user.id)
                  ? "Quitar Destacado"
                  : "Destacar"}
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;


