/*
import React from 'react';
import { useQuery } from 'react-query';
import { getAllResidence } from '../utils/Api';

const useResidence = () => {
    const {data, isLoading, isError, refetch} = useQuery(
        "allResidence",
        getAllResidence,
        {refetchOnWindowFocus: false}
    );

    return {
        data,
        isError, 
        isLoading, 
        refetch,
    };
};    
export default useResidence
*/