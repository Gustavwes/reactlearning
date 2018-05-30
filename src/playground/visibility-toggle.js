

const appRoot = document.getElementById('app');
let textContent = {
    content: 'This is now visible'
};
let buttonText = {
    text:'Hide details'
};

const showHide = () => {
const button = document.getElementById('button');
    if(textContent.content == '') {
        textContent.content = 'This is now visible';
        buttonText.text = 'Hide details';
    }
    else {
        textContent.content = '';
        buttonText.text = 'Show details';
    }
    render();
}


const render = () => {
    const template = (
        <div>
        <h1>Visibility Toggle</h1>
            <button id="button" onClick={showHide}>{buttonText.text}</button>
            <p>{textContent.content}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();


// Lesson solution:

let visibility = false;
const hideShow = () => {
    //visibility == false ? visibility = true : visibility = false;
    visibility = !visibility; //works the same way as above
    render2();
}

const render2 = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={hideShow}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>These are some details!</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, appRoot);
};

render2();