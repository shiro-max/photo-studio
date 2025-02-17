
import Link from "next/link"
import Error from "../Components/Error";

const CategoriesList = ( { categories }) => {

    return (
        <main>
            <div className="categories-list">
                {categories && categories.map((category)=>(
                    <Link href={category.path} key={category.documentId} className="category-list">
                        {category.name}
                    </Link>
                ))
                }
            </div>
        </main>
    )
}

export default CategoriesList