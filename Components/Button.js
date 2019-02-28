import React from "react";
import PropTypes from "prop-types";
import Colors from "./Colors";
import { Size } from "./helper/size";
class Button extends React.Component {
  render() {
    const { bgColor, loading, size, ...rest } = this.props;
    return (
      <button className={`py-2 px-4 bg-${bgColor} ${Size[size]}`} {...rest}>
        {loading ? `Loading` : this.props.children}
      </button>
    );
  }
}
Button.defaultProps = {
  bgColor: `bg-${Colors.Grey["dark"]}`,
  loading: false,
  size: "medium"
};
Button.propTypes = {
  bgColor: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.string
};
export default Button;
