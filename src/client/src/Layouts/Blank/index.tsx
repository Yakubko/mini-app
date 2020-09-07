import React, { ReactNode, ReactElement } from 'react';

import 'assets/scss/style.scss';

type Props = {
    children: ReactNode;
};

function Blank({ children }: Props): ReactElement {
    return <>{children}</>;
}

export default Blank;
