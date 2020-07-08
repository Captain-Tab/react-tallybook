import {useEffect,useState} from 'react';
import createId from '../lib/createId';
import useUpdate from './useUpdate';

// 封装一个自定义hook
const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  // 组件挂载时执行，下面的代码
  useEffect(()=>{
    let localTags = ( JSON.parse(window.localStorage.getItem('tags') || '[]'))
    if(localTags.length === 0){
      localTags = [
        {id: createId(), name: '衣服'},
        {id: createId(), name: '饮食'},
        {id: createId(), name: '住宿'},
        {id: createId(), name: '交通'}
      ]
    }
    setTags(localTags)
  }, [])
  useUpdate(()=>{
    window.localStorage.setItem('tags', JSON.stringify(tags))
  }, tags)
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
    console.log('set Item')
    setTags(tags.map( tag =>{
      return tag.id === id ? {id, name: obj.name} : tag
    }))
    // const index = findTagIndex(id);
    // // 深拷贝对象
    // const tagsClone = JSON.parse(JSON.stringify(tags));
    // // 把tagsClone的第index删掉，换为{id: id, name: obj.name}
    // tagsClone.splice(index, 1, {id: id, name: obj.name});
    // setTags(tagsClone);
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id))
    // const index = findTagIndex(id);
    // // 深拷贝对象
    // const tagsClone = JSON.parse(JSON.stringify(tags));
    // tagsClone.splice(index, 1);
    // setTags(tagsClone);
  };
  const addTag = () => {
    const tagName = window.prompt('新增的标签为');
    if (tagName !== null && tagName !== '') {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
    if(tagName === ''){
     window.alert('提示: 添加失败，输入不能为空')
    }
  };
  const getName = (id:number) =>{
    const tag = tags.filter(t=>t.id ===id)[0]
    return tag ? tag.name : ''
  }
  return {
    tags,
    setTags,
    findTag,
    updateTag,
    deleteTag,
    addTag,
    findTagIndex,
    getName
  };
};

export default useTags;