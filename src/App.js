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
      <br></br>
    </div>
  );
}

export default App;
