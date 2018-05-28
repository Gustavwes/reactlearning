// JSX - JavaScript XML

const appObject = {
    title: 'Indecision App',
    content: 'This is some information',
    options: ['One', 'Two']
};
const template =(
    <div>
        <h1>{appObject.title}</h1>
        {appObject.content && <p>{appObject.content}</p>}
        <p>{appObject.options.length > 0 ? 'Here are your options:' : 'No options'}</p>    
    </div>
);

let count = 0;
const addOne = () => {
    console.log('addOne');
}
const minusOne = () => {
    console.log('minusOne');
}
const reset = () => {
    console.log('reset');
}
const templateTwo = (
    <div>
        <h1>Count: {count} </h1>
        <button onClick={addOne}>+1</button>     
        <button onClick={minusOne}>-1</button>   
        <button onClick={reset}>Reset</button>
    </div>
); 

const appRoot = document.getElementById('app');
//ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);