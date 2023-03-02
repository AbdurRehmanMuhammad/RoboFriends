import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())

            .then(users =>
                this.setState({ robots: users }));


    }
    onsearch = (event) => {
        this.setState({ searchfield: event.target.value })



    }
    render() {
        const filterRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length===0){
            return (
                <h1 className="f1 tc">
                    Loading
                </h1>
            )
        }
        else
        return (
            <div className="tc" >
                <h1>RoboNoobs</h1>
                <SearchBox onsearchChange={this.onsearch} />
                <Scroll>
                    <CardList robots={filterRobot} />
                </Scroll>
            </div>
        );
    }
}
export default App;