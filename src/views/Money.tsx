import * as React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import CategorySection from './money/CategorySection';
import TagSection from './money/TagsSection';
import NoteSection from './money/NoteSection';
import NumberPadSection from './money/NumberPadSection';
import {useState} from 'react';
import useRecords from '../hooks/useRecords';

// 对Layout组件的再次封装
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const CategoryWrapper = styled.div`
  background: #f5f5f5;
`;


type Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};

const Money = () => {
  const [propsValue, setSelected] = useState(defaultFormData);

  const {addRecord} = useRecords();
  const handleChange = (obj: Partial<typeof propsValue>) => {
    setSelected({
      ...propsValue,
      ...obj
    });
  };

  const onOk = () => {
    if (addRecord(propsValue)) {
      alert('添加数据成功');
      setSelected(defaultFormData);
    }
  };

  return (
    <MyLayout>
      <CategoryWrapper>
        <CategorySection value={propsValue.category}
                         onChange={(category) => handleChange({category})}/>
      </CategoryWrapper>
      <TagSection value={propsValue.tagIds}
                  onChange={(tagIds) => handleChange({tagIds})}/>
      <NoteSection value={propsValue.note}
                   onChange={(note) => handleChange({note})}/>
      <NumberPadSection value={propsValue.amount}
                        onChange={(amount) => handleChange({amount})}
                        onOk={onOk}/>
    </MyLayout>
  );
};

export default Money;
