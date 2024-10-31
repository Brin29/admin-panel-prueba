import AddProduct from "./AddProduct";
import products from "../json/productos.json";

const Products = () => {

  

  return (
    <>
      <AddProduct/>

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
