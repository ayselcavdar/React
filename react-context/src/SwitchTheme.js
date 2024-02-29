import { useContext } from "react";
import { useSite } from "./context";

export default function SwitchTheme() {
  const { theme, dispatch } = useSite();

  const switchTheme = () => {
    dispatch({
      type: "TOGGLE_THEME",
    });
  };

  return (
    <>
      Current theme = {theme} <br />
      <button onClick={switchTheme}>Change theme</button>
    </>
  );
}
