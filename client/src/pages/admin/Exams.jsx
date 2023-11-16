import React, { useEffect } from 'react'
import PageTitle from '../../components/PageTitle'
import { useNavigate } from 'react-router-dom'
import { Table, message } from 'antd';
import { useDispatch } from 'react-redux';
import { getAllExams } from '../../apicalls/exams';
import { ShowLoading, HideLoading } from '../../Redux/bufferSlice';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const Exams = () => {
    const navigate = useNavigate();
    const [exams, setExams] = React.useState([]);
    const dispatch = useDispatch();
    const columns = [
        {
            title: "Exam Name",
            dataIndex: "name",
        },
        {
            title: "Duration",
            dataIndex: "duration",
        },
        {
            title: "Category",
            dataIndex: "category",
        },
        {
            title: "Total Marks",
            dataIndex: "totalMarks",
        },
        {
            title: "Passing Marks",
            dataIndex: "passingMarks",
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, record) => (
                <>
                    <div className='flex gap-4 '>
                    {/* <i className="ri-pencil-line cursor-pointer"></i>
                    <i className="ri-delete-bin-line cursor-pointer"></i> */}
                        <div className='cursor-pointer'><EditOutlined onClick={() => navigate(`/admin/exams/edit/${record._id}`)} /></div>
                        <div className='cursor-pointer'> <DeleteOutlined /></div>
                    </div>

                </>
            ),
        },
    ]
    const getExamsData = async () => {
        try {
            dispatch(ShowLoading())
            const response = await getAllExams();
            dispatch(HideLoading());
            if (response.success) {
                setExams(response.data);
            } else {
                message.error(response.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    }
    useEffect(() => {
        getExamsData();
    }, [])

    return (
        <div>
            <div className='flex justify-between mt-2 w-full ' >
                <PageTitle title="Exams" />

                <button className="primary-outlined-btn flex items-center " onClick={() => navigate("/admin/exams/add")}>
                    <i className='ri-add-line'></i>
                    Add Exam
                </button>
            </div>
            <Table columns={columns} dataSource={exams} />

        </div>
    )
}

export default Exams
