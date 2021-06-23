import React from "react";
import "./CraftingTable.css";

class CraftingTable extends React.Component {
    handleImgRemove = (idx) => {
        this.props.removeItemOfBag(idx);
    };

    handleImgError = (e) => {
        // 이렇게 이미지를 표현안해도 되는걸까?
        e.target.alt = "";
    };

    render() {
        var temp = new Array(8-this.props.bag.length).fill("");
        var table = [...this.props.bag, ...temp];

        return (
            <div className="crafting_table_wrap">
                <ul className="crafting_table_list">
                    {table.map((bag_item_num, idx) => {
                        return (
                            <li key={idx}>
                                <img src={process.env.PUBLIC_URL + `/images/crop_72.png`} alt="bag" />
                                <img className="bag_item" src={process.env.PUBLIC_URL + `images/bagicons/${bag_item_num}.png`} alt="~" onError={this.handleImgError} onClick={() => this.handleImgRemove(idx)} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };
}

export default CraftingTable;