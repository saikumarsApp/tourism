import Header from '../Header'
import './index.css'

const Flight = () => (
  <>
    <Header />
    <div className="cart-container">
      <div>
        <h1 className="booking-heading">BOOK NOW</h1>
        <label className="label-text" htmlFor="name">
          Name
        </label>
        <input className="input-container" placeholder="Enter Name" />
        <label className="label-text" htmlFor="name">
          Email Address
        </label>
        <input className="input-container" placeholder="Email Address" />
        <label className="label-text" htmlFor="name">
          Phone Number
        </label>
        <input className="input-container" placeholder="Phone Number" />
        <label className="label-text" htmlFor="name">
          Booking Data
        </label>
        <input className="input-container" placeholder="dd/mm/yy" />
        <button className="button-styling" type="button">
          Book Now
        </button>
      </div>
    </div>
  </>
)

export default Flight
