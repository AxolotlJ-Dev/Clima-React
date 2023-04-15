import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../style/Contact.css"

const ContactElement = (props) => {
    return (
            <div>
                <div className="LinkContact footer-social-links">
                    <div className=" text-center">
                        <a className='fa fa-facebook' href={props.link} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={props.icon} />
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default ContactElement