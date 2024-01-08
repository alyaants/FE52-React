import classNames from "classnames";
import { useThemeContext } from "../../context/theme";
import styles from "./header.module.scss";
import { Theme } from "../../@types";
import Button, { ButtonTypes } from "../button";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MenuIcon } from "../assets/icons/menuIcon";
import { RoutesList } from "../pages/router";
import { useMemo, useState } from "react";
import { CloseIcon } from "../assets/icons/closeIcon";
import ThemeSwitcher from "../themeSwitcher";
import UserName from "../username/username";
import { AccountIcon } from "../assets/icons/accountIcon";
import { SearchIcon } from "../assets/icons/searchIcon";

const Header = () => {
  const [isOpened, setOpened] = useState(false);

  const navigate = useNavigate();

  const navLinks = useMemo(() => [
    { path: RoutesList.Home, title: "Home" },
    { path: RoutesList.SignUp, title: "Sign Up" },
  ] , []);

  const handleMenuOpened = () => {
    setOpened(!isOpened);
  };
  const { themeValue } = useThemeContext();
  const onLoginButtonClick = () => {
    navigate(RoutesList.SignIn);
  };
  return (
    <div
      className={classNames(styles.container, {
        [styles.darkContainer]: themeValue === Theme.Dark,
      })}
    >
      <div className={styles.header}>
        <Button
          type={ButtonTypes.Primary}
          title={isOpened ? <CloseIcon /> : <MenuIcon />}
          onClick={handleMenuOpened}
          className={styles.burgerMenuButton}
        />
        <div className={styles.icons}>
          <Button
            type={ButtonTypes.Primary}
            title={<SearchIcon />}
            onClick={() => {}}
            className={styles.searchBtn}
          />

          <Button
            type={ButtonTypes.Primary}
            title={<AccountIcon />}
            onClick={onLoginButtonClick}
            className={styles.userBtn}
          />
        </div>
      </div>

      <div className={styles.infoContainer}>
        <Outlet />
        <div
          className={classNames(styles.footer, {
            [styles.darkFooter]: themeValue === Theme.Dark,
          })}
        >
          <div>©2022 Blogfolio</div>
          <div>All rights reserved</div>
        </div>
      </div>
      {isOpened && (
        <div
          className={classNames(styles.menuContainer, {
            [styles.darkMenuContainer]: themeValue === Theme.Dark,
          })}
        >
          <div>
            <UserName userName={"Alevtina Ants"} />
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={classNames(styles.navLinkBtn, {
                  [styles.darkNavLinkBtn]: themeValue === Theme.Dark,
                })}
              >
                {link.title}
              </NavLink>
            ))}
          </div>
          <div>
            <ThemeSwitcher />
            <Button
              type={ButtonTypes.Secondary}
              title={"Sign In"}
              onClick={onLoginButtonClick}
              className={classNames(styles.authBtn, {
                [styles.darkAuthBtn]: themeValue === Theme.Dark,
              })}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
