import "./App.css";
import { Theme } from "./@types";
import { ThemeProvider } from "./context/theme";
import Router from "./components/pages/router";
import { useDispatch, useSelector } from "react-redux";
import { setThemeValue, themeSelectors } from "./redux/reducers/themeSlice";

const App = () => {
  const dispatch = useDispatch();

  const themeValue = useSelector(themeSelectors.getThemeValue);
  const onChangeTheme = (value: Theme) => () => {
    dispatch(setThemeValue(value));
  };
  return (
    <ThemeProvider themeValue={themeValue} onChangeTheme={onChangeTheme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;



