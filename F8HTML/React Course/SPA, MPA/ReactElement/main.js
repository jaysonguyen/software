//? React Element type: String, function/class
//* Wrapper
/* 
    * Header -> Header component
    * COntent -> Content component
    * Footer -> Footer component
*/

function Header() {
    return (
        <div className="header">Javascript</div>
    )
}

class Content extends React.Component {
    render() {
        return (
            <div className="Footer"> Class ReactJS</div>
        )
    }
}

const app = (
    <div className="wrapper">
        <Header />
        <div className="content">ReactJS</div>
        <Content /> 
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>{app}</h1>);

console.log(app)