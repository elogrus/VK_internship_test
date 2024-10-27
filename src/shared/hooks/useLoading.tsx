import { useEffect, useState } from "react";

export const useLoading = <T,>(
    url: string,
    params: RequestInit = {},
    doAfter: (result: T) => void = () => {}
): [boolean, T, Error] => {
    const [isLoading, setIsLoading] = useState(true);
    const [result, setResult] = useState<T>();
    const [error, setError] = useState<Error>();
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(url, params);
                if (response.status >= 400) {
                    setError(error);
                    setIsLoading(false);
                    return;
                }
                const data: T = await response.json();
                setIsLoading(false);
                setResult(data);
                doAfter(data);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };
        getData();
    }, []);

    return [isLoading, result, error];
};
