import React from "react"
import './style.css'
import useWindowSize from './window-size'

function Footer(){
  const { width } = useWindowSize();
  
return(
        <footer>
         {width >500 &&  <>
        <p>&copy; 2020, Meme Generator</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p>Created by: <a href="https://github.com/Ivan-mwaura/React-meme-generator">Ivan Mwaura</a></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p>Contact: <a href="mailto:joshu@joshu">Contact</a></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p>Last Updated: <a href="https://github.com/Ivan-mwaura/React-meme-generator">Updates</a></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p>Version: <a href="https://github.com/Ivan-mwaura/React-meme-generator">Version</a></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p>License: <a href="https://github.com/Ivan-mwaura/React-meme-generator">Licenses</a></p>
        </>
        }
    </footer>
         
    )
}
export default Footer;