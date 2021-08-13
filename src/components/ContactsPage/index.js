import Contacts from './Contacts.jsx';

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
    id: '0'
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
    id: '1'
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    id: '2'
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
    id: '3'
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
    id: '4'
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
    id: '5'
}];


const ContactsPage = () => {
    return (
        <section className='section'>
            <div className='container'>
                <h2 className='section__title'>
                    Contacts
                </h2>
                <div className='content'>
                    <Contacts contacts={contacts} />
                </div>
            </div>
        </section>
    )
};

export default ContactsPage;