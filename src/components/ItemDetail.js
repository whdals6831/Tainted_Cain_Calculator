import React from "react";
import recipesV2 from "../recipes_v2.json";
import items from "../items.json";
import "./ItemDetail.css";

class ItemDetail extends React.Component {
    getRecipes = (item) => {
        if (item in recipesV2) {
            return (
                recipesV2[item].recipes.map ((n, idx, array) => {
                    return (
                        <div className="item_recipes_recipe" key={items[item].name+idx}>
                            {array[idx].map((m, i, arr) => {
                                    return (
                                        <div className="item_recipes_recipe_img" key={items[item].name+idx+i}>
                                            <img src={process.env.PUBLIC_URL + `/images/bagicons/${m}.png`} alt={m} />
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    )
                })
            )
        }
        else {
            return (
                <div className="no_recipe_text">
                    <b>{"No recipes"}</b>
                </div>
            );
        }
    }

    render() {
        const item = this.props.itemIdx;

        return (
            <div className="item_detail" key={items[item].name}> 
                <div className="item_name">
                    {items[item].name}
                </div>
                <div className="item_recipes">
                    {this.getRecipes(item)}
                </div>
            </div>
        );
    }
}

export default ItemDetail;