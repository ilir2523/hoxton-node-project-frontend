import { Link } from "react-router-dom";
import '../styles/header.css'
import SearchIcon from "@material-ui/icons/Search"
import DoneIcon from '@material-ui/icons/Done';

function Header() {

  return (
    <>
      <header className="header"    >
        <div className="header__logo" >
          <Link to='/products' >Drin</Link>
          <DoneIcon className="header__doneIcon" />

        </div>
        <div className="header__search">
          <input type="search" placeholder="Search product..." className="searach"
            onChange={(e) => {
              console.log(e.target.value)
            }}

          />
          <SearchIcon className="header__searchIcon" />
        </div>
        <nav className="header__icons">
          <ul>
            <li>
              <Link to='/signIn'> <img src="./src/images/account_circle_white_24dp.svg"></img> </Link>
            </li>
            <li>
              <Link to='/basket' >Basket</Link>
            </li>
            <li>
              <Link to='/categories' >Categories</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
