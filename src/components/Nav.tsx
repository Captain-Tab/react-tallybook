import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from 'components/Icon'

const NavWrapper =styled.div`
  box-shadow: 0 0 3px rgba(0,0,0,025);
  line-height: 24px;
  > ul {
    display: flex;
    > li{
       width: 33.3%;
       text-align: center;
       padding: 8px;
    }
  }
`

const Nav =()=>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <Icon name="money"/>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Icon name="label"/>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <Icon name="statistics"/>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav