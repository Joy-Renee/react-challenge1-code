
import './App.css';
import Addtransaction from './components/Transaction';
import Defaultdata from './components/default';

function App({formDefault}) {
  return (
    <div >
      <Addtransaction
      search = {"search"}
      date = {"date"}
      description = {"description"}
      category = {"category"}
      amount = {"amount"}
      />

      <Defaultdata 
      formDefault={formDefault}
      />
    </div>
    
  )
}


export default App;
