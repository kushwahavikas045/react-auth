import React from 'react'

const EducationDetails = ({details}) => {

    return (
        <div className="ui card">
            <div className="content">
                <div className="header">{details.name}</div>
            </div>
            <div className="content">
                <h4 className="ui sub header">{details.city ? details.city : 'not email found'}</h4>
                <div className="ui small feed">
                    <div className="event">
                        <div className="content">
                            <div className="summary">
                                <a>Email : </a> {details.contact_email ? details.contact_email : 'email not found'}<br/>
                                <a>Website : </a> {details.website ? details.website : 'data not found'}<br/>
                                <a>Contact Name : </a> {details.contact_name ? details.name : 'data not found'}<br/>
                                <a>Contact No : </a> {details.contact_number ? details.contact_number : 'email not found'}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="extra content">
                <button className="ui button">Join Project</button>
            </div>
        </div>
    )
}

export default EducationDetails
