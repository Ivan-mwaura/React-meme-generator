import React from 'react'
import '../Components/style.css'

const Navbar = ()=>{
    return (
        <div className='nav--div'>
            <nav className='nav'>
                <span className='nav--image'> <img src={"/images/meme--logo.png"} className="nav--logo"alt={"Missing"}/></span>
                    <h1 className='nav--heading'>Meme Generator</h1>
                    <span className='nav--heading2'><p >React Course project-3</p></span>
            </nav>
        </div>
    )
}
export default Navbar;