import { createContext, useState } from "react";

const ImageContext = createContext({
    imageUrl: '',
    setImageUrl: () => {}
})

export const ImageProvider = ({children}) => {
    const [imageUrl, setImageUrl] = useState('')
    const value = {imageUrl, setImageUrl}

    return <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
}