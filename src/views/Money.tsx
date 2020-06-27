import * as React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import CategorySection from './money/CategorySection';
import TagSection from './money/TagsSection';
import NoteSection from './money/NoteSection';
import NumberPadSection from './money/NumberPadSection';
import {useState} from 'react';

// 对Layout组件的再次封装
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type Category = '-' | '+'

const Money = () => {
  const [propsValue, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0
  });

  const handleChange = (obj: Partial<typeof propsValue>) => {
    setSelected({
      ...propsValue,
      ...obj
    });
  };

  return (
    <MyLayout>
      <CategorySection value={propsValue.category}
                       onChange={(category) => handleChange({category})}/>
      <TagSection value={propsValue.tags}
                  onChange={(tags) => handleChange({tags})}/>
      <NoteSection value={propsValue.note}
                   onChange={(note) => handleChange({note})}/>
      <NumberPadSection value={propsValue.amount}
                        onChange={(amount) => handleChange({amount})}
                        onOk={() => {}}/>
    </MyLayout>
  );
};

export default Money;
