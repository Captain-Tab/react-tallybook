import * as React from 'react';
import Layout from '../components/Layout';
import useTags from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
   font-size: 16px;
   background: #ffff;
   > li{
    // e5e5e7
    border-bottom: 1px solid #d5d5d5;
    line-height: 20px;
    padding: 12px 16px 12px 0;
    margin-left: 16px;
    > a{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
   }
`;
const Button = styled.button`
    background: #767676;
    color: #fff;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 8px 12px;
    font-size: 16px;
`;
const CenterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Space = styled.div`
    height: 24px;
`;

const Tags = () => {
  const {tags} = useTags();

  return (
    <Layout>
      <TagList>
        {tags.map((tag: { id: number, name: string }) =>
          <li key={tag.id} className="oneLine">
            <Link to={'/tags/' + tag.id}>
              <span>{tag.name}:{tag.id}</span>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <CenterBox>
        <Space/>
        <Button>新增标签</Button>
      </CenterBox>
    </Layout>
  );
};
export default Tags;