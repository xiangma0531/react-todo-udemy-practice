type Props = {
  todos: string[]
  onClick: Function
}

export const CompleteTodos = (props: Props) => {
  const { todos, onClick } = props;
  return (
    <div className='complete-area'>
      <p className='title'>完了したTodo</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className='list-row'>
              <p className='todo-item'>{todo}</p>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};