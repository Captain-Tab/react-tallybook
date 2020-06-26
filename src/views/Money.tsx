import * as React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import CategorySection from './money/CategorySection';
import TagSection from './money/TagsSection';
import NoteSection from './money/NoteSection';
import NumberPadSection from './money/NumberPadSection';

// 对Layout组件的再次封装
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const Money = () => {
  return (
    <MyLayout>
      <CategorySection/>
      <TagSection/>
      <NoteSection/>
      <NumberPadSection>
        <div className="output">
          100
        </div>
        <div className="pad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
};

export default Money;