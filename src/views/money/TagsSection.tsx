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

type Props= {
  value:string[];
  onChange:(selected:string[])=> void
}

const TagSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags()
  const selectedTags = props.value


  const onAddTag = () => {
    const tagName = window.prompt('新增的标签为');
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };

  const onToggle = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    // 如果 tag 已被选中，就复制所有没有被选中的tag, 生成新的selectedTag
    if (index >= 0) {
      props.onChange(selectedTags.filter(t => t !== tag));
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };

  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag}
              className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}
              onClick={() => {onToggle(tag);}}>{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export default TagSection;