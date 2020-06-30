import React from 'react';
import useTags from '../hooks/useTags';
import {useParams, useHistory} from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import Button from '../components/Button';
import styled from 'styled-components';
import Input from '../components/Input';
import CenterBox from '../components/CenterBox';
import Space from '../components/Space';

type Params = {
  id: string
}

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 8px;
  background: #fff;
`;
const InputWrapper = styled.div`
  background:#fff;
  padding: 0 16px;
  margin-top: 8px;
  
`;

const TagEdit: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  // 重命名id为idString
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));

  const tagContent = (tag: { id: number, name: string }) => (
    <div>
      <InputWrapper>
        <Input label="标签名"
               type="text"
               placeholder="标签名"
               value={tag.name}
               onChange={(event) => updateTag(tag.id, {name: event.target.value})}
        />
      </InputWrapper>
      <div>
        <CenterBox>
          <Space/>
          <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
        </CenterBox>
      </div>
    </div>
  );

  const history = useHistory()
  // 使用history的方法，点击回退页面
  const clickBack = ()=>{
    history.goBack()
  }

  return (
    <Layout>
      <div>
        <TopBar>
          <Icon name="left" onClick={clickBack}/>
          <span>编辑标签</span>
          <Icon/>
        </TopBar>
        {tag ? tagContent(tag) : <CenterBox> tag不存在</CenterBox>}
      </div>
    </Layout>
  );
};

export default TagEdit;