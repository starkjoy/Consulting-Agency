
"use client"

export default function CategoryPill({variant, mycat, CatClick, id, catvalue}) {
    return (
        <div>
            <div onClick={() => CatClick(id)} className={ variant === "category" ? "category" : mycat }>
                <p>{catvalue}</p>
            </div>
        </div>
    );
}