import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function navigation() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setLoggined] = useState(false);

  useEffect(() => {
    setUsername(localStorage.getItem('username') ?? '');
    setLoggined(!(username === ""));
  });

  const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.reload();
  }

  function LoginLink(props: {isLoggedIn: boolean}): React.ReactElement {
    if (!props.isLoggedIn) {
      return (
        <Link href="/login">Sign in</Link>
      );
    }
    return (
      <div id="logout-container">
        <button onClick={logout}>Logut</button>
      </div>
    );
  }

  function PrivateLink(props: { path: string, text: string, isLoggedIn: boolean}): React.ReactElement | undefined {
    if (props.isLoggedIn) {
      return (
        <Link href={props.path}>{props.text}</Link>
      );
    }
  }

  return (
    <nav id="app-nav">
      {LoginLink({ isLoggedIn: isLoggedIn})}
      <Link href="/">Landing</Link>
      {PrivateLink({ path: "/forecast", text: "Forecast", isLoggedIn: isLoggedIn})}
    </nav>
  )
}