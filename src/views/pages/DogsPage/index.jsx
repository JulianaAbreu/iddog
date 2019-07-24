import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Row, Col, Spin } from 'antd';
import { isEmpty } from 'lodash';

import { feedActions, feedSelectors } from '../../../state/ducks/feed';

import MenuBreadcrumb from './components/MenuBreadcrumb';
import DetailsModal from './components/DetailsModal';

class DogsPage extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,

    dogs: PropTypes.object,
    isLoading: PropTypes.bool.isRequired,
  };

  state = {
    visibleModal: false,
    currentImage: '',
    category: 'husky',
  };

  componentDidMount() {
    const {
      actions: { listFeed },
    } = this.props;

    listFeed();
  }

  showModal = (id, image) => {
    const {
      history: { push },
    } = this.props;
    const { category } = this.state;

    push(`${window.location.pathname}?category=${category}&id=${id}`);
    this.setState({
      visibleModal: true,
      currentImage: image,
    });
  };

  handleCancel = () => {
    const {
      history: { push },
    } = this.props;
    const { category } = this.state;
    push(`/feed?category=${category}`);
    this.setState({ visibleModal: false });
  };

  handleClickCategory = async (category) => {
    const {
      actions: { listFeed },
    } = this.props;
    const params = {
      category,
    };
    await this.setState({
      category,
    });
    await listFeed(params);
  };

  renderDogsList = () => {
    const { dogs } = this.props;

    return (
      <Row
        type="flex"
        gutter={24}
        style={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'center' }}
      >
        {!isEmpty(dogs) &&
          dogs.list.map((dog, i) => (
            <Col
              key={dog}
              span={8}
              style={{
                marginTop: 25,
                width: 410,
                height: 300,
                overflow: 'hidden',
              }}
              onClick={() => this.showModal(i, dog)}
            >
              <img
                style={{
                  width: '100%',
                  minHeight: '100%',
                  cursor: 'pointer',
                  backgroundPosition: 'center',
                  objectFit: 'cover',
                }}
                alt="example"
                src={dog}
              />
            </Col>
          ))}
      </Row>
    );
  };

  render() {
    const { isLoading } = this.props;
    const { visibleModal, currentImage } = this.state;
    const { token } = localStorage;

    if (!token) {
      return <Redirect to="/" />;
    }

    return (
      <Fragment>
        <Row type="flex" justify="center">
          <Col span={24}>
            <MenuBreadcrumb handleClickCategory={this.handleClickCategory} />
          </Col>
          <Col span={24}>
            {!isLoading ? (
              this.renderDogsList()
            ) : (
              <Spin style={{ marginTop: 80 }} tip="Carregando..." />
            )}
          </Col>
        </Row>
        <DetailsModal
          currentImage={currentImage}
          handleCancel={this.handleCancel}
          visibleModal={visibleModal}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dogs: feedSelectors.makeSelectFeed(),
  isLoading: feedSelectors.makeSelectFeedIsLoading(),
  error: feedSelectors.makeSelectFeedError(),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(feedActions, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(DogsPage);
