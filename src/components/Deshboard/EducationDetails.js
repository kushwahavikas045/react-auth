import React from 'react'

const EducationDetails = ({details, loading}) => {
    let content = '';

    if(details && !loading){
      content = <div className="ui card">
      <div className="content">
          <div className="header">{details.name}</div>
      </div>
      <div className="content">
          <h4 className="ui sub header">{details.city ? details.city : 'not email found'} {details.online_only ? <p style={{color:'green'}}>Online</p> : <p style={{color:'red'}}>offline</p>} </h4>
          <div className="ui small feed">
              <div className="event">
                  <div className="content">
                      <div className="summary">
                          <a>Email : </a> {details.contact_email ? details.contact_email : 'email not found'}<br/>
                          <a>Website : </a> {details.website ? details.website : 'data not found'}<br/>
                          <a>Contact Name : </a> {details.contact_name ? details.name : 'data not found'}<br/>
                          <a>Contact No : </a> {details.contact_number ? details.contact_number : 'email not found'}<br/>
                          <a>Address : </a> {details.street ? details.street : 'data not found'}
                      </div>
                  </div>
              </div>

          </div>
      </div>
      <div className="extra content">
          <button className="ui button">Join</button>
      </div>
  </div>
    }

    //if loading
    if(loading){
        content = <div className="ui card">
        <div className="content">
            <div className="header"></div>
        </div>
        <div className="content">
            <h4 className="ui sub header"></h4>
            <div className="ui small feed">
                <div className="event">
                    <div className="content">
                        <div className="summary">
                            loading please wait...
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    }

    return (
        content
    )
}

export default EducationDetails
