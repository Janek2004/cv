import image_of_me from '../../public/me.jpg'
import ContactInfo from "./ContactInfo"
import ContactInfoHeader from "./ContactInfoHeader"

const Header = () => {
    return (
        <header>
            <img className="logo" src={image_of_me.src} />
            <h1>Jan Zagórski</h1>
        </header>
    )
}

const Sidebar = () => {
    return (
        <nav>
            <Header />
            <ContactInfoHeader text='O mnie' />
            <ContactInfo text='Data urodzenia' subtext={'25.06.2004'} />
            <ContactInfoHeader text='Kontakt' />
            <ContactInfo text='Telefon' subtext='+48 730 355 879' />
            <ContactInfo text='Email' subtext='jan.zagorski04@gmail.com' />
            <ContactInfo text='Github' subtext='Janek2004' />
        </nav>
    )
}

export default Sidebar