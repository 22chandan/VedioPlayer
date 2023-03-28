import React, { useState } from 'react';
import { Form, Input, Modal } from 'antd';

export const BucketForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        setLoading(true);
        onCreate(values.name)
          .then(() => {
            form.resetFields();
            setLoading(false);
          })
          .catch(() => setLoading(false));
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      open={visible}
      title="Create a new bucket"
      okText="Create"
      onCancel={onCancel}
      confirmLoading={loading}
      onOk={handleOk}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
      >
        <Form.Item
          name="name"
          label="Bucket Name"
          rules={[
            {
              required: true,
              message: 'Please input the name of the bucket!',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BucketForm;
