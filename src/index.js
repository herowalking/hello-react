import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Item from './components/ES5Component';
import ItemEs6 from './components/ES6Component';
import MyDOM from './DOM/dom';
import MyEvent from './event/myEvent';

// import Calculator from './reactBoiling/calculator';
import Calculator from './eventBoiling/calculator';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <div>
        {/*<App />*/}
        {/* <Item flag={false} />
        <ItemEs6 flag={true} />
        <MyDOM />
        <MyEvent /> */}
        <Calculator />
    </div>, 
    document.getElementById('root'));
registerServiceWorker();
