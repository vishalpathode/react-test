import React from 'react';
import './App.css';
import Greet from './components/Greet';
import WelcomeClass from './components/WelcomeClass';
import HelloJSX from './components/HelloJSX';
import GreetChildrenComponent from './components/GreetChildrenComponent';
import WelcomeClassProps from './components/WelcomeClassProps';
import ComponClassState from './components/CompoClassState';
import CounterStateCallback from './components/CounterStateCallback';
import CounterStateMultipleCalls from './components/CounterStateMultipleCalls';
import PropsDestructure from './components/PropsDestructure';
import PropsClassDestructure from './components/PropsClassDestructure';
import FunctionClick from './components/FunctionClick';
import ClassEvenHandling from './components/ClassEvenHandling';
import EventBindingClass from './components/EventBindingClass';
import MethodAsPropsParent from './components/MethodAsPropsParent';
import IfElseRendering from './components/IfElseRendering';
import IfElseRendering2 from './components/IfElseRendering2';
import IfElseRendering3 from './components/IfElseRendering3';
import ListRendering from './components/ListRendering';
import CSS from './components/CSS';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import LifeCycleUpdateA from './components/LifeCycleUpdateA';
import FragmentDiv from './components/FragmentDiv';
import RefsDemo from './components/RefsDemo';
import PortalsDemo from './components/PortalsDemo';
import ErrorBoundryComponent from './components/ErrorBoundryComponent';
import ErrorBoundary from './components/ErrorBoundary';
import ContextComponentA from './components/ContextComponentA';
import { PropsProvider } from './components/ContextComponentCreate';
import AxiosHttpGet from './components/AxiosHttpGet';
import AxiosHttpPost from './components/AxiosHttpPost'

function App() {
  return (
    <div className="App">
      Hi there,
      <br></br>
      <Greet></Greet>
      <Greet name='Vishal'last='Pathode'></Greet>
      <PropsDestructure name='vishal' age='26' ></PropsDestructure>
      <PropsClassDestructure name='vishal' age='26'></PropsClassDestructure>
      <GreetChildrenComponent name='Vish'> <p>Hi, I'm children of GreetChildrenComponent..</p></GreetChildrenComponent>
      <WelcomeClass></WelcomeClass>
      <HelloJSX></HelloJSX>
      <WelcomeClassProps name='vishpath'></WelcomeClassProps>
      <ComponClassState></ComponClassState>
      <CounterStateCallback></CounterStateCallback>
      <CounterStateMultipleCalls></CounterStateMultipleCalls>
      <FunctionClick></FunctionClick>
      <ClassEvenHandling></ClassEvenHandling>
      <EventBindingClass></EventBindingClass>
      <MethodAsPropsParent></MethodAsPropsParent>
      <IfElseRendering></IfElseRendering>
      <IfElseRendering2></IfElseRendering2>
      <IfElseRendering3></IfElseRendering3>
      <ListRendering></ListRendering>
      <CSS></CSS>
      <Form></Form>
      <span> ---- for LifeCycle see console ---- </span>
      <LifeCycleA></LifeCycleA>
      <LifeCycleUpdateA></LifeCycleUpdateA>
      <FragmentDiv></FragmentDiv>
      <RefsDemo></RefsDemo>
      <PortalsDemo></PortalsDemo>

      {/* if you want to show error ui page(error.html/js) or something else after getting error on a component 
        then use ErrorBoundary, it will not give coding error on ui.
        But in dev it will show you code error, but in production it will use fall back function/ui
        according to your code.
        In dev, if you want t see fall back function/ui then close the error code page, you will see
        it just on top right of the error code page of browser.
        You must separate each component with Error Boundary, else the other component which are
        under Error Boundary will be replaced by fall back function/ui.
        */
      }
      <ErrorBoundary>
        <ErrorBoundryComponent name='vish'></ErrorBoundryComponent>
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorBoundryComponent name='vishpath'></ErrorBoundryComponent>
      </ErrorBoundary>

      {/* we want to pass prop directly to  ContextComponentC, 
      bcz ContextComponentA and ContextComponentB don't need this prop 
      Now this 'value' will be accessible from ContextComponentA and its child components 
      */}
      <PropsProvider value='vishal'>
        <ContextComponentA></ContextComponentA>
      </PropsProvider>

      <AxiosHttpGet></AxiosHttpGet>
      <AxiosHttpPost></AxiosHttpPost>
      <br></br>
    </div>
  );
}

export default App;
