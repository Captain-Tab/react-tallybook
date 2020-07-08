import {useEffect, useRef} from 'react';

const useUpdate = (fn:()=> void , dependency: any[])=> {
  const count = useRef(0)
  useEffect(() => {
    count.current += 1
  })
  // 第二次渲染的时候，读取localstorage的数据
  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
  }, [fn, dependency]); // 不可变数据
}

export default useUpdate