import {useState} from 'react';
import createId from './lib/createId';

// 封装一个自定义hook
const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(
    [
      {id: createId(), name: '衣服'},
      {id: createId(), name: '饮食'},
      {id: createId(), name: '住宿'},
      {id: createId(), name: '交通'},
]
)
  ;
  return {
    tags: tags,
    setTags: setTags
  };
};

export default useTags;