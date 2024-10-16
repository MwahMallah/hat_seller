import Category from "../category/Category"
import "./categories.scss"


export default function Categories({categories}) {
    return (<>
        {categories.map(category => 
            <Category key={category.id} category={category}></Category>
        )}
    </>)
}