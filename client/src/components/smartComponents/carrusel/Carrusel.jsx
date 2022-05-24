import { useState, useEffect } from "react";

const Carrusel = () => {

    const images = ['carrusel_1.jpg', 'carrusel_2.jpg','carrusel_3.jpg']

    const [selectedIndex , setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(images[0])

    const selectNextImage = (index, images, next = true) => {
        const condition = next ? selectedIndex > 0 : selectedIndex < images.length;
        const nextIndex = next ? (condition ? selectedIndex - 1 : images.length - 1) : ( condition ? selectedIndex + 1 : 0);
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
    }

    const previus = () => {
        selectNextImage(selectNextImage, images , false)
    }

    const next = () => {
        selectNextImage(selectNextImage, images)
    }

    return(
        <>
            <img src={require(`../../../../public/img/${selectedImage}`).default} alt="KraosFex" />
        </>
    )
}

export default Carrusel;