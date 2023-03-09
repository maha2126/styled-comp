import './App.css';
import { BigButton, MyButton, TextCont } from './components/Button';

function App() {
  return (
    <div className="App">
      <MyButton border="4">Hello</MyButton>
      <MyButton border="6">Other</MyButton>
      <BigButton border="4">Hello</BigButton>
      <TextCont>Hello mashmellow Hello mashmellow Hello mashmellow Hello mashmellow Hello mashmellow Hello mashmellow Hello mashmellow Hello mashmellow</TextCont>
    </div>
  );
}

export default App;
