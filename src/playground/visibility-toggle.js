

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }         

        });
    };

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>These are some details!</p>
                    </div>
                )}
            </div>

        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// //My old solution
// const appRoot = document.getElementById('app');
// let textContent = {
//         content: 'This is now visible'
//     };
//     let buttonText = {
//             text:'Hide details'
// };

// const showHide = () => {
//     const button = document.getElementById('button');
//         if(textContent.content == '') {
//         textContent.content = 'This is now visible';
//         buttonText.text = 'Hide details';
//     }
//     else {
//             textContent.content = '';
//             buttonText.text = 'Show details';
//         }
//         render();
//     }


//     const render = () => {
//             const template = (
//                     <div>
//                     <h1>Visibility Toggle</h1>
//                         <button id="button" onClick={showHide}>{buttonText.text}</button>
//                         <p>{textContent.content}</p>
//                     </div>
//                 );
//                 ReactDOM.render(template, appRoot);
//             };

//             render();


            // // Lesson solution:

            // let visibility = false;
            // const hideShow = () => {
            //     //visibility == false ? visibility = true : visibility = false;
            //     visibility = !visibility; //works the same way as above
            //     render2();
            // }

            // const render2 = () => {
            //     const jsx = (
            //         <div>
            //             <h1>Visibility Toggle</h1>
            //             <button onClick={hideShow}>
            //                 {visibility ? 'Hide details' : 'Show details'}
            //             </button>
            //             {visibility && (
            //                 <div>
            //                     <p>These are some details!</p>
            //                 </div>
            //             )}
            //         </div>
            //     );

            //     ReactDOM.render(jsx, appRoot);
            // };

            // render2();