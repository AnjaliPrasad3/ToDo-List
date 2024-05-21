import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Todos from './components/Todos';

function App() {
  const onDone = () => {
    console.log("task completed! :)")
  }
  let todos = [
    {
      sno: 1,
      title: "react",
      desc: "learn react"
    },
    {
      sno: 2,
      title: "redux",
      desc: "learn redux"
    },
    {
      sno: 3,
      title: "git",
      desc: "learn git"
    },
    {
      sno: 4,
      title: "java development",
      desc: "learn java development"
    }
  ]
  return (
    <>
      <Header title="ToDo List" searchBar={true}/>
      <Todos todos={todos} onDone={onDone}/>
      <Footer />
    </>
  );
}

export default App;
