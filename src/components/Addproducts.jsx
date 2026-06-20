// import axios from 'axios'
import React, { useState } from 'react'

const Addproducts = () => {
// Step 1 : Declare hooks
const [product_name, setProductname] = useState("") 
const [product_description, setProductdescription] = useState("")
const [product_cost, setProductcost] = useState("")
const [product_photo, setProductphoto] =useState("")

// Step 3 : Add three additional hooks
const [loading,setLoading] = useState("")
const [success,setSuccess] = useState("")
const [error,setError] = useState("")

// Step 4 : Function to handle the submit button
const handlesubmit = async (e) => {

   // Step 5 : Prevent defaults - This means you are preventing the browser from reloading when a user submits details for registraion
    e.preventDefault()

    // Step 6 : Update loading hook
    setLoading("Product waiting to be added...")

    // Step 7 : Add try and catch block
    try{
       const formdata = new FormData()

      //  Step 9 : Append
      formdata.append("product_name", product_name)
      formdata.append("product_description", product_description)
      formdata.append("product_cost", product_cost)
      formdata.append("photo", product_photo)

      // Step 10 : Interact with the axios module
      // const response = await axios.post("http://wangui-hsk.alwaysdata.net/api/addproduct", formdata)

      // Step 11 : Setback the loading hook to default
      setLoading("")
      setSuccess("Nice!...product added successfully.")

      // Step 12 : Set other hooksto default
      setProductname("")
      setProductdescription("")
      setProductcost("")
      setProductphoto("")
    }

    catch(error){
      // Step 13 : 
       setLoading("")
       setError("Product not added. Retry!")
    }

}

  return (
    <div className='row justify-content-center mt-5'>

      <div className='col-md-6 p-4 card shadow'>
        <h1>Add Product</h1>
          <form onSubmit={handlesubmit}>

            <h4 className='text-info'>{loading}</h4>
            <h4 className='text-success'>{success}</h4>
            <h4 className='text-danger'>{error}</h4>

          {/* Step 2 : Test the hooks */}
          <input type="text"
          value={product_name}
          onChange={(e) => setProductname(e.target.value)}
          placeholder='Enter product name'
          className='form-control'
          required />
          <br />

          {/* {product_name} */}

          <input type="text"
          value={product_description}
          onChange={(e) => setProductdescription(e.target.value)}
          placeholder='Enter product description'
          className='form-control'
          required />
          <br />

          {/* {product_description} */}

          <input type="number"
          value={product_cost}
          onChange={(e) => setProductcost(e.target.value)}
          placeholder='Enter the price of your product' 
          className='form-control'
          required/>
          <br />

           {/* {product_cost} */}

          <label>Product photo</label>
          <br />
          <input type="file" 
          accept='image/*'
          onChange={(e) => setProductphoto(e.target.files[0])}
          className='form-control' />
          <br />

          <input type="submit"
          value="Add product" 
          className='btn btn-success'/>
        </form>
      </div>

    </div>
  )
}

export default Addproducts
