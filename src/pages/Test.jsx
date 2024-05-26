import { useMemo } from "react";
import { useState } from "react";

// categories -> kategoriyalar royhati
const categories = [
    {
        id: 1,
        link: "#",
        title: "Link 1",
    },
    {
        id: 2,
        link: "#",
        title: "Link 2",
    },
    {
        id: 3,
        link: "#",
        title: "Link 3",
    },
    {
        id: 4,
        link: "#",
        title: "Link 4",
    },
    {
        id: 5,
        link: "#",
        title: "Link 5",
    },
    {
        id: 6,
        link: "#",
        title: "Link 6",
    },
    {
        id: 7,
        link: "#",
        title: "Link 7",
    },
    {
        id: 8,
        link: "#",
        title: "Link 8",
    },
    {
        id: 9,
        link: "#",
        title: "Link 9",
    },
    {
        id: 10,
        link: "#",
        title: "Link 10",
    },
    {
        id: 11,
        link: "#",
        title: "Link 11",
    },
    {
        id: 12,
        link: "#",
        title: "Link 12",
    },
];

// subCategories -> kategoriyalarni ichindagi kategoriyalar royhati
const subCategories = [
    {
        id: 1,
        link: "#",
        title: "Link 1.1",
        categoryId: 1,
        children: [
            {
                id: 1,
                link: "#",
                title: "Link 1.1.1",
            },
            {
                id: 2,
                link: "#",
                title: "Link 1.1.2",
            },
            {
                id: 3,
                link: "#",
                title: "Link 1.1.3",
            },
            {
                id: 4,
                link: "#",
                title: "Link 1.1.4",
            },
        ],
    },
    {
        id: 2,
        link: "#",
        title: "Link 1.2",
        categoryId: 1,
        children: [
            {
                id: 1,
                link: "#",
                title: "Link 1.2.1",
            },
            {
                id: 2,
                link: "#",
                title: "Link 1.2.2",
            },
            {
                id: 3,
                link: "#",
                title: "Link 1.2.3",
            },
            {
                id: 4,
                link: "#",
                title: "Link 1.2.4",
            },
        ],
    },
    {
        id: 3,
        link: "#",
        title: "Link 1.3",
        categoryId: 2,
        children: [
            {
                id: 1,
                link: "#",
                title: "Link 1.3.1",
            },
            {
                id: 2,
                link: "#",
                title: "Link 1.3.2",
            },
            {
                id: 3,
                link: "#",
                title: "Link 1.3.3",
            },
            {
                id: 4,
                link: "#",
                title: "Link 1.3.4",
            },
        ],
    },
    {
        id: 4,
        link: "#",
        title: "Link 1.4",
        categoryId: 2,
        children: [
            {
                id: 1,
                link: "#",
                title: "Link 1.4.1",
            },
            {
                id: 2,
                link: "#",
                title: "Link 1.4.2",
            },
            {
                id: 3,
                link: "#",
                title: "Link 1.4.3",
            },
            {
                id: 4,
                link: "#",
                title: "Link 1.4.4",
            },
        ],
    },
    {
        id: 5,
        link: "#",
        title: "Link 1.5",
        categoryId: 3,
        children: [
            {
                id: 1,
                link: "#",
                title: "Link 1.5.1",
            },
            {
                id: 2,
                link: "#",
                title: "Link 1.5.2",
            },
            {
                id: 3,
                link: "#",
                title: "Link 1.5.3",
            },
            {
                id: 4,
                link: "#",
                title: "Link 1.5.4",
            },
        ],
    },
    {
        id: 6,
        link: "#",
        title: "Link 1.6",
        categoryId: 3,
        children: [
            {
                id: 1,
                link: "#",
                title: "Link 1.6.1",
            },
            {
                id: 2,
                link: "#",
                title: "Link 1.6.2",
            },
            {
                id: 3,
                link: "#",
                title: "Link 1.6.3",
            },
            {
                id: 4,
                link: "#",
                title: "Link 1.6.4",
            },
        ],
    },
    {
        id: 7,
        link: "#",
        title: "Link 1.7",
        categoryId: 3,
        children: [
            {
                id: 1,
                link: "#",
                title: "Link 1.7.1",
            },
            {
                id: 2,
                link: "#",
                title: "Link 1.7.2",
            },
            {
                id: 3,
                link: "#",
                title: "Link 1.7.3",
            },
            {
                id: 4,
                link: "#",
                title: "Link 1.7.4",
            },
        ],
    },
    {
        id: 8,
        link: "#",
        title: "Link 1.8",
        categoryId: 3,
        children: [
            {
                id: 1,
                link: "#",
                title: "Link 1.8.1",
            },
            {
                id: 2,
                link: "#",
                title: "Link 1.8.2",
            },
            {
                id: 3,
                link: "#",
                title: "Link 1.8.3",
            },
        ],
    },
    {
        id: 9,
        link: "#",
        title: "Link 1.9",
        categoryId: 3,
        children: [
            {
                id: 1,
                link: "#",
                title: "Link 1.9.1",
            },
            {
                id: 2,
                link: "#",
                title: "Link 1.9.2",
            },
            {
                id: 3,
                link: "#",
                title: "Link 1.9.3",
            },
            {
                id: 4,
                link: "#",
                title: "Link 1.9.4",
            },
        ],
    },
    {
        id: 10,
        link: "#",
        title: "Link 1.10",
        categoryId: 4,
        children: [
            {
                id: 1,
                link: "#",
                title: "Link 1.10.1",
            },
            {
                id: 2,
                link: "#",
                title: "Link 1.10.2",
            },
            {
                id: 3,
                link: "#",
                title: "Link 1.10.3",
            },
        ],
    },
    {
        id: 11,
        link: "#",
        title: "Link 1.11",
        categoryId: 4,
        children: [
            {
                id: 1,
                link: "#",
                title: "Link 1.11.1",
            },
            {
                id: 2,
                link: "#",
                title: "Link 1.11.2",
            },
            {
                id: 3,
                link: "#",
                title: "Link 1.11.3",
            },
            {
                id: 4,
                link: "#",
                title: "Link 1.11.4",
            },
        ],
    },
    {
        id: 12,
        link: "#",
        title: "Link 1.12",
        categoryId: 5,
        children: [
            {
                id: 1,
                link: "#",
                title: "Link 1.12.1",
            },
            {
                id: 2,
                link: "#",
                title: "Link 1.12.2",
            },
            {
                id: 3,
                link: "#",
                title: "Link 1.12.3",
            },
            {
                id: 4,
                link: "#",
                title: "Link 1.12.4",
            },
        ],
    },
];

const Test = () => {
    // activeCategoryId -> hozirgi aktivniy kategoriya shu id li kategoriya ga toliqli ichki kategoriyalar ni chiqarasan
    const [activeCategoryId, setActiveCategoryId] = useState(1);

    // activeSubCategories -> har safar aktivniy kategoriya ozgarganda subCategories arrayini ichindan oshu id li category ga tegishli subCategory larni ajratib baradi
    const activeSubCategories = useMemo(() => {
        return subCategories.filter(
            (subCategory) => subCategory.categoryId === activeCategoryId
        );
    }, [activeCategoryId]);

    return (
        <div className="home-page sticky bg-gray-100 z-[999]">
            <div className="bg-gray-100">
                <div className="hover-menu bg-white">
                    {/* chap tarafdagi kategoriyalar royhati */}
                    <ul className="hover-menu__categories py-3 bg-white">
                        {categories.map((category) => (
                            <li
                                key={category.id}
                                className={`hover-menu__category hover:bg-gray-100 rounded-xl transition-all duration-300 active:bg-gray-100 ${
                                    activeCategoryId === category.id
                                        ? "active"
                                        : "hover-menu__category"
                                }`}
                                // (onMouseOver) hover bogan vahti id sini active atib qoyasan
                                onMouseOver={() =>
                                    setActiveCategoryId(category.id)
                                }
                            >
                                <div className="flex justify-between items-center px-3">
                                    <p className="text-hover text-sm" href={category.link}>{category.title} </p>
                                    <p>{'→'}</p>
                                </div>
                                
                            </li>
                        ))}
                    </ul>

                    {/* o'ng tarafdagi kategoriyalar royhati (activeSubCategories) -> aktivniy kategoriyaga tegishli kategoriyarlar ni chiqarasan */}
                    <ul className="hover-menu__content bg-white">
                        {activeSubCategories.map((subCategory) => (
                            // har bir kategoriyalar bolaki
                            <li
                                key={subCategory.id}
                                className="hover-menu__subcategory"
                            >
                                <a href={subCategory.link}>
                                    {subCategory.title}
                                </a>

                                {/* oshu kategoriya bolaki ichindagi kategoriyalar */}
                                <ul className="hover-menu__subcategory-links">
                                    {subCategory.children.map((child) => (
                                        <li
                                            key={child.id}
                                            className="hover-menu__subcategory-link"
                                        >
                                            <p href={child.link}>
                                                {child.title}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Test