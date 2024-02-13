import styles from './components.css'

const ContactInfoHeader = ({ text }) => {

    return (
        <div>
            <h2 className='contact-info-header-h2'>{text}</h2>
        </div>
    )
}

export default ContactInfoHeader
