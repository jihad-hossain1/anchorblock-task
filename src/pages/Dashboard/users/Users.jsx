import { AiOutlineCloudUpload } from "react-icons/ai";
import { GoPlus } from "react-icons/go";

const Users = () => {
  return (
    <main className="mt-3">
      <section className="flex justify-between items-center">
        <h4 className="font-semibold text-2xl">Users</h4>
        <div className="flex gap-3 items-center">
          <button className="cbtn border border-gray-200 flex items-center gap-1">
            <AiOutlineCloudUpload size={20} /> Import
          </button>
          <button className="cbtn flex items-center gap-1 bg-[#7F56D9] text-zinc-50 py-[6px]">
            <GoPlus size={20} /> Add User
          </button>
        </div>
      </section>
    </main>
  );
};

export default Users;
