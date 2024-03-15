import Header from '../Header'

import './index.css'

const Package = () => (
  <>
    <Header />
    <div className="products-container">
      <h1 className="packages-heading">Packages Collections</h1>
      <div className="package-container">
        <div className="container">
          <img
            className="image-styling"
            alt="pic"
            src="https://img.freepik.com/premium-photo/taj-mahal-hotel_78361-4512.jpg?w=996"
          />
          <p className="city-name">Mumbai</p>
          <p className="place-name">
            The Taj Mahal Palace Hotel is an iconic luxury hotel in Mumbai.
          </p>
          <button className="button-styling" type="button">
            Book Now
          </button>
        </div>
        <div className="container">
          <img
            className="image-styling"
            alt="pic"
            src="https://img.freepik.com/free-photo/mesmerizing-shot-famous-historic-taj-mahal-agra-india_181624-16028.jpg?t=st=1710516980~exp=1710520580~hmac=295fa7bbfb56dd752b2cfe35b98acdd78d49cb96b16135abaadfb3ed8473fa69&w=996"
          />
          <p className="city-name">Agra</p>
          <p className="place-name">
            The Taj Mahal is a world-renowned monument located in Agra, India.
          </p>
          <button className="button-styling" type="button">
            Book Now
          </button>
        </div>
        <div className="container">
          <img
            className="image-styling"
            alt="pic"
            src="https://img.freepik.com/premium-photo/view-red-fort-lahori-gate-sunny-summer-day-new-delhi-india_117930-1911.jpg?w=1060"
          />
          <p className="city-name">Delhi</p>
          <p className="place-name">
            The Red Fort, also known as Lal Qila, is a historic fort located in
            the heart of Old Delhi, India.
          </p>
          <button className="button-styling" type="button">
            Book Now
          </button>
        </div>
        <div className="container">
          <img
            className="image-styling"
            alt="pic"
            src="https://img.freepik.com/premium-photo/famous-india-gate-landmark-delhi-india_400112-875.jpg?w=996"
          />
          <p className="city-name">Delhi</p>
          <p className="place-name">
            The India Gate is a prominent war memorial located in the heart of
            New Delhi, India.
          </p>
          <button className="button-styling" type="button">
            Book Now
          </button>
        </div>
      </div>
    </div>
  </>
)

export default Package
