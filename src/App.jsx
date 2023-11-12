import { useState } from 'react'
import Aboutme from './pages/Aboutme';
import Resume from './pages/Resume';
import Portfolio from './pages/portfolio';
import Contact from './pages/Contact';
import Navbar from './components/navbar';


function App() {
const [ 
    page,setPage
] = useState('About me');
function handleChange(){
    if(page == 'About me'){
        return<Aboutme />
    } else if(page === 'Resume'){
    
            return<Resume />
    
    } else if(page == 'Portfolio'){
        return<Portfolio />
    } else{
        return<Contact />
    }
} 
  return (
    <>
    <Navbar setPage={setPage}/>
    { handleChange() }
    </>
  )
}

export default App
