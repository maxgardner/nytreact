import React from "react";
import {NavLink} from "react-router-dom";

const NavItem = props => {
  return(
    <a key={this.props.key} className={this.props.class} href={this.props.link}>
      <Link to="/favorites">{this.props.children}</Link>
    </a>
  )
}
