import Nav from "./components/Nav"
import Form from "./components/Form"
import Img from "./components/Img"
import { useState } from "react"

function App() {
  const [name, setName] = useState("Gabriel")
  const [url, setUrl] = useState()
  const getImg = (urlLink) => {
    setUrl(urlLink)
  }

return (
    <div>
      <Nav />
      <Form getImg={getImg}/>
      <Img url={url}/>
    </div>
  );
}

export default App;
