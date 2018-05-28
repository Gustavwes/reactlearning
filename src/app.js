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


const user ={
    name : 'Gustav',
    age : 19,
    location : 'Stockholm'
};


function getLocation(location){
    if (location){
        return <p>Location: {location}</p>;
    }
}
const template2 =(
    <div>
        <h1>Name: {user.name ? user.name :'No name provided'} </h1>
         {(user.age && user.age > 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}               
    </div>
);

const appRoot = document.getElementById('app');
//ReactDOM.render(template, appRoot);
ReactDOM.render(template, appRoot);