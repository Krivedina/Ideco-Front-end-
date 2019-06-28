import React, {Component} from 'react';
import '../App.css';
import Contact from "./contact";

export default class ModalWindow extends Component {
    render() {
        return (
            <div className={'modal-window__wrapper'}>
                <div className="modal-window">
                    <div className="modal-window__container">
                        <Contact contactInfo={this.props.getContactInfo}
                                 closeModalWindow={this.props.closeModalWindow}/>
                    </div>
                </div>
            </div>
        )
    }
}