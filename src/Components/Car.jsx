// src/Components/Car.jsx
function Car(props) {
    return (
        <div>
            <h1>Car Component</h1>
            <p>Name: {props.carInfo.carName}</p>
            <p>Model: {props.carInfo.model}</p>
            <p>Color: {props.carInfo.color}</p>
            <p>Year: {props.carInfo.year}</p>
        </div>
    );
}

export default Car;