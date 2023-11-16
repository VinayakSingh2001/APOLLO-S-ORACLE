import React from 'react'
import PageTitle from '../../components/PageTitle';
import { Form, Col, Row, Select, message } from "antd";
import { addExam } from '../../apicalls/exams';
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../Redux/bufferSlice';


const AddEditExams = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading())
            let response;
            response = await addExam(values);
            if (response.success) {
                message.success(response.message);
                Navigate('/admin/exams')
            } else {
                message.error(response.message);
            }
            dispatch(HideLoading());
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    }

    return (
        <div>
            <PageTitle title="Add Exam" />
            <Form layout='vertical' onFinish={onFinish}>
                <Row gutter={[10, 10]}>
                    <Col span={8}>
                        <Form.Item label="Exam Name" name="name">
                            <input type="text" class="border border-gray-300 rounded-md p-1.5" />
                        </Form.Item>

                    </Col>
                    <Col span={8}>
                        <Form.Item label="Exam Duration" name="duration">
                            <input type="number" class="border border-gray-300 rounded-md p-1.5" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Category" name="category">
                            {/* <input type="text" class="border border-gray-300 rounded-md p-1.5" /> */}
                            <Select >
                                <Select.Option value="javascript">JavaScript</Select.Option>
                                <Select.Option value="React">React</Select.Option>
                                <Select.Option value="Node">Node</Select.Option>
                                <Select.Option value="Mongodb">Mongodb</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Total Marks" name="totalMarks">
                            <input type="number" class="border border-gray-300 rounded-md p-1.5" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Passing Marks" name="passingMarks">
                            <input type="number" class="border border-gray-300 rounded-md p-1.5" />
                        </Form.Item>
                    </Col>
                </Row>

                <div className="flex justify-end">
                    <button className='btn btn-primary' type="submit">save</button>
                </div>
            </Form>
        </div>
    )
}

export default AddEditExams