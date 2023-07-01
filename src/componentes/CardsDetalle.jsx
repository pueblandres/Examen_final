import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './CardsDetalle.module.css';

const CardsDetalle = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Realizar la solicitud Fetch utilizando el ID del usuario
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.log(error));
  }, [id]);

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.cardDetalle}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Teléfono: {user.phone}</p>
      <p>Sitio web: {user.website}</p>
    </div>
  );
}

export default CardsDetalle;
