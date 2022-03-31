import Recipe from "./Recipe";

export default function List(props) {


    return (
        <div>
            {props.recipes.map((recipe, index) => {
        return (
          <Recipe recipe={recipe}/>
        );
      })}
        </div>
    )
}