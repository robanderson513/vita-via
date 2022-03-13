import React from "react";
import { faGlassWhiskey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./water-widget.css";

class WaterWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalDrinks: 0,
    };
  }

  updateTotalDrinks(drinkCount) {
    const totalDrinks = this.state.totalDrinks + drinkCount;
    this.setState({ totalDrinks: totalDrinks >= 0 ? totalDrinks : 0 });
  }

  render() {
    return (
      <div>
        <div className="drinks-container">
          <p>Total Drinks: {this.state.totalDrinks}</p>
          <FontAwesomeIcon icon={faGlassWhiskey} />
        </div>
        <Stack spacing={2} direction="row">
          <Button
            variant="outlined"
            size="small"
            onClick={this.updateTotalDrinks.bind(this, 1)}
          >
            +
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={this.updateTotalDrinks.bind(this, -1)}
          >
            -
          </Button>
        </Stack>
      </div>
    );
  }
}
export default WaterWidget;
