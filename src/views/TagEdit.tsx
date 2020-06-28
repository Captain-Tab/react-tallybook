import React from 'react';
import useTags from '../useTags';
import {useParams} from 'react-router-dom'
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

const TopBar =  styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 8px;
  background: #fff;
`
const InputWrapper = styled.div`
  background:#fff;
  padding: 0 16px;
  margin-top: 8px;
  
`

const TagEdit :React.FC = ()=>{
  const {findTag, updateTag} = useTags()
  // 重命名id为idString
  let {id:idString} = useParams<Params>()
  const tag = findTag(parseInt(idString))

  return(
    <Layout>
      <div>
        <TopBar>
          <Icon name="left"/>
          <span>编辑标签</span>
          <Icon/>
        </TopBar>
        <InputWrapper>
            <Input label="标签名"
                   type="text"
                   placeholder="标签名"
                   value={tag.name}
                   onChange={(event) => updateTag(tag.id, {name :event.target.value})}
            />
        </InputWrapper>
        <div>
          <CenterBox>
            <Space />
            <Button>删除标签</Button>
          </CenterBox>
        </div>
      </div>
    </Layout>
  )
}

export  default TagEdit