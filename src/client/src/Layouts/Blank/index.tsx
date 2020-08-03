import React, { ReactNode, FunctionComponent } from 'react';

import '../../assets/scss/style.scss';

const Blank: FunctionComponent<ReactNode> = ({ children }) => {
    return <>{children}</>;
};

export default Blank;
