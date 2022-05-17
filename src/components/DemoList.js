import React from "react";

const DemoList = (props) => {
 console.log('DemoList Runing');
  const { items} = props;
 
    const red =   items.sort((a,b) => a - b);
  

  return (
      <div>
        <ul>
             {red.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
  )


}
export default React.memo(DemoList)