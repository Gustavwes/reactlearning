'use strict';

// JSX - JavaScript XML

var appObject = {
    title: 'Indecision App',
    content: 'This is some information',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        appObject.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var appRoot = document.getElementById('app');

var removeAll = function removeAll() {
    appObject.options = [];
    render();
};

var render = function render() {
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
        ),
        React.createElement(
            'p',
            null,
            appObject.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item one'
            ),
            React.createElement(
                'li',
                null,
                'Item two'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
