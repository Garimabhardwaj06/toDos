import React, {useState} from 'react';
import CustomToDos from './customHooks'

const handleSubmit=(e,todos,setTodos,input,setInput)=>{
  e.preventDefault()
  setTodos([...todos,{item: input,isCompleted:false}])
  setInput("")
}
function getIncompleteItems(value) {
  return value.isCompleted == false && value.item !="";
}
function getItems(value) {
  return value.item !="";
}

function App() {
  const [todos,setTodos]= useState([{item: "",isCompleted:false}])
  const [input,setInput]= useState("")
  
  const totalItems = todos.filter(getItems)
  // React.useEffect(() => {
  //   localStorage.setItem('myValueInLocalStorage', todos);
  // }, [todos]);

  let toggleStatus=(todoItem)=>{
    for(let i=0;i<todos.length;i++){
      if(todos[i]["item"]==todoItem[0]){
        console.log(!todoItem[1])
        todos[i]["isCompleted"]=!todoItem[1]

        setTodos([...todos])
      }
    }


  }
  return (
    <div className="App">
      Total Todos Remaining : {todos.filter(getIncompleteItems).length} out of {totalItems.length}
      <form onSubmit={(e)=>handleSubmit(e,todos,setTodos,input,setInput)}>
        <input onChange={(e)=>setInput(e.target.value)} value={input}/>

        {/* localStorage.setItem('myValueInLocalStorage', event.target.value); */}
        
        <button>Add Item</button>
      </form>
      <h3> The To Do items are: </h3>
      {totalItems.map(todo=>(
        <CustomToDos todoItem={todo.item} status={todo.isCompleted} toggleStatus={toggleStatus} />
      ))}
    </div>
  );
}

export default App;
      


