import {useState} from 'react';
import createId from './lib/createId';

const defaultTags = [
  {id: createId(), name: '衣服'},
  {id: createId(), name: '饮食'},
  {id: createId(), name: '住宿'},
  {id: createId(), name: '交通'},
]

// 封装一个自定义hook
const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags)
  ;
  return {
    tags: tags,
    setTags: setTags
  };
};

export default useTags;