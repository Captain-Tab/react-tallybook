import {useEffect, useState} from 'react';
import useUpdate from './useUpdate';


type NewRecordItem = {
  tagIds: number[],
  note: string
  category:  '-' | '+',
  amount: number,
}

type RecordItem = NewRecordItem & {
  createdAt:string // ISO 8601 标准的字符串
}

// type NewRecordItem = Omit<RecordItem, 'createdAt'>  等价于上面的代码


const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([])

  useEffect( ()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  },[])

  useUpdate(()=>{
    window.localStorage.setItem('records', JSON.stringify(records))
  }, [records])

  const addRecord = ( newRecord: NewRecordItem) =>{
    const record  = {...newRecord, createdAt:(new Date()).toISOString()}
    setRecords([...records, record])
  }

  return {
    records,
    addRecord
  }
};

export default useRecords