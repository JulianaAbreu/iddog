import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Form, Input, Button, Row, Col } from 'antd';
import styled from 'styled-components';

const InputText = styled(Input)`
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #e8e8e8;
`;

const SignupForm = ({ form: { getFieldDecorator }, onSubmit, isLoading }) => (
  <Form style={{ width: '100%' }}>
    <Row type="flex" justify="center" gutter={12}>
      <Col span={22}>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'Por favor insira um email válido.',
              },
              {
                required: true,
                message: 'Por favor insira seu email.',
              },
            ],
          })(<InputText placeholder="your email" />)}
        </Form.Item>
      </Col>
      <Col span={1}>
        <Form.Item>
          <Button type="primary" loading={isLoading} onClick={onSubmit}>
            Sign in
          </Button>
        </Form.Item>
      </Col>
    </Row>
  </Form>
);

SignupForm.propTypes = {
  form: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const withForm = Form.create();

export default compose(withForm)(SignupForm);
