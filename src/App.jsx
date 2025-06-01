import { Element } from 'react-scroll';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Navbar/>
      <Element name='home'><Hero /></Element>
      <Element name='skills'><Skills/></Element>
      <Element name='contact'><Contact /></Element>
    </>
  )
}

export default App
