"use strict";

module.exports.getTodos = async (event) => {
  let x = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
      getTodosFromDatabase(),
      null,
      2
    ),
  };
  console.log(x)
  console.log(getTodosFromDatabase())
return x
};
module.exports.getTodo = async (event) => {
  let allTodos = getTodosFromDatabase()
  let foundTodo = allTodos.find((todo)=>{
    return todo.id == event.pathParameters.id
  })




  return {
    statusCode: 200,
    body: JSON.stringify(
      foundTodo
      ,
      null,
      2
    ),
  };
};
const getTodosFromDatabase =() => {
  return [  {
  "userId": 10,
  "id": 197,
  "title": "dignissimos quo nobis earum saepe",
  "completed": true
},
{
  "userId": 10,
  "id": 198,
  "title": "quis eius est sint explicabo",
  "completed": true
},
{
  "userId": 10,
  "id": 199,
  "title": "numquam repellendus a magnam",
  "completed": true
},
{
  "userId": 10,
  "id": 200,
  "title": "ipsam aperiam voluptates qui",
  "completed": false
}
]}