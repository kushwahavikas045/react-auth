import React from 'react'
import DataNotFound from '../Layout/DataNotFound';
import styles from './DeshboardItem.module.css';
const DeshboardItem = ({ items, loading }) => {
    let content = '';
    if (!loading && items.length === 0) content = <DataNotFound/>

    if (items.length > 0) {
        content = items.map((item) => (
            <div className="card" key={item.id}>
                <div className="content">
                    <img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg" />
                    <div className="header">
                      {item.name}
                    </div>
                    <div className="meta">
                        {item.email}
                    </div>
                    <div className="description">
                        <p>Company: {`${item.company}`}</p>
                            <p>Status: {`${item.status}`}</p>
                    </div>
                </div>
            </div>
        ))
    }
return (
    <div className={styles.wrapper}>
        <div className="ui cards" style={{ padding: '10px 20px' }}>
            {content}
        </div>
    </div>
)
}

export default DeshboardItem
