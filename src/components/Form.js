import styles from "./Form.module.css"
import memes from "../memes"
import { useState } from "react"
import { useEffect } from "react"

const Form = (props) => {
    const [memeAPI, setMemeAPI] = useState([])
    const [meme, setMeme] = useState({
        top: "",
        bottom: "",
        img: "",
    })

    useEffect(async () => {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setMemeAPI(data.data.memes)
        //.then(res => {
            //const data = res.json()
            //return data
        //})
        //.then(data => setMemeAPI(data.data.memes))
    },[])

    const handleChange = (e) => {
        setMeme(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }
    
    const handleClick = (e) => {
        
        e.preventDefault()
        const num = Math.round(Math.random()*100)
        const image = memeAPI[num].url
        setMeme(prev => {
            return {
                ...prev,
                img: image
            }
        })

    }

    return (
        <div className={styles.formcontainer}>
            <form>
                <div className={styles.inputcontainer}>
                    <input value={meme.top} className={styles.input} type="text" placeholder="top text" name="top" onChange={(e) => handleChange(e)}/>
                    <input value={meme.bottom} className={styles.input} type="text" placeholder="bottom text" name="bottom" onChange={handleChange}/>
                </div>
                <div>
                    <input onClick={handleClick} className={styles.btn} type="submit" value="Get a new meme image" />
                </div>
            </form>
            <div className={styles.imgcontainer}>
                <div className={styles.frasecontainer}>
                    <p className={styles.texttop}>{meme.top}</p>
                    <p className={styles.textbottom}>{meme.bottom}</p>     
                </div>
                <img className={styles.img} src={meme.img} alt="" srcset="" />
            </div>
        </div>
    )
}

export default Form