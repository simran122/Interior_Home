import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import Theme from './components/Theme'
import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import Homepage from './components/Homepage';
import About from './components/About';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Services from './components/Services';
import Project from './components/Project';
import Blog from './components/Blog';
import Contact from './components/Contact';
import JohnSmith from './components/JohnSmith';
import Nattasha from './components/Nattasha'
import Nora from './components/Nora'

const responsiveTheme = responsiveFontSizes(Theme)
function App() {


  return (
    <>
      <ThemeProvider theme={responsiveTheme}>
        <CssBaseline />
        <Navbar />
        <Routes>



          <Route path='/' element={<Homepage />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Project' element={<Project />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/JohnSmith' element={<JohnSmith />} />
          <Route path='/Nattasha' element={<Nattasha />} />
          <Route path='/Nora' element={<Nora />} />



        </Routes>
        <Footer />
      </ThemeProvider>

    </>
  )
}


export default App
