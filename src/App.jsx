import './App.css'

function App() {
  return (
    <>
     <div className="container">
        <TodoTip />
     </div>
    </>
  )
}

function TodoTip() {
  return (
    <>
    <div className="todoTop">
        <input type="text" className="todoInput" placeholder="Add a new task"/>
        <button><img src="images/add_button.png" alt=""/></button>
    </div>

    <h4>Tasks to do</h4>
    <ul id="liste"></ul>
    </>
  )
}

export default App
