import React from 'react'
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

  const handleAuthentication = () => {
    if (user ){
      auth.signOut();
    }
  }

  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__logo' src="images/logo.png" alt="" />
      </Link>

      <div className='header__search'>
        <input className='header__searchInput' type='text'/>
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionLineOne'>
              Hello boi
            </span>
            
            <span className='header__optionLineTwo'>
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        <div className='header__option'>
        <span className='header__optionLineOne'>
            Show
          </span>

          <span className='header__optionLineTwo'>
            Order
          </span>
        </div>

        <div className='header__option'>
          <span className='header__optionLineOne'>
            Your
          </span>

          <span className='header__optionLineTwo'>
            Mart
          </span>
        </div>

        <Link to='/checkout'>
        <div className='header__optionBasket' >
          <ShoppingBasket />
          <span className='header__optionLineTwo header__basketCount'> {basket.length}
          </span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Header