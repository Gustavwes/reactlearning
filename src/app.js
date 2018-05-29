// JSX - JavaScript XML

const appObject = {
    title: 'Indecision App',
    content: 'This is some information',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
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

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * appObject.options.length);
    const option = appObject.options[randomNumber];
    alert(option);
}
const numbers = [55, 101, 1000];

const render = () => {
    const template = (
        <div>
            <h1>{appObject.title}</h1>
            {appObject.content && <p>{appObject.content}</p>}
            <p>{appObject.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            
            <button disabled = {appObject.options.length===0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>

            <ol>
                {
                    appObject.options.map((item) => {
                        return <li key={item}>{item}</li>;
                    })
                }
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
