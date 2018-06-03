class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}


class Header extends React.Component {

    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        ); 
    }
}

class Action extends React.Component {
     handlePick(){
         console.log('hej');
     }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}> What should I do? </button>            
            </div>
        );
    }
}

class Options extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll(){
        console.log(this.props.options)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText ={option}/>)
                } 
                <Option />              
            </div>
        );
    }
}

class Option extends React.Component {
    
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault();

        const optionText = e.target.elements.optionInput.value.trim();

        if(optionText){
            alert('something was typed!' + optionText);
        }else{
            alert('we didnt find shit');
        }
    }
    render(){        
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type = "text" name="optionInput"></input>
                    <button>Add Option</button>
                </form>
            </div>            
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

