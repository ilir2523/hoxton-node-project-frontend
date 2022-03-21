import { Link } from "react-router-dom";


function Header() {

  return (
    <>
      <header className="header"    >
        <div className="header__logo" >
          Vjosa
        </div>
        <nav className="header__nav">
          <li>
            <input type="search" placeholder="Search product..." className="searach"
              onChange={(e) => {
                console.log(e.target.value)
              }}
            />
          </li>
        </nav>
        <nav className="header__icons">
          <ul>
            <li>
              <Link to='/signIn'> <img src="./src/images/account_circle_white_24dp.svg"></img> </Link>
            </li>
          </ul>
        </nav>
      </header>
      <nav className=''>
        <ul>
          <li>
            <Link to='/products' >Home</Link>
          </li>
          <li>
            <Link to='/categories' >Categories</Link>
          </li>
          <li>
            <Link to='/basket' >Basket</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
