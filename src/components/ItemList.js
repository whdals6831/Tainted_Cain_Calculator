// import items from "../items.json";
// import recipes from "../recipes.json";
import React from "react";
import "./ItemList.css";

class ItemList extends React.Component {
    handleMouseOver = (item) => {
        console.log(item);
    }

    render() {
        return (
            <div className="item_list_wrap">
                <ul className="item_list_list">
                    {this.props.recipe.map(item => {
                        return (
                            <li key={item}>
                                <img src={process.env.PUBLIC_URL + `images/collectibles/collectibles_${item}.png`} alt={item} onMouseOver={() => this.handleMouseOver(item)}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default ItemList;