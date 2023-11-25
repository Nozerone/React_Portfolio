import React from 'react';
import { BookOpenText, Contact2Icon, FileTextIcon, LucideBriefcase} from 'lucide-react';
import { useState} from 'react';

const Header = ({page, setPage}) => {

 return (
   <>
     <header>
       {page === 'About me' && <h2><BookOpenText/>About me</h2>}
       {page === 'Contact' && <h2><Contact2Icon/>Contact</h2>}
       {page === 'Portfolio' && <h2><LucideBriefcase/>Portfolio</h2>}
       {page === 'Resume' && <h2><FileTextIcon/>Resume</h2>}
       <hr></hr>
     </header>
   </>
 );
};

export default Header;
