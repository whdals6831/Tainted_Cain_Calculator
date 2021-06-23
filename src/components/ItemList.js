import React from "react";
import "./ItemList.css";
import ItemDetail from "./ItemDetail";

class ItemList extends React.Component {
    state = {
        hover: false,
        currentItem: 0
    }
    handleMouseOver = (item) => {
        this.setState({
            hover: true,
            currentItem: item
        });
    }

    handleMouseOut = () => {
        this.setState({
            hover: false,
            currentItem: 0
        });
    }

    render() {
        return (
            <div className="item_list_wrap">
                {this.props.recipe.map(item => {
                    return (
                        <div className="item" key={item}>
                            <div className="item_img" key={item}>
                                <img src={process.env.PUBLIC_URL + `/images/collectibles/collectibles_${item}.png`} alt={item} onMouseOver={() => this.handleMouseOver(item)} onMouseOut={this.handleMouseOut}/>
                            </div>
                            {this.state.hover && this.state.currentItem === item ? <ItemDetail itemIdx={item} /> : null}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ItemList;