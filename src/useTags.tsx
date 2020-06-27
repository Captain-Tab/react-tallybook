import {useState} from 'react';

// 封装一个自定义hook
const useTags = ()=>{
  const [tags, setTags] = useState<string[]>(['服装', '饮食', '住宿', '交通']);
  return{
    tags: tags,
    setTags: setTags
  }
}

export default useTags