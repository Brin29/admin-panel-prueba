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
      {
      <div className="z-10 fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">

      
      <form onSubmit={addProductApi}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Product Information</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Product Name</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={newProduct.name}
                  onChange={newProductHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Product Name"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
              <div className="mt-2">
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={newProduct.price}
                  onChange={newProductHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Price"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="discount" className="block text-sm font-medium leading-6 text-gray-900">Discount</label>
              <div className="mt-2">
                <input
                  type="number"
                  name="discount"
                  id="discount"
                  value={newProduct.discount}
                  onChange={newProductHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Discount"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="img" className="block text-sm font-medium leading-6 text-gray-900">Image URL</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="img"
                  id="img"
                  value={newProduct.img}
                  onChange={newProductHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Image URL"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="category"
                  id="category"
                  value={newProduct.category}
                  onChange={newProductHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Category"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="color" className="block text-sm font-medium leading-6 text-gray-900">Color (comma separated)</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="color"
                  id="color"
                  value={newProduct.color}
                  onChange={(e) => handleArrayChange(e, 'color')}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="e.g. Red, Blue"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="size" className="block text-sm font-medium leading-6 text-gray-900">Size (comma separated)</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="size"
                  id="size"
                  value={newProduct.size}
                  onChange={(e) => handleArrayChange(e, 'size')}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="e.g. S, M, L"
                />
              </div>
            </div>

            <div className="sm:col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  value={newProduct.description}
                  onChange={newProductHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Product description"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">Quantity</label>
              <div className="mt-2">
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  value={newProduct.quantity}
                  onChange={newProductHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Quantity"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
          <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
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
