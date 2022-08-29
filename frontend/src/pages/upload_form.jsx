import React,{useState}from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import {useForm} from "react-hook-form";



const Form = () => {
  const [cat, setCat] = useState("");
  const [value, setValue] = React.useState(1);


  const handleChange = (event) => {
    setCat(event.target.value);
  };



  const {register,handleSubmit}=useForm();
  const onSubmit =  (data) => 
  {
    data.item_condition=value;  
    const formData = new FormData()

  formData.set("item_name",data.item_name );
  formData.set("item_price", data.item_price);
  formData.set("item_age",data.item_age);
  formData.set("item_condition", data.item_condition);
  formData.set("item_tag",data.item_tag);
  formData.set("item_description", data.item_description);


    console.log(data);
    console.log(cat);
    console.log(value);
   const upload= async (data)=>
   { await fetch("/add_data/final_test@dtu.ac.in", 
    {
      method: "PATCH",
      headers: {
        "Content-Type":"multipart/form-data"
      },
      body: formData
    }).then(function (res) {
      if (res.ok) {
        alert("Data Submitted Successfully");
      } else {
        alert("Data Could not be submitted");
      }
    }, function (e) {
      alert("Error submitting form!");
    }); 
    console.log(data);

  }
  upload(data);
   }


  return (
    <div>
   <form enctype="multipart/form-data" method="patch"  onSubmit={handleSubmit(onSubmit)}>
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
            type="text"
            id="text"
            {...register('item_name')}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Hello"
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
              {...register('item_age')}
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
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
              {...register('item_price')}
              id="last_name"
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
            {...register('item_description')}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <div className="flex md:flex-row flex-col py-5">
          <div className="mr-full my-auto">
            {/* Paste here below*/}
            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          {...register('item_tag')}
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
        {...register('item_condition')}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
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
             {...register('item_immage')}
          />
        </div>
        <div className="my-5 text-center">
          <button
            type="submit"
            className="focus:outline-none mx-auto  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
          >
            Submit
          </button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Form;