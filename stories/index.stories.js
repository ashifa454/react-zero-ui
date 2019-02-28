import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Button, Colors, BadgeAlert } from "../index";
// storiesOf("Welcome", module).add("to Storybook", () => (
//   <Welcome showApp={linkTo("Button")} />
// ));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>YEH HAI MERDA BUTTON</Button>
  ))
  .add("with background colors", () => (
    <Button bgColor={Colors.Teal["dark"]}>I am Button with Color</Button>
  ))
  .add("with Disable State", () => (
    <Button disabled>I am Disabled Button</Button>
  ))
  .add("with Loading State", () => (
    <Button loading>I am a Loading Button</Button>
  ));
// storiesOf("Colors", module)
//   .add("as Color", () => <div color={Colors.}>HELLO WORLD</div>)
//   .add("with Background colors", () => (
//     <div className="px-2 py-2">HELLO WORLD</div>
//   ));
storiesOf("Alert", module).add("with Badge", () => (
  <BadgeAlert badgeText="HELLO WORLD">HELLO WORLD FROM CAMPK12</BadgeAlert>
));
storiesOf("Accordian", module).add("abc", () => {
  <Button>ACCORDIAN</Button>;
});
storiesOf("Button Group", module).add("abc", () => {
  <Button> Button Group</Button>;
});
