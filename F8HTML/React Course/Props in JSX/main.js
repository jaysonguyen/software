function Button({ title, isPrimary }) {
    console.log(isPrimary)
    return <button>{title}</button>
}


function Input({ label, ...inputProps }) {
    return (
        <div>
            {label}
            <input {...inputProps} />
        </div>
    )
}

function App() {
    const title2 = "Click me2";
    const isPrimary = true;




    {/* Spread/Rest */ }
    return (
        <div id="wrapper">
            <Input
                label="Full Name"
                placeholder={"Enter name"}
                title="Day la input"
                onFocus={() => {
                    console.log(Math.random())
                }}
            />
        </div>
    )

    //Trường hơp 1
    return (
        <div id="wrapper">
            <Button
                //title="Click Me!" /* String literal */
                title={title2}
                isPrimary={isPrimary}
            />


        </div>
    )
}


//? Render props

function List({ data, children }) {
    console.log(children)
    return (
        <ul>
            {data.map((car, index) => children(car, index))}
        </ul>
    )
}


function AppCar() {
    const cars = ["BMW", "Honda", "Mazda"];

    return (
        <div className="wrapper">
            <List data={cars}>
                {(item, index) => <li key={index}>{item}</li>}
            </List>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(AppCar());
