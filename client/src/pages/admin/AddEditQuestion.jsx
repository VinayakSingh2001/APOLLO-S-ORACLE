import { Form, Modal, message } from 'antd'
import React from 'react'
import { addQuestionToExam } from '../../apicalls/exams';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../Redux/bufferSlice';

const AddEditQuestion = ({
    showAddEditQuestionModal,
    setShowAddEditQuestionModal,
    refreshData,
    examId
}) => {

    const dispatch = useDispatch();

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            const requiredPayload = {
                name: values.name,
                correctOption: values.correctOption,
                options: {
                    A: values.A,
                    B: values.B,
                    C: values.C,
                    D: values.D,
                },
                exam: examId,
            };

            const response = await addQuestionToExam(requiredPayload);
            if (response.success) {
                message.success(response.message);
                refreshData();
                setShowAddEditQuestionModal(false);
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
        <Modal title="Add Question" visible={showAddEditQuestionModal} footer={false} onCancel={() => setShowAddEditQuestionModal(false)}>
            <Form onFinish={onFinish} layout='vertical'>
                <Form.Item name='name' label='Question'>
                    <input type='text' />
                </Form.Item>
                <Form.Item name='correctOption' label='Correct Option'>
                    <input type='text' />
                </Form.Item>

                <div className="flex gap-2">
                    <Form.Item name='A' label='Option A'>
                        <input type='text' />
                    </Form.Item>
                    <Form.Item name='B' label='Option B'>
                        <input type='text' />
                    </Form.Item>
                </div>
                <div className="flex gap-2">
                    <Form.Item name='C' label='Option C'>
                        <input type='text' />
                    </Form.Item>
                    <Form.Item name='D' label='Option D'>
                        <input type='text' />
                    </Form.Item>
                </div>

                <div className="flex justify-end">
                    <button className="primary-outlined-btn" type="button" onClick={() => setShowAddEditQuestionModal(false)}>
                        Cancel
                    </button>
                    <button className="primary-contained-btn">
                        save
                    </button>
                </div>
            </Form>
        </Modal>
    )
}

export default AddEditQuestion
