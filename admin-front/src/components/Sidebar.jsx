import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white">RAME</h1>
      </div>
      <nav className="mt-10">
        <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Pagina Principal
        </Link>
        <Link to="/products" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Productos
        </Link>
        <Link to="/sales" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Ventas
        </Link>
        <Link to="/users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Usuarios
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
