import styles from "./Img.module.css"

const Img = (props) => {

    const imagem = props.url
    return (
        <div className={styles.imgcontainer}>
            {imagem&& <img className={styles.img} src={imagem} alt="meme gerado" />}
        </div>
    )
}

export default Img