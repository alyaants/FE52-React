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

{
  /* <PostCard
        size={PostCardSize.Large}
        id={0}
        image={
          "https://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg"
        }
        text={
          "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight."
        }
        date={"April 20, 2021"}
        title={
          "Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
        }
      /> */
}


