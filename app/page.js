import Sidebar from './components/Sidebar'
import AboutMe from './components/AboutMe'

export default function Home() {
  return (
    <main className='main'>
      <Sidebar />
      <AboutMe />
    </main>
  )
}
