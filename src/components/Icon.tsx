import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames'

// 导入所有icons文件下的所有svg
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name?: string;
} & React.SVGAttributes<SVGElement>

const Wrapper = styled.div`
  .icon{
       width: 32px; height: 32px;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
  }
`;

const Icon = (props: Props) => {
  const {name, children, className, ...rest} = props;
  return (
    <Wrapper>
      <svg className={classnames('icon', className)} {...rest}>
        {props.name && <use xlinkHref={'#' + props.name}/>}
      </svg>
    </Wrapper>

  );
};

export default Icon;