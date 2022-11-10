// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    return (
        <div className="BakeryItem">
            <img className="BakeryImage" src={props.image} />
            <div className="description">
                <p>{props.name}</p>
                <p>{props.description}</p>
            </div>
            <div className="price">
                <p>${props.price}</p>
                <button onClick={() => {props.onclick(props.index)}}>Add to Cart</button>
            </div>
        </div>
    )
}