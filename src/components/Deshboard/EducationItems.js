import React from 'react'
import DataNotFound from '../Layout/DataNotFound';
import styles from './DeshboardItem.module.css';
const EducationItem = ({ items, loading, handleId }) => {

    let content = '';
    if (!loading && items.length === 0) content = <DataNotFound/>

    if (items.length > 0) {
        content = items.map((item) => (
            <div className="card" key={item.name} onClick={() => handleId(item.id)} style={{cursor:'pointer'}}>
                <div className="content">
                    <img className="right floated mini ui image" src="https://thumbs.dreamstime.com/b/education-icon-building-school-perfect-application-web-logo-presentation-template-design-filled-line-style-171036910.jpg"  style={{width:'100px'}}/>
                    <div className="header">
                      {item.name}
                    </div>
                    <div className="meta">
                        {item.contact_email ? item.contact_email :'not email found'}
                    </div>
                    <div className="description">
                     <p>Contact no: {item.contact_number ? item.contact_number : 'no description found'}</p>
                     <p>City : {item.city ? item.city : 'Update Soon'}</p>
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

export default EducationItem
