import React from "react";
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch
} from "react-router-dom";
import './Contact.css';

import man from '../../assets/images/man.png';
import woman from '../../assets/images/woman.png';
import anonym from '../../assets/images/anonym.png';

const contactImages = {
    'male': man,
    'female': woman,
    'anonym': anonym
};

export default function Contact({ firstName, lastName, phone, gender }) {

    const { url, path } = useRouteMatch();

    return (
        <>
            <NavLink className='contact-link contact' activeClassName='contact-link--active' exact to={`${url}/${firstName}${lastName}`}>
                <div className='contact-inner'>
                    <div className='contact-icon'>
                        <img src={contactImages[gender || 'anonym']} className='contact-icon__image' alt='gender' />
                    </div>
                    <div className='contact-info'>
                        <div className='contact-info__box contact-fullname'>
                            <span className='first-name'>{firstName}</span>
                            <span className='second-name'>{lastName}</span>
                        </div>
                        <div className='contact-info__box contact-phone'>{phone}</div>
                    </div>
                </div>
            </NavLink>

            <Switch>
                <Route exact path={`${path}/${firstName}${lastName}`}>
                    <ContactInfo firstName={firstName} lastName={lastName} phone={phone} gender={gender} />
                </Route>
            </Switch>
        </>
    );
}

const ContactInfo = ({ firstName, lastName, phone, gender }) => (
    <div className='contact-info--additional'>
        <p className="info-line">
            <span className="info-category">
                First name:
            </span>
            <span className="info-value">
                {firstName}
            </span>
        </p>
        <p className="info-line">
        <span className="info-category">
                Last name:
            </span>
            <span className="info-value">
                {lastName}
            </span>
        </p>
        <p className="info-line">
        <span className="info-category">
                Mobile phone:
            </span>
            <span className="info-value">
                {phone}
            </span>
        </p>
        <p className="info-line">
        <span className="info-category">
                Gender:
            </span>
            <span className="info-value">
                {gender || 'no gender'}
            </span>
        </p>
    </div>
);
