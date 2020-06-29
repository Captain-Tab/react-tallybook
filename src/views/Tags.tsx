import * as React from 'react';
import Layout from '../components/Layout';
import useTags from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';
import Button from '../components/Button';
import CenterBox from '../components/CenterBox';
import Space from '../components/Space';

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

const Tags = () => {
  const {tags, addTag} = useTags();

  return (
    <Layout>
      <TagList>
        {tags.map((tag: { id: number, name: string }) =>
          <li key={tag.id} className="oneLine">
            <Link to={'/tags/' + tag.id}>
              <span>{tag.name}</span>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <CenterBox>
        <Space/>
        <Button onClick={addTag}>新增标签</Button>
      </CenterBox>
    </Layout>
  );
};
export default Tags;