import { FC } from "react";
import { Children, Theme } from "../../@types";
import ThemeContext from "./context";

interface ThemeProviderProps {
  children: Children;
  themeValue: Theme;
  onChangeTheme: (value: Theme) => () => void;
}
const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  themeValue,
  onChangeTheme,
}) => {
  return (
    <ThemeContext.Provider value={{ themeValue, onChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
