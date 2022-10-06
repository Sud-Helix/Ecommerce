import { React } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/context";
import { CartDropdownContext } from "../../context/cartDropdownContext";
import { Outlet } from "react-router";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import CartIcon from "../../components/cartIcons/CartIcons";
import CartDropdown from "../../components/cartDropdown/CartDropdown";
import { signOutUser } from "../../utils/firebase-Utils/firebaseUtils";
import "./NavigationStyle.jsx";
import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLink,
} from "./NavigationStyle.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartDropdownContext);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Crown className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/Shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN-OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN-IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
