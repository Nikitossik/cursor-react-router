import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Homepage from "../HomePage";
import PostsPage from "../PostsPage";
import PhotosPage from '../PhotosPage';
import ContactsPage from '../ContactsPage';

import './style.css';

export default function App() {
  return (
    <div className='wrapper'>
    <Router>
        <nav className='menu'>
          <div className='menu-inner'>
          <ul className='menu-list'>
            <li className='menu-list__item'>
              <NavLink activeClassName='menu__link--active' className='menu__link' exact to={"/cursor-react-router"}>Home</NavLink>
            </li>
            <li className='menu-list__item'>
              <NavLink activeClassName='menu__link--active' className='menu__link' to={"/posts"}>Posts</NavLink>
            </li>
            <li className='menu-list__item'>
              <NavLink activeClassName='menu__link--active' className='menu__link' to={"/photos"}>Photos</NavLink>
            </li>
            <li className='menu-list__item'>
              <NavLink activeClassName='menu__link--active' className='menu__link' to={"/contacts"}>Contacts</NavLink>
            </li>
          </ul>
          </div>
        </nav>

        <Switch>
        <Route exact path={"/cursor-react-router"}>
          <Homepage/>
        </Route>
          <Route path={"/posts"}>
            <PostsPage />
          </Route>
          <Route path={"/photos"}>
            <PhotosPage />
          </Route>
          <Route path={"/contacts"}>
            <ContactsPage />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}






