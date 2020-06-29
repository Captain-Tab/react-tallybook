import styled from 'styled-components';
import React from 'react';
import useTags from '../../useTags';

const Wrapper = styled.section`
   background: #FFFFFF;
   padding: 12px 16px;
   flex-grow: 1;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: flex-start;
   >ol{
    margin: 0 -12px;
     >li{
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 4px 18px;
      font-size: 14px;
      margin: 12px 12px;
      &.selected{
        background: #228b22;
        color: #fff;
      }
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

type Props = {
  value: number[];
  onChange: (selected: number[]) => void
}

const TagSection: React.FC<Props> = (props) => {
  const {tags,addTag} = useTags();
  const selectedTagIds = props.value;

  const onToggle = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    // 如果 tag 已被选中，就复制所有没有被选中的tag, 生成新的selectedTag
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };

  return (
    <Wrapper>
      <ol>
        {tags.map((tag: { id: number, name: string }) =>
          <li key={tag.id}
              className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}
              onClick={() => {onToggle(tag.id);}}>{tag.name}</li>
        )}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  );
};

export default TagSection;