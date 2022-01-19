import React, { useState, useEffect } from 'react'
import { fetchAllSchool, fetchDetailsEducation } from '../../https/api';
import Loading from '../Layout/Loading';
import { Pagination, Result} from 'antd';
import styles from './Education.module.css';
import EducationItem from './EducationItems';
import EducationDetails from './EducationDetails';


const Education = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const [sideData, setSideData] = useState(true);
    const [details, setDetails] = useState({});
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
           try {
            const res = await fetchAllSchool();
            setPosts(res.data);
            setError(false)
           } catch (err) {
               setError(true);
           }
            setLoading(false);
        };

        fetchPosts();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    //change current
    const paginate = (page) => {
        setCurrentPage(page);
    }

    //handleId
    const handleSingleId = async(id) => {
        setLoading(true);
        const {data} = await fetchDetailsEducation(id);
            setDetails(data);
            setSideData(false);
            setLoading(false);

    }


    return (
        <>
            {loading && <Loading />}
            <div className='ui grid'>
                <div className="twelve wide column">
                    {posts && <EducationItem items={currentPosts} loading={loading} handleId={handleSingleId} />}
                    <div className={styles.pagination}>
                        <Pagination onChange={paginate} defaultCurrent={currentPosts} total={posts.length} />
                    </div>
                </div>
                <div className="four wide column" style={{ padding: '20px'}}>
                    {sideData ?
                    <Result
                    style={{marginTop:'20px'}}
                        title="Click on list for Details description"
                    /> : (
                        <EducationDetails details={details} loading = {loading}/>
                    )}
                </div>
            </div>
            {error && <h1 style={{color:'red'}}>Something went wrong</h1>}
        </>
    )
}

export default Education;
