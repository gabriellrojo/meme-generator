import styles from "./Form.module.css"
import memes from "../memes"

const Form = (props) => {
    const getImg = props.getImg
    const handleClick = (e) => {
        e.preventDefault()
        const num = Math.round(Math.random()*100)
        const image = memes.data.memes[num].url
        getImg(image)
    }

    return (
        <div className={styles.formcontainer}>
            <form>
                <div className={styles.inputcontainer}>
                    <input className={styles.input}type="text" placeholder="top text" />
                    <input className={styles.input} type="text" placeholder="bottom text"/>
                </div>
                <div>
                    <input onClick={handleClick} className={styles.btn} type="submit" value="Get a new meme image" />
                </div>
            </form>
        </div>
    )
}

export default Form