import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  grid-area: header;
  padding: 0 1rem;
  height: 15rem;
`;

const StandardHeader = ({ children }) => <Header>{children}</Header>;

StandardHeader.propTypes = {
  children: PropTypes.object,
};

export default StandardHeader;
