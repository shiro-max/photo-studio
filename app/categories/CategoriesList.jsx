
import Link from "next/link"

const CategoriesList = ({ data }) => {
    const categories = { data }

    return (
        <div className="category-list">
            {categories?.data && categories?.data.map((category) => (
                <Link href={category.path} key={category.documentId} className="category-list">
                    {category.name}
                </Link>
            ))
            }
        </div>
    )
}

export default CategoriesList