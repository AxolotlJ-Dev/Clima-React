import React from "react";

import NavigationMenu from "./NavigationMenu";
import Header from "./Header";

import "../style/Menu.css";

class NavH extends React.Component {
  state = {
    navOpen: false,
    navIsAnimating: false,
  };

  toggleNav = (event) => {
    event.preventDefault();
    const { navOpen } = this.state;
    if (event) event.preventDefault();
    this.setState({
      navIsAnimating: true,
    });
    if (navOpen) document.body.classList.remove("nav-open");
    if (!navOpen) document.body.classList.add("nav-open");
    setTimeout(() => {
      this.setState({
        navIsAnimating: false,
        navOpen: !navOpen,
      });
    }, 500);
  };

  openNav = (event) => {
    if (event) event.preventDefault();
    document.body.classList.add("nav-open");
    this.setState({
      navOpen: true,
    });
  };

  closeNav = () => {
    document.body.classList.remove("nav-open");
    this.setState({
      navOpen: false,
    });
  };

  render() {
    const { navOpen, navIsAnimating } = this.state;

    return (
      <div className="layout">
        <Header
          navOpen={navOpen}
          toggleNavHandler={(event) => this.toggleNav(event)}
          navIsAnimating={navIsAnimating}
        />

        <NavigationMenu
          navOpen={navOpen}
          navIsAnimating={navIsAnimating}
          closeNav={(event) => this.closeNav(event)}
          toggleNavHandler={(event) => this.toggleNav(event)}
        />
      </div>
    );
  }
}

export default NavH;
