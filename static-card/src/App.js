import logo from './logo.svg';
import './App.css';
import {Mobile_OS, Mobile_Manufacturers} from './static_card';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Mobile Operating System</h1>
      <Mobile_OS />
      <h1>mobile Manufacturer</h1>
      <Mobile_Manufacturers />
    </div>
  );
}

export default App;
