import React, { Component, ReactElement } from 'react';

import { StoreProps } from './types';

class OutsideClick extends Component<StoreProps> {
    wrapperRef: any = null;

    constructor(props: StoreProps) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    componentDidMount(): void {
        document.addEventListener('mousedown', this.handleOutsideClick);
    }

    componentWillUnmount(): void {
        document.removeEventListener('mousedown', this.handleOutsideClick);
    }

    setWrapperRef(node: any): void {
        this.wrapperRef = node;
    }

    /**
     * close menu if clicked on outside of element
     */
    handleOutsideClick(event: any): void {
        const { windowWidth, collapseMenu, onToggleNavigation } = this.props;

        if (this.wrapperRef !== null && !this.wrapperRef.contains(event.target)) {
            if (windowWidth < 992 && collapseMenu) {
                onToggleNavigation();
            }
        }
    }

    render(): ReactElement {
        const { children } = this.props;

        return (
            <div className="nav-outside" ref={this.setWrapperRef}>
                {children}
            </div>
        );
    }
}

export default OutsideClick;
