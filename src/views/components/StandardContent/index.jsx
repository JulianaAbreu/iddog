import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.main`
  grid-area: content;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const StandardContent = ({ children }) => (
  <Content style={{ padding: '10rem 9rem' }}>{children}</Content>
);

StandardContent.propTypes = {
  children: PropTypes.object,
};

export default StandardContent;
