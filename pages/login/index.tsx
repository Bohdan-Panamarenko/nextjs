import { useState, SyntheticEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/SignIn.module.css';

export default function Index() {

  const router = useRouter();
  useEffect(() => {
    const loggedUser = localStorage.getItem('username') ?? '';
    
    if (loggedUser != '') {
        router.push('/');
    }
  })

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const updateUser = (event: SyntheticEvent) => {
    setUser((event.target as HTMLInputElement).value);
  }

  const updatePassword = (event: SyntheticEvent) => {
    setPassword((event.target as HTMLInputElement).value)
  }

  const handleFormSubmit = () => {
    localStorage.setItem('username', user);
    localStorage.setItem('password', password);
  };

  return (
    <div className={styles.signin_container}>
      <h1 className={styles.signin_heading}>Sign in</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          <input className={styles.signin_input} name="user" value={user} onChange={updateUser} placeholder="Username" />
        </label>
        <label>
          <input className={styles.signin_input} type="password" value={password} onChange={updatePassword} placeholder="Password" />
        </label>
        <button type="submit" className={styles.signin_button}>Sign in</button>
      </form>
    </div>
  );

}