import { useState } from 'react';

const useData = () => {
  const generateId = () => {
    return Math.floor(Math.random() * 90000) + 10000;
  };

  const [data, setData] = useState([
    { id: '00001', task: 'Wake up', complete: 'false' },
    { id: '00002', task: 'Eat breakfast', complete: 'false' },
    { id: '00003', task: 'Go to work', complete: 'false' },
  ]);

  const addData = (task) => {
    const id = generateId().toString();
    const complete = 'false';
    const node = { id, task, complete };

    const tmpData = data.concat([node]);
    setData(tmpData);
  };

  const removeData = (nodeId) => {
    const tmpData = data.filter((elem) => {
      return elem.id !== nodeId;
    });
    setData(tmpData);
  };

  return [data, setData, addData, removeData];
};

export default useData;
