
const Form = {
    Input() {
        return <input placeholder="Input"/>
    },
    Checkbox() {
        return <input type="checkbox"/>
    }
}


function Button({title, href, onClick}) {
    let Component = 'button'
    const props = {};
    
    if(href){
        props.href = href;
        Component = 'a';
    }
    if(onClick) {
        props.onClick = onClick;
    }
    
    return (
        <Component {...props}>{title}</Component>
    )
}

function App({title, content}) {
    const type = 'Input';
    const Component = Form[type]
    let firstAccess = true
    return (
        <div id="wrapper">
          <Form.Checkbox />
          <Component />

        {/* Tùy biến một function */}
        <Button 
            title = "Click me!"
            href="https://fullstack.edu.vn/"
            onClick={() => console.log(Math.random())}
        />
        {firstAccess && <h1>Welcome to F8</h1>}
        <h1>{title || content}</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App content="Content"></App>);