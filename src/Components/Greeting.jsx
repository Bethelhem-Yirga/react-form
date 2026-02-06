// Destructuring props (better way)
function Greeting({ name, age }) {
    return (
        <div>
            <h1>Hello, {name}! Age: {age}</h1>
            <h1>Welcome to My Website!</h1>
        </div>
    );
}
export default Greeting;