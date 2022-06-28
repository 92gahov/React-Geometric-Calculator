import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Circle from './Shapes/Circle';
import Triangle from './Shapes/Triangle';
import RightAngledTriangle from './Shapes/RightAngledTriangle';
import Square from './Shapes/Square';
import Rectangle from './Shapes/Rectangle';
import Rhombus from './Shapes/Rhombus';
import Parallelogram from './Shapes/Parallelogram';
import Trapezoid from './Shapes/Trapezoid';
import Pentagon from './Shapes/Pentagon';
import Hexagon from './Shapes/Hexagon';
import Polygon from './Shapes/Polygon';

class Main extends React.Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Navbar />
                    <div className='content'>
                        <Switch>
                            <Route exact path="/">
                                <Circle />
                            </Route>
                            <Route path="/triangle">
                                <Triangle />
                            </Route>
                            <Route path="/right_angled_triangle">
                                <RightAngledTriangle />
                            </Route>
                            <Route path="/square">
                                <Square />
                            </Route>
                            <Route path="/rectangle">
                                <Rectangle />
                            </Route>
                            <Route path="/rhombus">
                                <Rhombus />
                            </Route>
                            <Route path="/parallelogram">
                                <Parallelogram />
                            </Route>
                            <Route path="/trapezoid">
                                <Trapezoid />
                            </Route>
                            <Route path="/pentagon">
                                <Pentagon />
                            </Route>
                            <Route path="/hexagon">
                                <Hexagon />
                            </Route>
                            <Route path="/polygon">
                                <Polygon />
                            </Route>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    }
};

export default Main;