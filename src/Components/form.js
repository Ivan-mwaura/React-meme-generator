import React from "react"


export default function Meme() {
   //const [memeImage, setMemeImage] = React.useState("")
    /**
     * Challenge: Save the random meme URL in state
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
    
const [allMemeImages,setAllMemeImages] = React.useState([])

React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            setAllMemeImages(response.data.memes)
        })
}, [])

const[meme,setMemeImage] = React.useState( () => JSON.parse(localStorage.getItem("meme")) || {
    topText : "",
    bottomText: "",
    leftText:"",
    rightText:"",
    randomImage : {allMemeImages}
})


React.useEffect(() =>{
    localStorage.setItem("meme",JSON.stringify(meme))
},[meme])

function handleChange(event){
    const {name,value} = event.target
    setMemeImage({
        ...meme,
        [name]: value
    }
    )
}

    function getMemeImage() {
        const memesArray = allMemeImages
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
                <input
                    type = "text"
                    placeholder="Left text"
                    className="form--input"
                    name = "leftText"
                    onChange={handleChange}
                    value = {meme.leftText}
                />
                 <input
                    type = "text"
                    placeholder="right text"
                    className="form--input"
                    name = "rightText"
                    onChange={handleChange}
                    value = {meme.rightText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <section className="meme-container">
                <div className="meme">
                    <img src={meme.randomImage} alt={"Missing"} className="meme--image" />
                    <h1 className="meme--text top"> {meme.topText}</h1>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                    <h3 className="meme--text left">{meme.leftText}</h3>
                    <h4 className="meme--text right"> {meme.rightText}</h4>
                </div>
            </section>
           
        </main>
    )
}