import React from "react";
import items from "../items.json";
import ItemList from "../components/ItemList";
import newRecipes from "../newRecipes.json";
import PickUpItem from "../components/PickUpItem";
import CraftingTable from "../components/CraftingTable";
import "./Home.css";

class Home extends React.Component {
    state = {
        bag: [],
        recipe: []
    }

    changeRecipeShape = (arr) => {
        arr = [...arr]; // CraftingTable 정렬 방지
        arr.sort((a,b) => a-b);
        arr = arr.map(n => String.fromCharCode(96+n));
        const key = arr.join("");

        if (key in newRecipes) {
            arr = newRecipes[key];
        }
        else {
            arr = [];
        }

        return arr;
    }

    addItemToBag = (item) => {
        if (this.state.bag.length < 8 ) {
            this.setState(prevState => {
                var temp = [...prevState.bag, item];

                return { 
                    bag: temp,
                    recipe: this.changeRecipeShape(temp)
                };
            });
        }
    }

    removeItemOfBag = (idx) => {
        if (this.state.bag.length > 0) {
            var temp = [...this.state.bag];
            temp.splice(idx, 1);

            if (temp.length === 0) {
                this.setItemList();
            }
            else {
                this.setState({
                    bag: temp,
                    recipe: this.changeRecipeShape(temp)
                });
            }
        }
    }

    setItemList = () => {
        var temp = [];

        Object.keys(items).map(item => {
            return temp.push(item);
        });

        this.setState({
            bag: [],
            recipe: temp
        });
    }
    
    componentDidUpdate() {
        console.log(this.state.bag);
    }

    componentDidMount() {
        this.setItemList();
    }

    render() {
        return (
            <div className="Home">
                <div className="first_floor">
                    <CraftingTable bag={this.state.bag} removeItemOfBag={this.removeItemOfBag}/>
                    <PickUpItem addItemToBag={this.addItemToBag} />
                </div>
                <div className="second_floor">
                    <ItemList recipe={this.state.recipe} />
                </div>
            </div>
        );
    }
}

export default Home;