import React, { useEffect, useState } from 'react';
import { Result } from 'antd';
import { fetchAllDeveloper } from '../../https/api';
import DeshboardItem from './DeshboardItem';
import Loading from '../Layout/Loading';
const Deshboard = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    //fetch developer
    useEffect(() => {
        const fetchDeveloper = async () => {
            try {

                const {data} = await fetchAllDeveloper();
                setItems(data);

            } catch (error) {
                console.log(error.message);
                setError(error)
            }finally{
                setLoading(false);
            }
        }

        fetchDeveloper();

    }, []);


    return (
        <>
            {loading && <Loading />}
            {error && (
                <Result
                    status="500"
                    title="500"
                    subTitle="Sorry, something went wrong."
                />
            )}
            {!error && items && <DeshboardItem items={items} loading={loading} />}
        </>
    )
}

export default Deshboard;
