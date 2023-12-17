import { GoPencil, GoTrash } from "react-icons/go";
import { framer_error } from "../../../utils/fremer.motion";
import { motion } from "framer-motion";
import UpdateUser from "./UpdateUser";
import { useDeleteUserMutation } from "../../../redux/fetures/api/baseApi";
import toast from "react-hot-toast";

const SingleUser = ({ item }) => {
  const [deleteData, { data: deletedData }] = useDeleteUserMutation();

  const handleDelete = (itId) => {
    deleteData({ itId });
    console.log(itId);
    toast.success(` ${item?.first_name} : delete successfull `);
    console.log(deletedData);
  };
  return (
    <>
      <tr className="trd ">
        <motion.td
          {...framer_error}
          className="whitespace-nowrap px-6 py-4 font-medium"
        >
          <div className="flex items-center gap-5">
            <div className="">
              <input type="checkbox" className="" name="" id="" />
            </div>
            <div className="flex items-center gap-3">
              <div className=" w-fit">
                <img src={item?.avatar} className="rounded-full w-14" alt="" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">{item?.first_name}</h4>
                <h5 className="font-normal">{item?.email}</h5>
              </div>
            </div>
          </div>
        </motion.td>
        <motion.td {...framer_error} className="whitespace-nowrap px-6 py-4">
          <div>
            <h4>Design software</h4>
            <h5 className="text-gray-500">Super lightweight design app</h5>
          </div>
        </motion.td>
        <motion.td {...framer_error} className="whitespace-nowrap px-6 py-4">
          <button className="bg-[#ECFDF3] rounded-md text-[#027A48] px-2">
            Customer
          </button>
        </motion.td>
        <motion.td {...framer_error} className="whitespace-nowrap px-6 py-4">
          <div className="flex items-center gap-5">
            <button onClick={() => handleDelete(item?.id)}>
              <GoTrash size={23} />
            </button>
            <UpdateUser upData={item} />
          </div>
        </motion.td>
      </tr>
    </>
  );
};

export default SingleUser;
