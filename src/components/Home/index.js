import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Welcome to Gogaga Holidays Trip</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="dresses to be noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Welcome to the Exciting World of Gogaga Tourism, Where Every Journey
          is a Story Waiting to Be Told! Explore Spectacular Destinations,
          Immerse Yourself in Rich Cultures, and Indulge in Unmatched
          Hospitality. Whether You Seek Adventure, Relaxation, or Cultural
          Exploration, Let Gogaga Tourism Be Your Trusted Companion on Your
          Quest for Memorable Experiences. Join Us and Let Your Wanderlust Take
          Flight!
        </p>
        <button type="button" className="shop-now-button">
          Discover Now
        </button>
      </div>
      <img
        src="https://img.freepik.com/free-photo/beautiful-mountain-forest-landscape_23-2149063022.jpg?t=st=1710513639~exp=1710517239~hmac=71d1a97f2c358f2c1e12ee6ae99ca5a5e11316e356dcd9a35761f1aa1ef9abe5&w=360"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
