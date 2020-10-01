import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Banner from "./components/Banner";
import ShirtCollections from "./components/ShirtCollections";
import AboutMe from "./components/AboutMe";
import SideMenu from "./components/SideMenu";
import Footer from "./components/Footer";
import SelectedProduct from "./components/SelectedProduct";
import CheckOutPage from "./components/CheckOutPage";
import Payment from "./components/Payment";
import * as actionCreater from "./store/actions/authCreater";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { connect } from "react-redux";

import Form from "./components/Form";

class App extends Component {
  state = {
    slideMenu: false,

    SelectedProduct: null,
  };

  componentDidMount() {
    this.props.authStateCheck();
  }

  showMenu = () => {
    this.setState((prevProp) => {
      return { slideMenu: !prevProp.slideMenu };
    });
  };

  closeSideBar = () => {
    console.log("close");
    this.setState((prevProp) => {
      return { slideMenu: !prevProp.slideMenu };
    });
  };

  clickedTshirt = (id) => {
    const index = this.props.tShirts.findIndex((item) => item.id === id);

    const totalProducts = [...this.props.tShirts];
    const selectedProduct = totalProducts.splice(index, 1);

    this.setState({ SelectedProduct: selectedProduct });
  };

  render() {
    let redirectPage = null;
    if (this.props.wasInCheckOut && this.props.user !== null) {
      console.log("was in checkout");
      redirectPage = "/payment";
    } else if (this.props.user !== null) {
      console.log("go to home");
      redirectPage = "/";
    }
    return (
      <Router>
        <Switch>
          <div className="app">
            <Navbar clicked={this.showMenu} />
            <Route path="/signin">
              {this.props.user !== null ? (
                <Redirect to={redirectPage} />
              ) : (
                <Form />
              )}
            </Route>
            <Route
              exact
              path="/"
              render={() => (
                <SideMenu
                  close={this.state.slideMenu}
                  closeMenu={this.closeSideBar}
                />
              )}
            />

            <Route exact path="/" render={() => <Banner />} />
            <Route
              exact
              path="/"
              render={() => (
                <ShirtCollections clickedTshirt={this.clickedTshirt} />
              )}
            />
            <Route exact path="/" render={() => <AboutMe />} />

            <Route
              path="/selectTshirt/:id"
              render={() => (
                <SelectedProduct Tshirt={this.state.SelectedProduct} />
              )}
            />
            <Route path="/payment" component={Payment} />
            <Route path="/checkout" component={CheckOutPage} />
            <Footer />
          </div>
        </Switch>
        {/* <SideMenu
            close={this.state.slideMenu}
            closeMenu={this.closeSideBar}
          />
          <Navbar clicked={this.showMenu} />
          <SelectedProduct Tshirt={this.state.selectedTshirt} />
          <Banner />
          <ShirtCollections
            tShirts={this.state.TShirts}
            clickedTshirt={this.clickedTshirt}
          />
          <AboutMe />
          <Footer /> */}
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tShirts: state.basket.tShirts,
    user: state.user.idToken,

    wasInCheckOut: state.user.wasInCheckOut,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authStateCheck: () => dispatch(actionCreater.authStateCheck()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
