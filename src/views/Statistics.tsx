import * as React from 'react';
import Layout from '../components/Layout';
import CategorySection from './money/CategorySection';
import {ReactNode, useState} from 'react';
import styled from 'styled-components';
import useRecords, {RecordItem} from '../hooks/useRecords';
import useTags from '../hooks/useTags';
import day from 'dayjs';


const CategoryWrapper = styled.div`
   background: white;
`;

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`
const Item = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 16px;
   line-height: 20px;
   padding: 10px 16px;
   background: white;
   >.notes{
     margin-right: auto;
     margin-left: 16px;
     color: #999;
   }
`;

const Statistics = () => {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const selectedCategory = records.filter(r => r.category === category);

  const hash: { [key: string]: RecordItem[] } = {}; // 时间为key,数据为对应时间的hash数据结构
  // 对数据根据时间进行分组
  selectedCategory.forEach(r => {
    const key = day(r.createdAt).format('YYYY年MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });

  const orderArray = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] < b[0]) return 1;
    if (a[0] > b[0]) return -1;
    return 0;
  });


  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={value => setCategory(value)}/>
      </CategoryWrapper>
      {orderArray.map(([date, records]) =>
        <div>
          <Header>{date}</Header>

          <div>
            {records.map(r => {
              return <Item>
                <div className="tags">
                  {r.tagIds
                      .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                      .reduce( (result, span, index, array)=>
                        result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
                  }
                </div>
                {r.note && <div className="notes">{r.note}</div>}
                <div className="amount">
                  ￥{r.amount}
                </div>
              </Item>;
            })}
          </div>
        </div>
      )
      }
    </Layout>
  );
};

export default Statistics;
