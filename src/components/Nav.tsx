import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from 'components/Icon';

const NavWrapper = styled.div`
  box-shadow: 0 0 3px rgba(0,0,0,025);
  line-height: 24px;
  background: #FFFFFF;
  > ul {
    display: flex;
    > li{
       width: 33.3%;
       text-align: center;
       padding-top: 8px;
        > a{
          flex-direction: column;
          justify-content: center;
          align-content: center;
          &.selected{
            color: #228B22;
          }
        }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="label"/>
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;