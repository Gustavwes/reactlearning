
class Header extends React.Component {
    render() {
        return(
            <div>
                <h1> Indecision App</h1>
               <h2>Put your life in the hands of a cmoputer</h2>
            </div>
        ); 
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button> What should I do? </button>            
            </div>
        );
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
                <p>These are som options</p>               
            </div>
        );
    }
}

class AddOption extends React.Component{

    render(){        
        return (
            <div>
                <form>
                    <input></input>
                </form>
            </div>            
        );
    }
}
const jsx = (
    <div>
        <Header/>
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));

