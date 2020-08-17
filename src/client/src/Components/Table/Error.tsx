import React, { ReactElement } from 'react';

const Error = (): ReactElement => {
    return (
        <>
            <tr className="unread">
                <td colSpan={4} className="text-center">
                    <div className="alert alert-danger" role="alert">
                        There was a problem retrieving data for this grid.
                    </div>
                </td>
            </tr>
        </>
    );
};

export default Error;
