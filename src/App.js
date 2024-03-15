import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import Flight from './components/Flight'
import Package from './components/Package'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/packages" component={Products} />
      <Route exact path="/hotelBooking" component={Cart} />
      <Route exact path="/flight" component={Flight} />
      <Route exact path="/packageCollection" component={Package} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
