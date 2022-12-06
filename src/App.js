import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";
import './App.css';
import MainPage from './components/mainPage/MainPage';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <MainPage />
      </div>
    </DndProvider>
  );
}

export default App;
