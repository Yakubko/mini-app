import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import axios from 'axios';

type Query = {
    method: 'get';
};

function useRestAPI(
    initialQuery: Query = {
        method: 'get',
    },
): [{ data: any[] | null; error: boolean; loading: boolean }, { fetch: Dispatch<SetStateAction<Query>> }] {
    const [data, setData] = useState<any[] | null>(null);
    const [query, setQuery] = useState(initialQuery);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async (): Promise<void> => {
            setError(false);
            setLoading(true);

            try {
                const result = await axios[query.method]('/api/v1/users');
                setData(result.data);
            } catch (err) {
                setError(true);
            }

            setLoading(false);
        })();
    }, [query]);

    return [{ data, loading, error }, { fetch: setQuery }];
}

export default useRestAPI;
