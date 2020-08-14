import React, { FC } from 'react';
import { Table, TableProps } from 'react-bootstrap';

import Loading from './Loading';
import Error from './Error';

type CardProps = {
    error: boolean;
    loading: boolean;
} & TableProps;

const RemoteTable: FC<CardProps> = ({ children, error = false, loading = false, ...tableProps }) => {
    let tableContent = <>{children}</>;

    if (loading) {
        tableContent = <Loading />;
    }
    if (error) {
        tableContent = <Error />;
    }

    return (
        <>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Table {...tableProps}>{tableContent}</Table>
        </>
    );
};

export default RemoteTable;
