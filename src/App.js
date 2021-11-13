import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import ListAdd from './ListAdd';
import ListView from './listView';
import Container from '@mui/material/Container';

function App() {
  let shoppingList = useSelector(state => state.shoppingList);
  return (
    <div>
      <Container maxWidth="lg" style={{padding: "20px"}}>
      <ListAdd></ListAdd>
      <br/>
      <ListView></ListView>
      </Container>
    </div>
  );
}

export default App;
