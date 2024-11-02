import { useState } from "react"

const EditProduct = ({product}) => {  
  const [file, setFile] = useState(null);
  const [editProduct, setEditProduct] = useState(product)
  const [openPopup, setOpenPopup] = useState(false)

  const onClickEditHandler = () => {
    setOpenPopup(true)
    console.log(product)
  }

  const handleImgChange = e => {
    setFile(e.target.files[0]);
  }

  const handleTextChange = (e) => {
    const {name, value} = e.target;
    setEditProduct((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleNumberChange = (e) => {
    const {name, value} = e.target;
    setEditProduct((prevData) => ({
      ...prevData,
      [name]: parseFloat(value) || 0
    }))
  }

  const handleArrayChange = (e) => {
    const { name, value } = e.target;
    setEditProduct((prev) => ({
      ...prev,
      [name]: value.split(",").map(item => item.trim())
    }));
  };

  const handleSizeChange = (e) => {
    const {name, checked} = e.target;
    setEditProduct(prev => {
      const sizes = prev.size;
      if (checked){
        return { ...prev, size:[...sizes, name]};
      }
      else {
        return {
          ...prev, size:sizes.filter(size => size !== name)}
        
      }
    })
  }

  const handleDiscountChange = (e) => {
    const {value} = e.target;
    setEditProduct(prev => ({
      ...prev,
      discount: value === "yes" ? true : false
    }));
  }
  

  return (
    <>
    <button className="mr-2 p-2 bg-yellow-500 text-white rounded" 
    onClick={() => onClickEditHandler()}> 
      Editar
    </button>
    
    {openPopup &&
    <div className=" z-10 fixed inset-0 flex items-center justify-center bg-stone-100 m-auto w-9/12 h-auto max-h-[90%] rounded-3xl overflow-y-auto">

    <form className="h-5/6">
    <div>
      <h2 className="text-base font-semibold leading-7 text-gray-900 text-center text-5xl p-4">
        Añadir un nuevo producto
      </h2>

      <div>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        {/* Nombre */}
        <div className="sm:col-span-3">
          <label htmlFor="productName" className="text-base block font-medium leading-6 text-gray-900">
            Nombre del Producto
          </label>
        <div className="mt-2">
          <input
            type="text"
                name="name"
                id="productName"
                required
                value={editProduct.name}
                onChange={handleTextChange}
                className="text-base block w-full rounded-md  p-1 shadow-sm shadow-stone-400 ring-black-300 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Precio */}
          <div className="sm:col-span-3">
            <label htmlFor="price" className="text-base block text-sm font-medium leading-6 text-gray-900">
              Precio
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="price"
                id="price"
                // required
                value={editProduct.price}
                onChange={handleNumberChange}
                className="text-base block w-full rounded-md  p-1 shadow-sm shadow-stone-400 ring-gray-300 placeholder:text-gray-400"
              />
            </div>
          </div>

           <div className="sm:col-span-3">
            <label htmlFor="addImg" className="text-base block text-sm font-medium leading-6 text-gray-900">
              Imagen
            </label>
            <div className="mt-2">
              <input
                type="file"
                name="img"
                accept="image/*"
                id="addImg"
                // required
                value={editProduct.imgPath}
                onChange={handleImgChange}
                className="text-base block w-full rounded-md  p-1 shadow-sm shadow-stone-400 ring-gray-300 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Descripcion */}
          <div className="col-span-full">
            <label htmlFor="description" className="text-base block text-sm font-medium leading-6 text-gray-900">
              Descripcion
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="description"
                id="description"
                required
                value={editProduct.description}
                onChange={handleTextChange}
                className="text-base block w-full rounded-md  border-neutral-400 p-1 shadow-sm shadow-stone-400 ring-gray-300 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Color */}
          <div className="col-span-full">
            <label htmlFor="color" className="text-base block text-sm font-medium leading-6 text-gray-900">
              Color
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="color"
                id="color"
                // required
                value={editProduct.color}
                onChange={handleArrayChange}
                className="text-base block w-full rounded-md  p-1 shadow-sm shadow-stone-400 ring-gray-300 placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="quantity" className="text-base block text-sm font-medium leading-6 text-gray-900">
              Cantidad
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="quantity"
                id="quantity"
                // required
                value={editProduct.quantity}
                className="text-base block w-full rounded-md  p-1 shadow-sm shadow-stone-400 ring-gray-300 placeholder:text-gray-400"
              />
            </div>
          </div>

     {/* Categoria */}
     <div className="sm:col-span-3">
            <label htmlFor="category" className="text-base block text-sm font-medium leading-6 text-gray-900">
              Categoria
            </label>
            <div className="mt-2">
              <select
                id="category"
                name="category"
                // required
                onChange={handleTextChange}
                className="text-base block w-full rounded-md  p-1 shadow-sm shadow-stone-400 ring-gray-300 placeholder:text-gray-400"
              >
                <option value="" disabled selected >Selecciona una categoria</option>
                <option value="camisa">Camisa</option>
                <option value="falda">Falda</option>
                <option value="vestido">Vestido</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Talla y Descuento */}
      <div className="pb-12">
        
        <div className="mt-10 space-y-10">

          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">Talla</legend>
            <div className="mt-6 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input id="l" name="l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"  onChange={handleSizeChange}/>
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="l" className="font-medium text-gray-900">L</label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input id="s" name="s" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 " onChange={handleSizeChange}/>
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="s" className="font-medium text-gray-900">S</label>
                 
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input id="m" name="m" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" onChange={handleSizeChange}/>
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="m" className="font-medium text-gray-900">M</label>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">Descuento</legend>
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-x-3">
                <input id="yesDiscount" name="discount" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <label htmlFor="yesDiscount" className="block text-sm font-medium leading-6 text-gray-900">SI</label>
              </div>
              <div className="flex items-center gap-x-3">
                <input id="noDiscount" name="discount" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <label htmlFor="noDiscount" className="block text-sm font-medium leading-6 text-gray-900">NO</label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      {/* Talla */}
          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="quantitySize" className="block text-sm font-medium leading-6 text-gray-900">
              Cantidad del descuento
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="quantityDiscount"
                id="quantityDiscount"
                value={editProduct.discount}
                onChange={handleDiscountChange}
                className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm shadow-stone-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
    </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6    text-gray-900">
          Cancel
          </button>
          <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm shadow-stone-400 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Save
          </button>
        </div>
      </form>
    </div>
    }
    </>
  )
}

export default EditProduct;