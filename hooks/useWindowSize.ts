import React, { useEffect } from 'react'

const useWindowSize = () => {
    const [windowSize, setWindowSize] = React.useState({
        width: window?.innerWidth || 0,
        height: window?.innerHeight || 0,
    });

    useEffect(()=>{
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
}

export default useWindowSize