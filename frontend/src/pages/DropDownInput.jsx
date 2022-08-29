import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


export default function BasicSelect() {
  const [cat, setCat] = React.useState("");

  const handleChange = (event) => {
    setCat(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cat}
          label="cat"
          onChange={handleChange}
        >
          <MenuItem value="other-stationary">Other Stationary</MenuItem>
          <MenuItem value="clothing_essentials">Clothing Essentials</MenuItem>
          <MenuItem value="books">Books</MenuItem>
          <MenuItem value="daily-use">Daily Use</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
