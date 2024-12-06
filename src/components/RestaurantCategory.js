import React, { useState } from 'react'
import ItemLists from './ItemLists'
import RestaurantSubCategoryItemLists from './RestaurantSubCategoryItemLists'
import { useState } from 'react'

const RestaurantCategory = ({ data }) => {
    const [showItem, setShowItem] = useState(false)

    // handleClick Function will be called when onClick on Header category, showItem state variable make it toggle

    const handleClick = () => {
        setShowItem(!showItem);
    }
    const categories = Array.isArray(data?.categories) ? data.categories : [];    // Check the categories are array or not
    return (
        <div className='w-6/12 shadow-lg mx-auto my-4 bg-gray-50 p-4'>
            <div className='text-xl font-bold flex justify-between items-center cursor-pointer mb-2' onClick={handleClick}>
                {data.title}
                {data.itemCards?.length > 0 && `(${data.itemCards.length})`}
                <span >⌵</span>
            </div>
            {showItem && data.itemCards ? <ItemLists items={data.itemCards} /> : <RestaurantSubCategoryItemLists categories={categories} />}
        </div>
    )
}

export default RestaurantCategory