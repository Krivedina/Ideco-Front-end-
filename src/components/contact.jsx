import React, {Component} from 'react';
import '../App.css';


export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            fullName: '',
            email: '',
            phone: '',
            address: ''
        };
    }

    closeWindow = () => {
        this.props.closeModalWindow();
    };

    addContact = (event) => {
        event.preventDefault();
        this.props.contactInfo(this.state);
    };

    onIdChange = (event) => {
        this.setState({id: event.target.value});
    };

    onFullNameChange = (event) => {
        this.setState({fullName: event.target.value});
    };

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    };

    onPhoneChange = (event) => {
        this.setState({phone: event.target.value});
    };

    onAddressChange = (event) => {
        this.setState({address: event.target.value});
    };

    render() {
        return (
            <form className={'form__block'} onSubmit={this.addContact}>
                <div>
                    <input autoFocus={true} type="text" className={'id-wrapper'}
                           placeholder={'Id'}
                           required pattern="[0-9]+" name={'id'}
                           onChange={this.onIdChange}/>
                    <input type="text" className={'fullName-wrapper'}
                           required placeholder={'Фамилия Имя Отчество'}
                           pattern="([А-Яа-яa-zA-Z-]+\s?)+" name={'fullName'}
                           onChange={this.onFullNameChange}/>
                    <input type="text" className={'email-wrapper'}
                           required placeholder={'E-mail'}
                           pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+" name={'email'}
                           onChange={this.onEmailChange}/>
                    <input type="text" className={'phone-wrapper'}
                           required placeholder={'Телефон'}
                           pattern="\+?[0-9]{11}|[0-9]{7}" name={'phone'}
                           onChange={this.onPhoneChange}/>
                    <input type="text" className={'address-wrapper'}
                           required placeholder={'Улица дом квартира'}
                           pattern="([А-Яа-яa-zA-Z0-9-]+\s?)+" name={'address'}
                           onChange={this.onAddressChange}/>
                </div>
                <div className={'buttons__wrapper'}>
                    <div className={'button__add-contact'}>
                        <button type={'submit'}>
                            Добавить
                        </button>
                    </div>
                    <div className={'button__cancel'}>
                        <button type={'button'} onClick={this.closeWindow} className={'buttonCancel'}>
                            Отмена
                        </button>
                    </div>
                </div>

            </form>
        )

    }
}
