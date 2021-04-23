import React, { useState } from 'react';
import Calendar from 'react-calendar';
 
function MyApp() {
  const [value, onChange] = useState(new Date());
  
  return (
    <div className="class1 class2">
      <Calendar
        onChange={onChange}
        value={value}
       
      />
      {console.log(value)}
    </div>
  );
}
export default MyApp;
