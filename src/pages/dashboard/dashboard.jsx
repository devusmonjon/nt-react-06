import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <nav className="bg-[#ff9900] h-[80px] w-full py-5 px-3 flex justify-start items-center gap-32">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <ul className="flex gap-3 pl-2">
          <li className="text-white text-lg font-medium duration-300 hover:underline underline-offset-4">
            <NavLink to="/">View Website</NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex">
        <aside className="bg-[#ff9900] h-[calc(100vh_-_80px)] w-[300px] py-5 px-3 float-left">
          <ul className="flex flex-col gap-3">
            <li className="text-white text-lg font-medium duration-300 hover:underline underline-offset-4">
              <NavLink to="/dashboard/admin">Admin</NavLink>
            </li>
            <li className="text-white text-lg font-medium duration-300 hover:underline underline-offset-4">
              <NavLink to="/dashboard/user">User</NavLink>
            </li>
          </ul>
        </aside>

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
