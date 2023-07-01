import { useState } from 'react';
import styles from './Formulario.module.css';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [exito, setExito] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (nombre.length >= 6 && emailRegex.test(email)) {
      setError("");
      setExito(`Gracias ${nombre}, te contactaremos a ${email}`);
    } else {
      setError("Por favor, verifica que la información sea correcta");
    }
  };
  
  return (
    <>
    <div className={styles.mensaje}>
        {error ? <p className={styles.error}>{error}</p> : <p className={styles.exito}>{exito}</p>}
    </div>
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </div>
    </>
  );
};

export default Formulario;
