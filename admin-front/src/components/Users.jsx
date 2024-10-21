

const Users = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Nombre</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Rol</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b">María Pérez</td>
            <td className="px-4 py-2 border-b">maria@example.com</td>
            <td className="px-4 py-2 border-b">Cliente</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
