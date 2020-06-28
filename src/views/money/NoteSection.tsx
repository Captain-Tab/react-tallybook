import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import Input from '../../components/Input';

const Wrapper = styled.section`
   background: #f5f5f5;
   padding: 14px 16px;
   font-size: 14px;
`;

type Props = {
  value: string,
  onChange: (value: string) => void
}

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value

  // 使用受控组件监听input值的变化
  const handleChange:ChangeEventHandler<HTMLInputElement> = (event) => {
        props.onChange(event.target.value)
  };

  return (
    <Wrapper>
      <Input label="请输入备注"
             type="text"
             defaultValue={note}
             onChange={handleChange}
             placeholder="请填写备注"
      >
      {/*<label>*/}
      {/*  <span>备注</span>*/}
      {/*  <input type="text"*/}
      {/*         placeholder="请在这里添加备注"*/}
      {/*         ref={refInput}*/}
      {/*         defaultValue={note}*/}
      {/*         onBlur={onBlur}*/}
      {/*  />*/}
      {/*</label>*/}
      </Input>
    </Wrapper>
  );
};


export default NoteSection;