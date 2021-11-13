import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import ListAdd from './ListAdd';
import ListView from './ListView';
import Container from '@mui/material/Container';
import ListSaveLoad from './ListSaveLoad';

function App() {
  let shoppingList = useSelector(state => state.shoppingList);
  return (
    <div>
      <Container maxWidth="lg" style={{padding: "20px"}}>
      <ListAdd></ListAdd>
      <br/>
      <ListView></ListView>
      <br/>
      <ListSaveLoad></ListSaveLoad>
      </Container>
    </div>
  );
}

export default App;
