import React, { useEffect, useState } from "react";
import products from "../json/productos.json";

const Products = () => {
  
  const [openPopup, setOpenPopup] = useState(false)
  
  // Producto
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: null,
    discount: null,
    img: "",
    category: "",
    color: [""],
    size: [],
    description: "", 
    quantity: null
  })

  // Datos del producto
  const newProductHandler = (e) => {
    const {name, value} = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  

  // Envio a la api
  const addProductApi = (e) => {
    e.preventDefault();
    const configuration = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...newProduct
      })
    }


    fetch("http://localhost:8080/v1/add-product", configuration)
    .then(res => console.log(res))
    .then(json => console.log(json))
    }

  return (
    <>
      {openPopup &&
      <div className="z-10 fixed inset-0 flex items-center justify-center bg-gray-400 m-auto w-9/12 h-5/6">

<form onSubmit={addProductApi} className="space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
        {/* Columna 1 */}
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">Product Name</label>
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={newProductHandler}
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">Price</label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={newProductHandler}
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
            placeholder="Enter product price"
          />
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">Discount</label>
          <input
            type="number"
            name="discount"
            value={newProduct.discount}
            onChange={newProductHandler}
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
            placeholder="Enter discount percentage"
          />
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">Image URL</label>
          <input
            type="text"
            name="img"
            value={newProduct.img}
            onChange={newProductHandler}
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
            placeholder="Enter image URL"
          />
        </div>

        {/* Columna 2 */}
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">Category</label>
          <input
            type="text"
            name="category"
            value={newProduct.category}
            onChange={newProductHandler}
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
            placeholder="Enter product category"
          />
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">Color</label>
          <input
            type="text"
            name="color"
            value={newProduct.color}
            onChange={newProductHandler}
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
            placeholder="Enter color"
          />
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">Size</label>
          <input
            type="text"
            name="size"
            value={newProduct.size}
            onChange={newProductHandler}
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
            placeholder="Enter sizes (comma separated)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={newProduct.quantity}
            onChange={newProductHandler}
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
            placeholder="Enter product quantity"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">Description</label>
          <textarea
            name="description"
            value={newProduct.description}
            onChange={newProductHandler}
            rows="3"
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
            placeholder="Write a few sentences about the product"
          ></textarea>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={() => setOpenPopup(false)}
          >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        
          onClick={() => setOpenPopup(false)}
        >
          Save
        </button>
      </div>
    </form>
      
      </div>
    }

        


      <h1 className="text-2xl font-bold mb-4">Productos</h1>

      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setOpenPopup(true)}
        >
        Añadir Producto
      </button>

      <div className="p-6 flex flex-wrap gap-0">
        {products.map((e, index) => {
          return (
            <div
              key={index}
              className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
            >
              <a
                className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                href="#"
              >
                <img
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1485145782098-4f5fd605a66b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="product image"
                  title={e.title}
                />
              </a>
              <div className="mt-4 px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl tracking-tight text-slate-900">
                    {e.title}
                  </h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">
                      {e.price}
                    </span>
                  </p>
                </div>
                <div>
                  <button className="mr-2 p-2 bg-yellow-500 text-white rounded">
                    Editar
                  </button>
                  <button className="p-2 bg-red-500 text-white rounded">
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
