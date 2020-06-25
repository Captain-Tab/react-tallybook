import * as React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';


const CategorySection = styled.section`
 
`;

const TagSection = styled.section`
   background: #FFFFFF;
   border: 1px solid red;
   padding: 12px 16px;
   >ol{
    margin: 0 -12px;
     >li{
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 4px 18px;
      font-size: 14px;
      margin: 0 12px;
     }
   }
   > button{
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px
   }
`;

const NotesSection = styled.section`

`;
const NumberPadSection = styled.section`

`;

const Money = () => {
  return (
    <Layout>
      <CategorySection>
        <ul>
          <li>支出</li>
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
          <input type="text"/>
        </label>
      </NotesSection>
      <NumberPadSection>
        <div>
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
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
};

export default Money;
