import React from 'react'
import { Row, Col } from 'antd';
const Grid = ({children}) => {
    return (
            <Row>
            <Col span={12} offset={6}>
                {children}
            </Col>
        </Row>

    )
}

export default Grid
