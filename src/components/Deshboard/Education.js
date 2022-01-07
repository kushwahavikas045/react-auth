import React, { useState, useEffect } from 'react'
import { fetchAllSchool, fetchDetailsEducation } from '../../https/api';
import Loading from '../Layout/Loading';
import { Pagination, Result, Button } from 'antd';
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

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await fetchAllSchool();
            setPosts(res.data);
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
        const {data} = await fetchDetailsEducation(id);
            setDetails(data);
            setSideData(false);

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
                        title="Your operation has been executed"
                        extra={
                            <Button type="primary" key="console">
                                Go Console
                            </Button>
                        }
                    /> : (
                        <EducationDetails details={details}/>
                    )}
                </div>
            </div>
        </>
    )
}

export default Education;
