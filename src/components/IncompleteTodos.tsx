type Props = {
  todos: string[]
  onClickComplete: Function
  onClickDelete: Function
}

export const IncompleteTodos = (props: Props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className='incomplete-area'>
      <p className='title'>未完了のTodo</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className='list-row'>
              <p className='todo-item'>{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};