import { useSite } from "./context";

export default function SwitchTheme() {
  const { language, dispatch } = useSite();

  const SwitchLanguage = () => {
    dispatch({
      type: "TOGGLE_LANGUAGE",
    });
  };

  return (
    <>
      Current language = {language} <br />
      <button onClick={SwitchLanguage}>Change language</button>
    </>
  );
}
