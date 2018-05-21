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
      let todos = state.todos.filter(val => val.id !== +action.id)
      return {...state, todos};
      // remove a todo
      return state;
    default:
      return state;
  }
}

const store = Redux.createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

$(document).ready(function(){
  $('ul').on('click', 'button', function(e){
    store.dispatch({
      type: "REMOVE_TODO",
      id: $(e.target).attr('id')
    })
    $(e.target).parent().remove()
  })
    //When form is submitted, add dispatch
    $("form").on("submit", function(e){
      e.preventDefault();
      let newTask = $("#task").val();
      store.dispatch({
        type: "ADD_TODO",
        task: newTask
      });

      let currentState = store.getState();
      let $newLi = $("<li>", {
        text: newTask
      });
      let $newButton = $("<button>", {
        text: "X",
        id: currentState.id
      })
      $newLi.append($newButton)
      $('#todos').append($newLi)
      $("form").trigger("reset") // Reset form after click
    });
});
