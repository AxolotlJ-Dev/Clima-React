const Header = (props) => {
  const { navOpen, navIsAnimating, toggleNavHandler } = props;
  return (
    <header className="header">
      <div className="wrap">
        <button
          className={`nav-button${navIsAnimating ? " is-animating" : ""}`}
          type="button"
          aria-label="Toggle Navigation"
          onClick={(event) => toggleNavHandler(event)}
        >
          <span className={`label--nav-closed${!navOpen ? " active" : ""}`}>
            menu
          </span>
          <span className={`label--nav-open${navOpen ? " active" : ""}`}>
            cerrar
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
