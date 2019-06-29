import React, {Component} from 'react';
import '../App.css';
import ModalWindow from "./modalWindow";
import ContactHeader from "./contactHeader";


export default class MainPage extends Component {
    state = {
        isOpen: false,
        contactInfo: {},
        deleteList: [],
        contactIndex: 0
    };

    openModalWindow = () => {
        this.setState({isOpen: true});
    };

    closeModalWindow = () => {
        this.setState({isOpen: false});
    };

    addContactInfo = (newContact) => {
        this.closeModalWindow();
        const currentState = this.state.contactInfo;
        let currentIndex = this.state.contactIndex;
        currentState[currentIndex] = newContact;
        currentIndex++;
        this.setState({contactInfo: currentState});
        this.setState({contactIndex: currentIndex});
    };

    deleteContact = () => {
        const currentState = this.state.contactInfo;
        let deleteList = this.state.deleteList;
        deleteList.map((index) => delete currentState[index]);
        this.setState({contactInfo: currentState});
        this.setState({deleteList: []});
    };

    onDeleteChange = (event, index) => {
        if (event.target.checked) {
            const deleteList = this.state.deleteList;
            if (!deleteList.includes(index)) {
                deleteList.push(index);
                this.setState({deleteList: deleteList});
            }
        } else {
            const deleteList = this.state.deleteList;
            deleteList.splice(deleteList.indexOf(index), 1);
            this.setState({deleteList: deleteList});
        }
    };

    renderContact = () => {
        return Object.entries(this.state.contactInfo).map((entries) => {
            const [index, contact] = entries;
            return (
                <div key={index} className={'contact-table__cell'}>
                    <div className={'id-wrapper element-wrapper'}>{contact.id}</div>
                    <div className={'fullName-wrapper element-wrapper'}>{contact.fullName}</div>
                    <div className={'email-wrapper element-wrapper'}>{contact.email}</div>
                    <div className={'phone-wrapper element-wrapper'}>{contact.phone}</div>
                    <div className={'address-wrapper element-wrapper'}>{contact.address}</div>
                    <input className={'checkbox__delete'} type="checkBox"
                           onChange={(event) => this.onDeleteChange(event, index)}/>
                </div>
            );
        })
    };

    render() {
        return (
            <div className={'contact-table__wrapper'}>
                <div className={'contact-table'}>
                    <ContactHeader/>
                    {this.renderContact()}
                </div>
                <div className={'button__add-contact-table'}>
                    <button onClick={this.openModalWindow}>
                        Добавить запись
                    </button>
                    <button onClick={this.deleteContact}>
                        Удалить
                    </button>
                </div>
                {this.state.isOpen && <ModalWindow closeModalWindow={this.closeModalWindow}
                                                   getContactInfo={this.addContactInfo}/>}
            </div>
        )
    }
}
