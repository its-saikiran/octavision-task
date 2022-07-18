import './App.css';
import HandleRoute from './COMPONENTS/HandleRouter'
import CrudState from './CRUD/CrudState';

function App() {
  return (
    <div className="App">
      <CrudState>
          <HandleRoute />
      </CrudState>
    </div>
  );
}

export default App;
