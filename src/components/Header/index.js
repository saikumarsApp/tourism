import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <h1 className="travel-heading">
        <span className="t-style">T</span>ravel
      </h1>
      <ul className="nav-menu">
        <li className="link-item-styling">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/packages" className="nav-link">
            Packages
          </Link>
        </li>
        <li>
          <Link to="/flight" className="nav-link">
            Flight Booking
          </Link>
        </li>
        <li>
          <Link to="/hotelBooking" className="nav-link">
            Hotel Booking
          </Link>
        </li>
        <li>
          <Link to="/packageCollection" className="nav-link">
            Package Collections
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
