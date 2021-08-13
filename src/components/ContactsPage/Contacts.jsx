import React from "react";
import Contact from './Contact.jsx';
import FilterForm from "./FilterForm.jsx";

import './Contacts.css';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            male: true,
            female: true,
            noGender: true
        }
    }

    setFilterInfo = (input) => {
        const {type, value, checked} = input;
        const stateProp = type === 'text' ? 'filterText' : value;
        const stateValue = type === 'text' ? value : checked;
        
        this.setState({
            [stateProp]: stateValue
        });
    }

    filterContacts = () => {
        const contacts = this.props.contacts;
        const {male, female, noGender} = this.state;
        const filterText = this.state.filterText.toLowerCase();
        
        return contacts
        .filter(contact => {
            return (
                    (contact.gender === 'male' && male) ||
                    (contact.gender === 'female' && female) ||
                    (!contact.gender && noGender)
                );
            })
        .filter(contact => {
            const fullName = (contact.firstName + contact.lastName).toLowerCase();
            const phone = contact.phone;
            return fullName.includes(filterText) || phone.includes(filterText);
        });
    }

    render() {
        const resultContacts = this.filterContacts();
        
        const message = (
            <div className='message'>
                <h2 className='message__title'>
                    Нікого не знайдено!
                </h2>
            </div>);

        return (
            <div className='contacts-box'>
                <h2 className='contacts-title'>Контакти</h2>
                <FilterForm 
                    setFilterInfo={this.setFilterInfo} 
                    searchText={this.state.searchText}
                    male={this.state.male}
                    female={this.state.female}
                    noGender={this.state.noGender}
                />
                <div className='contacts-list'>
                    { 
                        resultContacts.length ? 
                        resultContacts.map(contact => <Contact {...contact} key={contact.id}/>) : message 
                    }
                </div>
            </div>
        );
    }
}

export default Contacts;