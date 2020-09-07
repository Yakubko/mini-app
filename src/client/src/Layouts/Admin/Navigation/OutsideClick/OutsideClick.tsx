import React, { ReactElement, ReactNode, useEffect, useRef } from 'react';

import useWindowSize from 'Hooks/useWindowSize';

import { StoreProps } from './types';

type Props = StoreProps & { children: ReactNode };

function OutsideClick(props: Props): ReactElement {
    const wrapperRef = useRef<any>(null);
    const { width } = useWindowSize();
    const { children, collapseMenu, onToggleNavigation } = props;

    useEffect(() => {
        function handleOutsideClick(event: Event): void {
            if (wrapperRef.current !== null && !wrapperRef.current.contains(event.target)) {
                console.log(wrapperRef.current, collapseMenu);
                if (width < 992 && collapseMenu) {
                    onToggleNavigation();
                }
            }
        }

        // Add event listener
        document.addEventListener('mousedown', handleOutsideClick);

        // Remove event listener on cleanup
        return (): void => document.removeEventListener('mousedown', handleOutsideClick);
    });

    return (
        <div className="nav-outside" ref={wrapperRef}>
            {children}
        </div>
    );
}

export default OutsideClick;
