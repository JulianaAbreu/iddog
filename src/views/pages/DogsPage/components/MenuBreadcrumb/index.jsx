import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { Breadcrumb } from 'antd';
import styled from 'styled-components';

const MenuText = styled.span`
  text-transform: uppercase;
  color: #656565;
  cursor: pointer;
`;
const BreadcrumbContent = styled(Breadcrumb)`
  text-align: center;
`;

const routes = [
  { name: 'husky', id: 0 },
  { name: 'labrador', id: 1 },
  { name: 'hound', id: 2 },
  { name: 'pug', id: 3 },
];

const MenuBreadcrumb = ({ handleClickCategory }) => (
  <BreadcrumbContent>
    {!isEmpty(routes) &&
      routes.map((route) => (
        <Breadcrumb.Item
          key={route.id}
          onClick={() => handleClickCategory(route.name)}
        >
          <Link to={`/feed?category=${route.name}`}>
            <MenuText>{route.name}</MenuText>
          </Link>
        </Breadcrumb.Item>
      ))}
  </BreadcrumbContent>
);

MenuBreadcrumb.propTypes = {
  handleClickCategory: PropTypes.func.isRequired,
};

export default MenuBreadcrumb;
