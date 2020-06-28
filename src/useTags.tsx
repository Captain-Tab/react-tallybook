import {useState} from 'react';
import createId from './lib/createId';

const defaultTags = [
  {id: createId(), name: '衣服'},
  {id: createId(), name: '饮食'},
  {id: createId(), name: '住宿'},
  {id: createId(), name: '交通'},
];

// 封装一个自定义hook
const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    const index = findTagIndex(id);
    // 深拷贝对象
    const tagsClone = JSON.parse(JSON.stringify(tags));
    // 把tagsClone的第index删掉，换为{id: id, name: obj.name}
    const a = tagsClone.splice(index, 1, {id: id, name: obj.name});
    setTags(tagsClone)
  };
  return {
    tags,
    setTags,
    findTag,
    updateTag,
    findTagIndex
  };
};

export default useTags;