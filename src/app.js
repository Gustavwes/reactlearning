// JSX - JavaScript XML

const appObject = {
    title: 'Indecision App',
    content: 'This is some information',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if(option){
        appObject.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};


const appRoot = document.getElementById('app');

const removeAll = () => {
    appObject.options = [];
    render();
}

const render = () => {
    const template =(
        <div>
            <h1>{appObject.title}</h1>
            {appObject.content && <p>{appObject.content}</p>}
            <p>{appObject.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            <p>{appObject.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>   
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();
