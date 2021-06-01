import React from "react"
import "./PickUpItem.css";

class PickUpItem extends React.Component{
    state = {
        pickUpTable: [],
        imageNumTable: []
    }

    componentDidMount() {
        let table = [];
        let imageNum = [];
        const excludedItems = [17, 20];

        for (var i=0; i<23; i++) {
            if (excludedItems.includes(i+1)) {
                continue;
            }

            table.push(`images/bagicons/${i+1}.png`);
            imageNum.push(i+1);
        }

        this.setState({pickUpTable: table, imageNumTable: imageNum});
    };

    handleImageClick = (item) => {
        this.props.addItemToBag(item);
    };

    render() {
        return (
            <div className="pickup_item_wrap">
                <ul className="pickup_item_list">
                    {this.state.pickUpTable.map((bag, idx) => {
                        return (
                            <li key={idx}>
                                <img src={process.env.PUBLIC_URL + bag} alt="bag" onClick={() => this.handleImageClick(this.state.imageNumTable[idx])} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default PickUpItem;