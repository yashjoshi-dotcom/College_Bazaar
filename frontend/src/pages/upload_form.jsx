import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

 const Form=()=>
{

  const [cat, setCat] = useState("");
  const handleChange = (event) => {
    setCat(event.target.value);
  };

  const [rat, setRat] = React.useState(1);
  //---------------------------
  const [image, setImage ] = useState("");
  const [ url, setUrl ] = useState("");

  const uploadImage = async  () => {
  const datat = new FormData()
  datat.append("file", image)
  datat.append("upload_preset", "kllpiwre")
  datat.append("cloud_name","dpwgsbwoi")
  await fetch(" https://api.cloudinary.com/v1_1/dpwgsbwoi/image/upload",{
  method:"post",
  body: datat
  })
  .then(resp => resp.json())
  .then(datat => {
  setUrl(datat.url)
  }).catch(err => console.log(err))
}

  //===========================

  const [data, setData] = useState({
    item_description: "",
    item_name: "",
    item_age: "",
    item_price: "",
    item_image:"",
    item_condition:"",
    item_tag:"",
    });

  let name, value;
  const handleInputs = (e) => {

    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const final =  () => 
  {
     uploadImage();
     postData();

  };
  const postData = async (e) => {
    
    const {
      item_condition,
      item_tag,
      item_description,
      item_name,
      item_age,
      item_price,
      item_image
    } = data;
   setData({ ...data, [item_tag]: cat ,[item_condition]: rat,[item_image]: url });
    const res = await fetch("/add_data/tanush@dtu.ac.in", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_condition,
        item_tag,
        item_description,
        item_name,
        item_age,
        item_price,
        item_image
      }),
    });

    const result = await res.json();
    console.log(result);

    if (result.status === 201) {
      window.alert("Details added successfully");
      console.log("Details added successfully");
    } else {
      window.alert("Could not post your Data");
      console.log("Could not post your Data");
    }
  };

  //-------------------------

  return (
    <div>
      <form>
        <div className="container p-10 m-auto ">
          <div className="mb-6">
            <label
              for="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Item Name
            </label>
            <input
              name="item_name"
              value={data.item_name}
              type="text"
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Hello"
               onChange={handleInputs}
              required
            />
          </div>
          <div className="flex">
            <div className="flex-1 pr-2">
              <label
                for="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Item Age
              </label>
              <input
                type="Number"
                name="item_age"
                value={data.item_age}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                onChange={handleInputs}
                required
              />
            </div>
            <div className="flex-1 pl-2">
              <label
                for="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Price
              </label>
              <input
                type="Number"
                name="item_price"
                value={data.item_price}
                onChange={handleInputs}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
          </div>

          <div>
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Item Description
            </label>
            <textarea
              name="item_description"
              id="message"
              rows="4"
              value={data.item_description}
              onChange={handleInputs}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
          <div className="flex md:flex-row flex-col py-5">
            <div className="mr-full my-auto">
              {/* Paste here below*/}
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={cat}
                    label="cat"
                    onChange={handleChange}
                  >
                    <MenuItem value="other-stationary">
                      Other Stationary
                    </MenuItem>
                    <MenuItem value="clothing_essentials">
                      Clothing Essentials
                    </MenuItem>
                    <MenuItem value="books">Books</MenuItem>
                    <MenuItem value="daily-use">Daily Use</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="md:ml-20 ml-full pb-5">
              {/*Rating System Code Below */}
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Typography component="legend">Controlled</Typography>
                <Rating
                  name="simple-controlled"
                  value={rat}
                  onChange={(event, newValue) => {
                    setRat(newValue);
                  }}
                />
              </Box>
            </div>
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              for="user_avatar"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
              onChange={(e)=> setImage(e.target.files[0])}
            />
          </div>
          <div className="my-5 text-center">
            <button
              type="submit"
              onClick={final}
              className="focus:outline-none mx-auto  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Form

 
