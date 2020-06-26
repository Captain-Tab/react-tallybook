import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul{
    display: flex;
    background: #c4c4c4;
   > li{
     width: 50%;
     text-align: center;
     padding: 16px 0;
     position: relative;
     &.selected::after{
      content: '';
      display:block;
      height: 3px;
      background: #333;
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
     }
   }
  }
`;

const CategorySection: React.FC = () => {
  const categoryMap = {'-': '支出', '+': '收入'};
  // 检索得到categoryMap的key集合
  type keys = keyof typeof categoryMap
  const [cateGoryList] = useState<keys[]>(['-', '+']);
  const [category, setCategory] = useState('-');

  return (
    <Wrapper>
      <ul>
        {cateGoryList.map(c =>
          <li className={category === c ? 'selected' : ''}
              onClick={() => {setCategory(c)}}
              key={c}>
            {categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  );
};

export default CategorySection;