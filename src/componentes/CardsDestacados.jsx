import { useState, useEffect } from "react";
import styles from "./Cards.module.css";

const CardsDestacados = () => {
  const [highlightedUsers, setHighlightedUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("usuarioDestacado")) || [];
    setHighlightedUsers(storedUsers);
  }, []);

  return (
    <div className={styles.cardContainer}>
      {highlightedUsers.length > 0 ? (
        highlightedUsers.map((user) => (
          <div key={user.id} className={styles.cardContainerItem}>
            <div className={styles.card}>
              <h3>{user.name}</h3>
              <p>{user.username}</p>
              <button disabled>Destacado</button>
            </div>
          </div>
        ))
      ) : (
        <p>No hay usuarios destacados.</p>
      )}
    </div>
  );
};

export default CardsDestacados;

















