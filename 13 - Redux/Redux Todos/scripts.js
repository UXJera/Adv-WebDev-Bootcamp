// We need a reducer (rootReducer)
// We need some redux store and initalState
// We need a way to change the initalState

const initalState = {
  todos: [],
  id: 0
}

function rootReducer(state = initalState, action){
  switch(action.type){
    case "ADD_TODO":
      var newState = {...state}
      newState.id++;
      return {
        ...newState,
        todos: [
          ...newState.todos, // copy all existing todos
            {
              task: action.task, // add another todo with task matching the dispatch object,
              id: newState.id   // and id matching the id we created above
            }
          ]
      }
      // add a todo
    case "REMOVE_TODO":
      // remove a todo
    default:
      return state;
  }
}

const store = Redux.createStore(rootReducer)

$(document).ready(function(){
    //When form is submitted, add dispatch
    $("form").on("submit", function(e){
      e.preventDefault();
      let newTask = $("#task").val()
      store.dispatch({
        type: "ADD_TODO",
        task: newTask
      })
      $("form").trigger("reset") // Reset form after click
    });
});
