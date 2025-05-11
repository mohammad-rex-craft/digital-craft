'use client'

import { useEffect, useState } from 'react';
import { ref } from 'firebase/database';
import { database } from '@/databese/firebase';

export interface DataItem {
    name: string;
    url: string;
    code:any[];
    detielsImg:string;
    frontImg: string;
    backImg: string;
    description: string;
    id?: string;
}

export const useData = () => {
    const [dataList, setDataList] = useState<DataItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchAllData = async () => {
        try {
            const dataRef = ref(database, 'data');
            const response = await fetch(dataRef.toString() + '.json');
            const data = await response.json();

            if (data) {
                const dataArray = Object.keys(data).map(key => ({
                    ...data[key],
                    id: key
                }));
                setDataList(dataArray.filter(item => item.hasOwnProperty('name')));
            }
            return dataList;
        } catch (err) {
            setError('Failed to fetch data');
            console.error("Error fetching data:", err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const getItemById = async (id: string): Promise<DataItem | null> => {
        try {
            const itemRef = ref(database, `data/${id}`);
            const response = await fetch(itemRef.toString() + '.json');
            const data = await response.json();

            if (!data) {
                throw new Error('Item not found');
            }

            return {
                ...data,
                id: id
            };
        } catch (err) {
            setError('Failed to fetch item');
            console.error("Error fetching item:", err);
            return null;
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    return {
        dataList,
        loading,
        error,
        getItemById,
        fetchAllData
    };
};