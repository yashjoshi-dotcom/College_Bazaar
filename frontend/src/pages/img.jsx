import React, { useState } from 'react'


const Imggg = () => {
const [image, setImage ] = useState("");
const [ url, setUrl ] = useState("");
const uploadImage = () => {
const data = new FormData()
data.append("file", image)
data.append("upload_preset", "kllpiwre")
data.append("cloud_name","dpwgsbwoi")
fetch(" https://api.cloudinary.com/v1_1/dpwgsbwoi/image/upload",{
method:"post",
body: data
})
.then(resp => resp.json())
.then(data => {
setUrl(data.url)
})
.catch(err => console.log(err))
}
return (
<div>
<div>
<input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
<button onClick={uploadImage}>Upload</button>
</div>
<div>
<h1>Uploaded image will be displayed here</h1>
<h1>{url}</h1>
<img src={url}/>
</div>
</div>
)
}
export default Imggg;