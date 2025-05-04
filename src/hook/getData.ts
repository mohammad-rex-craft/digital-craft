'use client'

import { useEffect, useState } from 'react';
import { ref } from 'firebase/database';
import { database } from '@/databese/firebase';

interface DataItem {
    name: string;
    url: string;
    frontImg: string;
    backImg: string;
    description: string;
    id?: string;
}

export const useData = () => {
    const [dataList, setDataList] = useState<DataItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataRef = ref(database, 'data');
                const response = await fetch(dataRef.toString() + '.json');
                const data = await response.json();

                if (data) {
                    const dataArray = Object.keys(data).map(key => ({
                        ...data[key],
                        id: key
                    }));
                    setDataList(dataArray);
                }
            } catch (err) {
                setError('Failed to fetch data');
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { dataList, loading, error };
};