import React, { ReactElement, ReactNode, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useWindowSize from 'Hooks/useWindowSize';

import State from 'Store/state';
import { collapseMenu } from 'Store/Gui/actions';

type Props = { children: ReactNode };

function OutsideClick(props: Props): ReactElement {
    const wrapperRef = useRef<any>(null);
    const dispatch = useDispatch();
    const collapse = useSelector<State, State['gui']['collapseMenu']>((state) => state.gui.collapseMenu);
    const { width } = useWindowSize();
    const { children } = props;

    useEffect(() => {
        function handleOutsideClick(event: Event): void {
            if (wrapperRef.current !== null && !wrapperRef.current.contains(event.target)) {
                if (width < 992 && collapse) {
                    dispatch(collapseMenu());
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
