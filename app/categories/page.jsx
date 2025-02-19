
import CategoriesList from "./CategoriesList";

const Categories = ({ data }) => {

    const categoriesData = data;

    return (
        <div className="category-menu">
            <CategoriesList data={categoriesData} />
        </div>
    )
}

export default Categories