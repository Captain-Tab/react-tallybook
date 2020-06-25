import * as React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import CategorySection from './money/CategorySection';
import TagSection from './money/TagsSection';
import NotesSection from './money/NotesSection';
import NumberPadSection from './money/NumberPadSection';

// 对Layout组件的再次封装
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

const Money = () => {
  return (
    <MyLayout>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <TagSection>
        <ol>
          <li>服装</li>
          <li>饮食</li>
          <li>住宿</li>
          <li>交通</li>
        </ol>
        <button>新增标签</button>
      </TagSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="请在这里添加备注"/>
        </label>
      </NotesSection>
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
