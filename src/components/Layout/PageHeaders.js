import React from 'react'
import { PageHeader } from 'antd';
const PageHeaders = ({title, subtitle}) => {

    return (
        <PageHeader
            className="site-page-header"
            title={title}
            subTitle={subtitle}
        />
    )
}

export default PageHeaders;