import React from "react";
import "/Users/manueltorres/Documents/WEB_DEVELOPMENT/Notes/app/styles /notes.css";
import FilterButton from "./filterbutton._index";
import Form from "./form._index";
import Todo from "./todo._notes";



export default function Notes(props: any) {
  
  const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false },
  ];

  function addTask(name) {
    alert(name);
  }
  
//   const taskList = DATA?.map((task) => (
//     <Todo
//     id={task.id}
//     name={task.name}
//     completed={task.completed}
//     key={task.id}
//   />
// )); 

  const taskList = DATA?.map((task) => (
    <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
)); 


console.log(DATA);

  return (

      <main>
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      {/* <Form /> */}
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
      </main>

  );
}
