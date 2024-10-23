import { useState } from "react";
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
      <div className=" z-10 fixed inset-0 flex items-center justify-center bg-stone-100 m-auto w-9/12 h-auto max-h-[90%] rounded-3xl overflow-y-auto">

      <form className="h-5/6">
      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900 text-center text-4xl">
          Añadir un nuevo producto
        </h2>

        <div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* Nombre */}
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="text-base block font-medium leading-6 text-gray-900">
              Nombre del Producto
            </label>
          <div className="mt-2">
            <input
              type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="text-base block w-full rounded-md  p-1 shadow-sm shadow-stone-400 ring-black-300 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Precio */}
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="text-base block text-sm font-medium leading-6 text-gray-900">
                Precio
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="text-base block w-full rounded-md  p-1 shadow-sm shadow-stone-400 ring-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Imagen */}

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                  Imagen
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            {/* Descripcion */}
            <div className="col-span-full">
              <label htmlFor="street-address" className="text-base block text-sm font-medium leading-6 text-gray-900">
                Descripcion
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="text-base block w-full rounded-md  border-neutral-400 p-1 shadow-sm shadow-stone-400 ring-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Color */}
            <div className="col-span-full">
              <label htmlFor="street-address" className="text-base block text-sm font-medium leading-6 text-gray-900">
                Color
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="text-base block w-full rounded-md  p-1 shadow-sm shadow-stone-400 ring-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Talla */}
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="text-base block text-sm font-medium leading-6 text-gray-900">
                Cantidad
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="text-base block w-full rounded-md  p-1 shadow-sm shadow-stone-400 ring-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>

       {/* Categoria */}
       <div className="sm:col-span-3">
              <label htmlFor="country" className="text-base block text-sm font-medium leading-6 text-gray-900">
                Categoria
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="text-base block w-full rounded-md  p-1 shadow-sm shadow-stone-400 ring-gray-300 placeholder:text-gray-400"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Color */}
        <div className="pb-12">
          
          <div className="mt-10 space-y-10">

            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Talla</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">Comments</label>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input id="candidates" name="candidates" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">Candidates</label>
                   
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input id="offers" name="offers" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">Offers</label>
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Descuento</legend>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input id="push-everything" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">SI</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input id="push-email" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">NO</label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        {/* Talla */}
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Cantidad del descuento
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm shadow-stone-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm shadow-stone-400 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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
