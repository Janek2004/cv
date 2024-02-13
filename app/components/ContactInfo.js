
const ContactInfo = ({ text, subtext }) => {

    return (
        <h4>
            {text}
            {subtext ? <><br />{subtext}</> : null}
        </h4>
    )

}

export default ContactInfo
