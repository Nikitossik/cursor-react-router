import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import Homepage from "./components/HomePage";
import PostsPage from "./components/PostsPage";
import PhotosPage from './components/PhotosPage';
import ContactsPage from './components/ContactsPage';

import './App.css';

export default function App() {
    return (
        <div className='wrapper'>
            <Router>
                <nav className='menu'>
                    <div className='menu-inner'>
                        <ul className='menu-list'>
                            <li className='menu-list__item'>
                                <NavLink activeClassName='menu__link--active' className='menu__link' exact to='/cursor-react-router/'
                                >Home</NavLink>
                            </li>
                            <li className='menu-list__item'>
                                <NavLink activeClassName='menu__link--active' className='menu__link' to='/cursor-react-router/posts'
                                >Posts</NavLink>
                            </li>
                            <li className='menu-list__item'>
                                <NavLink activeClassName='menu__link--active' className='menu__link' to='/cursor-react-router/photos'>Photos</NavLink>
                            </li>
                            <li className='menu-list__item'>
                                <NavLink activeClassName='menu__link--active' className='menu__link' to='/cursor-react-router/contacts'>Contacts</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Switch>
                    <Route exact path='/cursor-react-router/'>
                        <Homepage />
                    </Route>
                    <Route path='/cursor-react-router/posts'>
                        <PostsPage />
                    </Route>
                    <Route path='/cursor-react-router/photos'>
                        <PhotosPage />
                    </Route>
                    <Route path='/cursor-react-router/contacts'>
                        <ContactsPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}






