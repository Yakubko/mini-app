import React, { ReactElement } from 'react';

const Loading = (): ReactElement => {
    return (
        <>
            <tr className="unread">
                <td colSpan={4} className="text-center">
                    <div className="spinner-grow" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default Loading;
