import React from "react";
import { Menu, Grid } from "semantic-ui-react";

const SortingSidebar = (props) => (
  <Grid.Column width={3}>
    <Menu color="grey" fluid vertical tabular>
      <Menu.Item header as="h1">
        Sort By
      </Menu.Item>
      <Menu.Item
        name="All"
        active={props.filter === ""}
        onClick={() => {
          props.setFilter("");
        }}
      />
      <Menu.Item
        name="Dating"
        active={props.filter === "Dating"}
        onClick={() => {
          props.setFilter("Dating");
        }}
      />
      <Menu.Item
        name="Finance"
        active={props.filter === "Finance"}
        onClick={() => {
          props.setFilter("Finance");
        }}
      />
      <Menu.Item
        name="Games"
        active={props.filter === "Games"}
        onClick={() => {
          props.setFilter("Games");
        }}
      />
      <Menu.Item
        name="Multimedia"
        active={props.filter === "Multimedia"}
        onClick={() => {
          props.setFilter("Multimedia");
        }}
      />
      <Menu.Item
        name="Communication"
        active={props.filter === "Communication"}
        onClick={() => {
          props.setFilter("Communication");
        }}
      />
    </Menu>
  </Grid.Column>
);

export default SortingSidebar;
