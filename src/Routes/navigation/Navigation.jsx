import { React } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/context";
import { CartDropdownContext } from "../../context/cartDropdownContext";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import CartIcon from "../../components/cartIcons/CartIcons";
import CartDropdown from "../../components/cartDropdown/CartDropdown";
import { signOutUser } from "../../utils/firebase-Utils/firebaseUtils";
import "./Navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartDropdownContext);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crown className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/Shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN-OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
