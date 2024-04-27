import logo from './logo.svg';
import './App.css';
import Addtransaction from './components/Transaction';

function App() {
  return (
    <div >
      <Addtransaction
      search = {"search"}
      date = {"date"}
      description = {"description"}
      category = {"category"}
      amount = {"amount"}
      />
    </div>
    
  )
}


export default App;
