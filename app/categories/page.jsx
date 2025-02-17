import { getCategories } from "../api/fetch"
import CategoriesList from "./CategoriesList";

const Categories = async () => {
    const categoriesData = await getCategories();
    
    return (
        <CategoriesList categories={categoriesData}/>
    )
}

export default Categories