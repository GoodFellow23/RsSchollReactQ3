import React, {useState} from "react";
import {MainPage} from "../Pages/MainPage";
import {Articles} from "../Articles/Articles";
import "../../Style/router.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useParams, Link
} from "react-router-dom";

export const MainRouter = () => {
    const [searchResult, setSearchResult] = useState([]);
    return (
        <Router>
            <div>
                <nav className="main-router">
                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="selected">Home</NavLink >
                        </li>
                        <li>
                            <NavLink exact to="/about" activeClassName="selected">About</NavLink >
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/">
                        <Home searchResult={searchResult} setSearchResult={setSearchResult} />
                    </Route>
                    <Route path={"/details/:id"}>
                        <Details searchResult={searchResult} />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home({searchResult, setSearchResult}) {

    return (
        <div>
            <h2>Home</h2>
            <MainPage setSearchResult={setSearchResult} />
            <Articles searchResult={searchResult} />
        </div>
    );
}

function About() {
    return <h2>About</h2>;
}

function Details({searchResult}) {
    let { id } = useParams();
    let item = searchResult[id];
    return (
        <div className="result-wrapper">
            <table className="result-list">
                <thead>
                <tr>
                    <td>Title</td>
                    <td>Author</td>
                    <td>Date</td>
                    <td>Description</td>
                    <td>Image</td>
                </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td>{item.publishedAt}</td>
                        <td>{item.description}</td>
                        <td><img src={item.urlToImage} alt={item.title} width="350" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function NoMatch() {
    return <h2>404</h2>;
}