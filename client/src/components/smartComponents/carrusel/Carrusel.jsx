import { useState, useEffect } from "react";

// import stiles
import "./Carrusel.css"

const Carrusel = () => {

    const indexImg = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']

    const [selectedIndex , setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(indexImg[0])

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            selectNextImage(indexImg)
        }, 3500 );

        return () => clearInterval(interval)
    })

    const selectNextImage = (indexImg, next = true) => {
        setLoaded(false)
        setTimeout(() => {
            const condition = next ? selectedIndex < indexImg.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : indexImg.length - 1);
            setSelectedImage(indexImg[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 1400)
        
    }

    return(
        <div>
                <img 
                    className={`carrucelImg ${loaded ? "loaded" : ""}`} 
                    src={require(`../../../../public/img/carrusel_${selectedImage}.jpg`).default} 
                    alt="KraosFex" 
                    onLoad={() => setLoaded(true)}
                />
        </div>
    )
}

export default Carrusel;