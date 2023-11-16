import React from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';



function Buffer() {
    const antIcon = <LoadingOutlined style={{ fontSize: 55, color: '#fff' }} />;

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
            <Spin indicator={antIcon} />
        </div>
    )
}

export default Buffer
