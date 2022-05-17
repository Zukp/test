import React from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import { useState,useCallback,useMemo} from 'react'
import DemoOutput from './components/DemoOutput';
import DemoList from './components/DemoList';

function App() {

  const [isShowText,setIsShowText] = useState(false)
  const [isLetShow,setIsLetShow] = useState(false)
   
 console.log('App Runing')


  const toggelParagrafHandler = useCallback(() => {
    if(isLetShow){
   setIsShowText((preState) => !preState)
    }
  },[isLetShow]);

  const letShowTextHandler = () => {
   setIsLetShow(true)
  }

  const listItems = useMemo(() => [5,6,7,8,3,2], [])
  return (
    <div className="app">
      <Button onClick={toggelParagrafHandler} />
      <DemoOutput show={isShowText} /> 
      <Button onClick={letShowTextHandler}>Let Show Text</Button>
      <h1>Hi there!</h1>
      <DemoList items={listItems} />
    </div>
  );
}

export default App;





