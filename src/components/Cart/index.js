import Header from '../Header'
import './index.css'

const Cart = () => (
  <>
    <Header />
    <div className="cart-container">
      <div>
        <h1 className="booking-heading">BOOK NOW</h1>
        <label className="label-text" htmlFor="name">
          Where Go
        </label>
        <input className="input-container" placeholder="search place" />
        <label className="label-text" htmlFor="name">
          How Many
        </label>
        <input className="input-container" placeholder="members" />
        <label className="label-text" htmlFor="name">
          Arrivals
        </label>
        <input className="input-container" placeholder="dd/mm/yy" />
        <label className="label-text" htmlFor="name">
          Leaving
        </label>
        <input className="input-container" placeholder="dd/mm/yy" />
        <button className="button-styling" type="button">
          Book Now
        </button>
      </div>
    </div>
  </>
)

export default Cart
