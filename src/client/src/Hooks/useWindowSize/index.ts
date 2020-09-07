import { useState, useEffect } from 'react';

type WindowState = {
    width: number;
    height: number;
};

function useWindowSize(): WindowState {
    const [windowSize, setWindowSize] = useState<WindowState>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        function handleResize(): void {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return (): void => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return { width: windowSize.width, height: windowSize.height };
}

export default useWindowSize;
