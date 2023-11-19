import React, { useEffect } from 'react'
import PageTitle from '../../components/PageTitle';
import { Form, Col, Row, Select, message, Tabs } from "antd";
import { addExam, editExamById, getExamById } from '../../apicalls/exams';
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../Redux/bufferSlice';
import AddEditQuestion from './AddEditQuestion';

const { TabPane } = Tabs;


const AddEditExams = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const params = useParams();
    const [examData, setExamData] = React.useState(null);
    const [showAddEditQuestionModal, setShowAddEditQuestionModal] = React.useState(false);
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            let response;
            if (params.id) {
                response = await editExamById({
                    ...values,
                    examId: params.id
                });
            } else {
                response = await addExam(values);
            }
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

    const getExamData = async () => {
        try {
            dispatch(ShowLoading())
            const response = await getExamById({
                examId: params.id
            });
            dispatch(HideLoading());
            if (response.success) {
                setExamData(response.data);
            } else {
                message.error(response.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    }

    useEffect(() => {
        if (params.id) {
            getExamData();
        }
    }, [])

    return (
        <div>
            <PageTitle title={params.id ? "Edit Exam" : "Add Exam"} />

            {(examData || !params.id) && <Form layout='vertical' onFinish={onFinish} initialValues={examData}>
                <Tabs defaultActiveKey='1'>
                    <TabPane tab="Exam Details" key="1">
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
                        <div className="flex justify-end gap-5">
                            <button className='btn btn-primary' type="submit">save</button>
                            <button className='btn btn-primary' type="button" onClick={() => Navigate('/admin/exams')}>Cancel</button>
                        </div>
                    </TabPane>
                    {params.id && <TabPane tab="Questions" key="2">
                        <div className="flex justify-end">
                            <button className='primary outlined-btn' type="button" onClick={() => setShowAddEditQuestionModal(true)}>Add Question</button>
                        </div>
                    </TabPane>}

                </Tabs>





            </Form>}

            {showAddEditQuestionModal && <AddEditQuestion 
            setShowAddEditQuestionModal = {setShowAddEditQuestionModal}
            showAddEditQuestionModal = {showAddEditQuestionModal}
            examId = {params.id}
            refreshData = {getExamData}
            />}

        </div>
    )
}

export default AddEditExams