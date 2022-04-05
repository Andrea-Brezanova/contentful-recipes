export default function Recipe(props) {

    return (
        <div>
            <p>{props.recipe.fields.name}</p>
            <p>{props.recipe.fields.ingredients}</p>
            <img src={`https://${props.recipe.fields.image.fields.file.url}`}></img>
          </div>
    )
}