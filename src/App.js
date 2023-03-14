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
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import Columns from './components/Columns';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import Input from './components/Input';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';

function App() {
  return (
    <div className="App"> 
    {/*<CounterTwo render={(count, incrementCount) => (
      <ClickCounterTwo count={count} incrementCount={incrementCount}/>
    )}/>

    <CounterTwo render={(count, incrementCount) => (
      <HoverCounterTwo count={count} incrementCount={incrementCount}/>
    )}/> */}


     {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
  <User render = {(isLoggedIn) => isLoggedIn ? 'Arijit' : 'Guest'}/> */}
     {/* <ClickCounter name='Arijit'/> 
      <HoverCounter/> */}
      {/*<FocusInput/>*/}
      {/*<PortalDemo/>*/}
      {/*<ErrorBoundary>
      <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Joker"></Hero>
      </ErrorBoundary>*/}
     

      {/*<FRParentInput/>*/}

      {/*<RefsDemo/>*/}
      {/*<FragmentDemo/>*/}
      {/*<Table/>*/}
      {/*<ParentComp/>*/}
      {/*<Form/>*/}
      {/*<LifecycleA/>*/}
      
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
