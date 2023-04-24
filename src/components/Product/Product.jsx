


export const Product = ({productCard}) => {
    // console.log(productCard)
    return (
        <div>
            <img
            src={productCard.imgUrl}
            alt={productCard.name}
            width="640"
            />
            <h2 >{productCard.name}</h2>
            <p>{productCard.price}</p>
            <button type="button">Add to cart</button>
        </div>
    )
}
