import { Link } from "react-router-dom";
import '../styles/header.css'
import SearchIcon from "@material-ui/icons/Search"
import DoneIcon from '@material-ui/icons/Done';

function Header() {

  return (
    <>
      <header className="header"    >
        <div className="header__logo" >
          <div>
            <Link to='/products' >Drin</Link>
            <DoneIcon className="header__doneIcon" />
          </div>
          <div className="header_deliver">
            <p>Deliever to</p>
            <p> <b>Albania</b> </p>

          </div>

        </div>

        <div className="header__search">

          <div className="header__Categories">
            <Link to='/categories' >Categories</Link>
          </div>
          <div className="header__searchInput">
            <input type="search" placeholder="Search product..." className="header__searchInput"
              onChange={(e) => {
                console.log(e.target.value)
              }}

            />
            <SearchIcon className="header__searchIcon" />
          </div>
        </div>

        <div className="header__sideOptions">
          <nav className="header__icons">
            <ul>
              <li>
                <Link to='/signIn'>Accounts </Link>
              </li>
              <li>
                <Link to='/orders' >Orders</Link>
              </li>
              <li>
                <Link to='/cartItems' >Cart</Link>
              </li>
            </ul>
          </nav>
        </div>

      </header>
    </>
  );
}

export default Header;
