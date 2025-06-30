import React from 'react'

const ProductFilter = () => {
  return (
    <div className="card bg-base-300 rounded-box grid grow place-items-start ">
            <ul className="menu rounded-box w-56">
                <li><h3 className='font-bold text-lg'>Filter</h3></li>
                <li>
                    <details open>
                        <summary>Price Range</summary>
                        <ul>
                            <li>
                                <input type="range" min={0} max="100" className="range range-xs text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]" />
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details open>
                        <summary>Category</summary>
                        <ul>
                            <li> 
                                <label className="label"> Submenu 1
                                    <input type="checkbox" defaultChecked className="checkbox" /> 
                                </label>
                            </li>
                            <li>
                                <label className="label"> Submenu 2
                                    <input type="checkbox" defaultChecked className="checkbox" /> 
                                </label>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details >
                        <summary>Brand</summary>
                        <ul>
                            <li><a>Caratelane</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details >
                        <summary>Shape</summary>
                        <ul>
                            <li><a>Square</a></li>
                            <li><a>Round</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details >
                        <summary>Carat</summary>
                        <ul>
                            <li><a>2 Carat</a></li>
                            <li><a>4 Carat</a></li>
                            <li><a>6 Carat</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details >
                        <summary>Color</summary>
                        <ul>
                            <li><a>Blue</a></li>
                            <li><a>Red</a></li>
                            <li><a>Pink</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details >
                        <summary>Type</summary>
                        <ul>
                            <li><a>Ring</a></li>
                            <li><a>Necklace</a></li>
                            <li><a>Ear Ring</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details >
                        <summary>Occasion</summary>
                        <ul>
                            <li><a>Wedding</a></li>
                            <li><a>Party</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
  )
}

export default ProductFilter