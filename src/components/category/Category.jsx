import "./category.scss"

export default function Category({category}) {
    console.group(category);
    const {imageUrl, title} = category;
    return (
        <div className='category-container'>
            <div className='background-image' style={{
                    backgroundImage: `url(${imageUrl})`
                }}>
                </div>
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop now!</p>
            </div>
        </div>
    );
}