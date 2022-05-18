import useData from "./hooks/use-data";
import TodoBox from "./components/todo-box";

export default function Index() {
  const [data, setData, addData, removeData] = useData();

  return (
    <TodoBox
      data={data}
      setData={setData}
      addData={addData}
      removeData={removeData}
    />
  );
}
