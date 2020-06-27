import {useState} from 'react';

// 封装一个自定义hook
const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(
    [
      {id: 1, name: '衣服'},
      {id: 2, name: '饮食'},
      {id: 3, name: '住宿'},
      {id: 4, name: '交通'},
]
)
  ;
  return {
    tags: tags,
    setTags: setTags
  };
};

export default useTags;