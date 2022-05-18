import TodoList from './todo-list';
import TodoForm from './todo-form';

const TodoBox = (props) => {
  const handleToggleComplete = (nodeId) => {
    for (var i in props.data) {
      if (props.data[i].id == nodeId) {
        props.data[i].complete =
          props.data[i].complete === 'true' ? 'false' : 'true';
        break;
      }
    }
    props.setData(props.data);
  };

  return (
    <div className="well">
      <h1 className="vert-offset-top-0">To do:</h1>
      <TodoList
        data={props.data}
        removeNode={props.removeData}
        toggleComplete={handleToggleComplete}
      />
      <TodoForm onTaskSubmit={props.addData} />
    </div>
  );
};

export default TodoBox;
