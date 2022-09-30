interface Props {
    recipes: Array<{
         name: string;
  imageURL: string;
  originalURL: string;
  steps?: string;
    }>
}

const List = ({recipes}: Props) => {
    return (
         <ul>
        {recipes.map((recipe) => (
          <li key={recipe.name}>
            <img src={recipe.imageURL} alt="title of recipe" />
            <h4>{recipe.name}</h4>
            <p>{recipe.steps?.substring(0, 100)}</p>
          </li>
        ))}
      </ul>
    )

}
export default List