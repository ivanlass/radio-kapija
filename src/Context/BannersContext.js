import React, { useState, createContext } from 'react'


export const BannersContext = createContext()


export const BannersProvider = (props) => {
    const [banners, setBanners] = useState("")

    return (
        <BannersContext.Provider value={[banners, setBanners]}>
            {props.children}
        </BannersContext.Provider>
    )
}