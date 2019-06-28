import React, {Component} from 'react';
import '../App.css';


export default class ContactHeader extends Component {
    render() {
        return(
            <div className={'contact-table__header'}>
                <div className={'id-wrapper element-wrapper'}>Id</div>
                <div className={'fullName-wrapper element-wrapper'}>ФИО</div>
                <div className={'email-wrapper element-wrapper'}>Email</div>
                <div className={'phone-wrapper element-wrapper'}>Телефон</div>
                <div className={'address-wrapper element-wrapper'}>Адрес</div>
            </div>
        )
    }
}
