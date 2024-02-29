import SwitchTheme from "./SwitchTheme";
import SwitchLanguage from "./SwitchLanguage";
import { useAuth } from "./context";

export default function Header() {
  const { user, dispatch } = useAuth();

  const login = () => {
    dispatch({
      type: "LOGIN",
      payload: {
        name: "ice",
        id: 1,
      },
    });
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <header>
      Header <br />
      {(user && <button onClick={logout}>Log Out</button>) || (
        <button onClick={login}>Log In</button>
      )}
      <hr />
      <SwitchTheme />
      <SwitchLanguage />
    </header>
  );
}
