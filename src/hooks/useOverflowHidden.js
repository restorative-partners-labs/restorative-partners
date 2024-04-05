import React, { useEffect } from 'react'

const useOverflowHidden = (state) => {
    useEffect(() => {
        const winBar = window.innerWidth - document.body.clientWidth;
        if (state) {
            if (winBar === winBar) {
                document.body.style.marginRight = `${winBar}px`;
            }
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto"
            document.body.style.marginRight = "0px"
        }



    }, [state])
}

export default useOverflowHidden