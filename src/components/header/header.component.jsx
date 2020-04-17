import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import "./header.styles.scss";
import { selectCartHidden } from "./../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  handleLogout = async (event) => {
    event.preventDefault();

    try {
      await auth.signOut();
      alert("You're successfully logged out. See ya again soon!");
      this.props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { currentUser, hidden } = this.state;

    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <span className="header-title">
          {" "}
          The G Store
          <span className="yo-emoji" role="img" aria-label="peace-sign">
            ✌🏻
          </span>
        </span>
        <span className="navbar-text mr-3">
          <strong>
            {" "}
            {console.log(currentUser)}
            {currentUser}
            {currentUser ? `Welcome ${currentUser}` : ""}
          </strong>
        </span>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <Link className="option" onClick={this.handleLogout}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default withRouter(connect(mapStateToProps)(Header));
