import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Todos from './components/Todos';

function App() {
  return (
    <>
      <Header title="ToDo List" searchBar={true}/>
      <Todos />
      <Footer />
    </>
  );
}

export default App;
