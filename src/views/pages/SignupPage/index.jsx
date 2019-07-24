import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Row, notification } from 'antd';

import { signupActions, signupSelectors } from '../../../state/ducks/auth';

import SignupForm from './components/SignupForm';
import dog from '../../../assets/images/dog.svg';

class SignupPage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,

    navigate: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  state = {};

  handleSubmitSignup = () => {
    const { validateFields } = this.formSignup;
    validateFields(async (err, values) => {
      if (!err) {
        const {
          actions: { login },
          navigate,
        } = this.props;
        const result = await login(values);
        if (!result.error) {
          navigate('/feed');
        } else {
          notification.error({
            message: 'Login falhou',
            description:
              'Ocorreu um problema ao tentar cadastrá-lo no sistema :(',
          });
        }
      }
    });
  };

  getFormRef = (ref) => {
    this.formSignup = ref;
  };

  render() {
    const { isLoading } = this.props;

    return (
      <Fragment>
        <Row type="flex" justify="center">
          <img
            src={dog}
            alt="id dog"
            style={{ width: '60%', marginBottom: 20 }}
          />
        </Row>
        <SignupForm
          ref={this.getFormRef}
          onSubmit={this.handleSubmitSignup}
          isLoading={isLoading}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userData: signupSelectors.makeSelectSignup(),
  isLoading: signupSelectors.makeSelectSignupIsLoading(),
  error: signupSelectors.makeSelectSignupError(),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(signupActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupPage);
