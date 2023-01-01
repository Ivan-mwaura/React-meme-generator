import React from "react"
import database from "../Components/memedata"

export default function Meme() {
   //const [memeImage, setMemeImage] = React.useState("")
    /**
     * Challenge: Save the random meme URL in state
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
    
const [allMemeImages] = React.useState(database)

const[meme,setMemeImage] = React.useState({
    topText : "",
    bottomText: "",
    randomImage : "http://i.imgflip.com/1bij.jpg"
})
function handleChange(event){
    const {name,value} = event.target
    setMemeImage({
        ...meme,
        [name]: value
    }
    )
}

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(previmage => {
            return ({
                ...previmage,
                randomImage:url
            })
        })
        
    }
    
    return (
        <main>
            <div className="form" >
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name = "topText"
                    onChange={handleChange}
                    value = {meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name = "bottomText"
                    onChange={handleChange}
                    value = {meme.bottomText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div >
            \
                <div className="meme">
                    <img src={meme.randomImage} alt={"Missing"} className="meme--image" />
                <h1 className="meme--text top"> {meme.topText}</h1>
                <h1 className="meme--text bottom">{meme.bottomText}</h1>
                </div>
           
        </main>
    )
}