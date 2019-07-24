import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.main`
  grid-area: content;
  padding: 10rem 5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const StandardContent = ({ children }) => <Content>{children}</Content>;

StandardContent.propTypes = {
  children: PropTypes.object,
};

export default StandardContent;
