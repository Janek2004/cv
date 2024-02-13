import AboutInfo from './AboutInfo'
import AboutInfoHeader from './AboutInfoHeader'
import Divider from './Divider'

const AboutMe = () => {
    return (
        <section>
            <AboutInfoHeader text='O MNIE' />
            <AboutInfo text="Programowaniem zajmuję się od siedmiu lat. Dotychczas tworzyłem aplikacje mobilne za pomocą React Native w połączeniu z Firebase (autoryzacja użytkowników, bazy danych, przesyłanie plików, powiadomienia push), oraz nodeJS wraz z Pythonem jako backend'u. Lubię wyzwania i szybko się uczę. Nauka nowych rzeczy sprawia mi radość i zawsze staram się pisać zrozumiały i czysty kod." />

            <AboutInfoHeader text='ZALETY' />
            <AboutInfo text='- Sprawność w nauce nowych rzeczy' />
            <AboutInfo text='- Czysty kod' />
            <AboutInfo text='- Szybkie rozwiązywanie problemów' />

            <AboutInfoHeader text='JĘZYKI PROGRAMOWANIA' />
            <AboutInfo text='- Python' starsLevel={4} />
            <AboutInfo text='- JavaScript (ReactJS, React Native)' starsLevel={4} />
            <AboutInfo text='- HTML i CSS (Bootstrap)' starsLevel={3} />
            <AboutInfo text='- PHP i MySQL' starsLevel={2} />

            <AboutInfoHeader text='JĘZYKI OBCE' />
            <AboutInfo text='- angielski średnio-zaawansowany (B2)' />

            <AboutInfoHeader text='SZKOŁA I CERTYFIKATY' />
            <AboutInfo text='- W bieżącym roku ukończę technikum informatyczne' />
            <AboutInfo text='- INF.02. (systemy i sieci komputerowe) - 94%' />
            <AboutInfo text='- INF.03. - solidnie zdany, oczekuję na dokument' />

            <AboutInfoHeader text='ZAINTERESOWANIA' />
            <AboutInfo text='- Rozwój osobisty' />
            <AboutInfo text='- Sztuczna inteligencja' />
            <AboutInfo text='- Programowanie' />
        </section>

    )
}

export default AboutMe