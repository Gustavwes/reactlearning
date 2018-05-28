'use strict';

// JSX - JavaScript XML

var appObject = {
    title: 'Indecision App',
    content: 'This is some information',
    options: ['One', 'Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObject.title
    ),
    appObject.content && React.createElement(
        'p',
        null,
        appObject.content
    ),
    React.createElement(
        'p',
        null,
        appObject.options.length > 0 ? 'Here are your options:' : 'No options'
    )
);

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};
var minusOne = function minusOne() {
    console.log('minusOne');
};
var reset = function reset() {
    console.log('reset');
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count,
        ' '
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'Reset'
    )
);

var appRoot = document.getElementById('app');
//ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
