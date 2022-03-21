import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

function Count() {
  const [total, setTotal] = useState(0);
  const [disabled, setDisable] = useState(true);
  const [none, setNone] = useState(false);

  const handleDisable = () => {
    setDisable((prev) => !prev);
    setNone((prev) => !prev);
  };
  const buttons = [
    <Button
      onClick={() => {
        setTotal(total + 1);
      }}
      key="CLICK"
      type="button"
      disabled={none}
    >
      CLICK: {total}
    </Button>,
    <Button
      onClick={() => {
        setTotal(0);
      }}
      key="CLEAR"
    >
      CLEAR
    </Button>,
    <Button onClick={handleDisable} key="DISABLE">
      {disabled ? "DISABLE" : "ABLE"}
    </Button>
  ];
  return (
    <Box
      sx={{
        display: "flex",
        "& > *": {
          m: 1
        }
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}

export default Count;
