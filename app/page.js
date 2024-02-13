import image_of_me from '../public/me.jpg'
import AboutInfo from './components/AboutInfo'
import AboutInfoHeader from './components/AboutInfoHeader'
import ContactInfo from "./components/ContactInfo"
import ContactInfoHeader from "./components/ContactInfoHeader"

const Header = () => {
  return (
    <header>
      <img className="logo" src={image_of_me.src} />
      <h1>Jan Zagórski</h1>
    </header>
  )
}

const Left = () => {
  return (
    <nav>
      <Header />
      <ContactInfoHeader text='O mnie' />
      <ContactInfo text='Data urodzenia 25.06.2004' />
      <ContactInfo text='Data urodzenia 25.06.2004' />
      <ContactInfoHeader text='Kontakt' />
      <ContactInfo text='Telefon +48 730 355 879' />
      <ContactInfo text='Email jan.zagorski04@gmail.com' />
    </nav>
  )
}

const Right = () => {
  return (
    <section>
      <AboutInfoHeader text='O MNIE' />
      <AboutInfo text='Jestem programistą z 7 letnim doświadczeniem. Uczę się sam dzięki czem1u nowe wyzwania nie sprawiają mi trudności. Kieruję się czystością kodu i podziałem na funkcjonalność.' />
      
      <AboutInfoHeader text='ZALETY' />
      <AboutInfo text='- Szybka nauka nowych rzeczy' />
      <AboutInfo text='- Czystość kodu' />
      <AboutInfo text='- Szybkie rozwiązywanie problemów' />

      <AboutInfoHeader text='JĘZYKI PROGRAMOWANIA' />
      <AboutInfo text='- Python' />
      <AboutInfo text='- JavaScript (ReactJS, React Native)' />
      <AboutInfo text='- PHP i MySQL' />

      <AboutInfoHeader text='JĘZYKI OBCE' />
      <AboutInfo text='- angielski (B2)' />

      <AboutInfoHeader text='ZAINTERESOWANIA' />
      <AboutInfo text='- Rozwój osobisty' />
      <AboutInfo text='- Sztuczna inteligencja' />
      <AboutInfo text='- Programowanie' />

    </section>
  )
}

export default function Home() {
  return (
    <main className='main'>
      <Left />
      <Right />
    </main>
  )
}
