import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Hii from './components/Hii';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Person from './components/Person';
import Stylesheet from './components/StyleSheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
function App() {
  return (
    <div className="App">

      <Form/>
      <LifecycleA/>
      
      {/*<Inline/>*/}
      {/*<Greet name="Bruce" heroName="Batman">*/}
        {/*<p>This is children props</p>*/}
        {/*<ParentComponent/>8*/}
        {/*<UserGreeting/>*/}
        {/*<NameList/>*/}
       {/*<Stylesheet primary={false}/>*/}
      {/*</Greet>
      <Greet name="Clark" heroName="Superman"/>
      <Message/>
      <Counter/>
      <EventBind/>
      <FunctionClick></FunctionClick>
      <ClassClick/>
      <Welcome name ="Clarke" heroName="Superman"/>
      <Greet name ="Clarke" heroName="Superman"></Greet>
      <button>Button</button>
      <Greet name="Barry" heroName="Flash" />
      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name ="Clarke" heroName="Superman"/>
      <Welcome name="Barry" heroName="Flash"/>
      {/*<Hello/>*/}
    </div>
  );
}

export default App;
