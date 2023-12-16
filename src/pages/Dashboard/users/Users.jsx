import { AiOutlineCloudUpload } from "react-icons/ai";
import { GoPlus, GoTrash, GoPencil } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { HiArrowDown } from "react-icons/hi2";
import { useState } from "react";
import { motion } from "framer-motion";
import { framer_error } from "../../../utils/fremer.motion";
import { useSelector } from "react-redux";
import {
  useGetPaginatedUsersQuery,
  useGetUsersQuery,
} from "../../../redux/fetures/api/baseApi";
import PaginatedUser from "./PaginatedUser";

const Users = () => {
  const [isSelectTab, setIsSelectTab] = useState(true);
  const { isError, isLoading, data, error } = useGetUsersQuery();

  const { pageNumber } = useSelector((state) => state?.users);

  const { data: userPagination } = useGetPaginatedUsersQuery(pageNumber);

  if (isLoading) {
    return <div>Data is loading.....</div>;
  }
  if (isError) {
    return <div> {error?.message} </div>;
  }

  return (
    <main className="mt-3">
      {/* import & add user section  */}
      <section className="flex justify-between items-center">
        <h4 className="font-semibold text-2xl">Users</h4>
        <div className="flex gap-3 items-center">
          <button className="cbtn border border-gray-200 flex items-center gap-1">
            <AiOutlineCloudUpload size={20} /> Import
          </button>
          <button className="cbtn flex items-center gap-1 bg-[#7F56D9] text-zinc-50 py-[5px]">
            <GoPlus size={20} /> Add User
          </button>
        </div>
      </section>
      {/* user lists section  */}
      <section className="mt-6">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm  border border-gray-300 rounded-lg">
                  <thead className=" border-b font-medium dark:border-neutral-200">
                    <tr>
                      <motion.th {...framer_error} className="px-6 py-4">
                        <div className="flex items-center gap-6">
                          {!isSelectTab ? (
                            <button
                              onClick={() => setIsSelectTab((pre) => !pre)}
                              className="flex items-center p-1 border border-[#7F56D9] rounded-md"
                            >
                              <GoPlus />
                            </button>
                          ) : (
                            <button
                              onClick={() => setIsSelectTab((pre) => !pre)}
                              className="flex items-center p-1 border border-[#7F56D9] rounded-md"
                            >
                              <FiMinus />
                            </button>
                          )}
                          <div className="w-fit flex items-center gap-2">
                            User Info
                            <HiArrowDown />
                          </div>
                        </div>
                      </motion.th>

                      <motion.th {...framer_error} className="px-6 py-4">
                        About
                      </motion.th>
                      <motion.th {...framer_error} className="px-6 py-4">
                        Status
                      </motion.th>
                    </tr>
                  </thead>
                  {isSelectTab && (
                    <tbody className="">
                      {userPagination?.data?.map((item, _i) => (
                        <tr key={_i} className="trd ">
                          <motion.td
                            {...framer_error}
                            className="whitespace-nowrap px-6 py-4 font-medium"
                          >
                            <div className="flex items-center gap-5">
                              <div className="">
                                <input
                                  type="checkbox"
                                  className=""
                                  name=""
                                  id=""
                                />
                              </div>
                              <div className="flex items-center gap-3">
                                <div className=" w-fit">
                                  <img
                                    src={item?.avatar}
                                    className="rounded-full w-14"
                                    alt=""
                                  />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-lg">
                                    {item?.first_name}
                                  </h4>
                                  <h5 className="font-normal">{item?.email}</h5>
                                </div>
                              </div>
                            </div>
                          </motion.td>
                          <motion.td
                            {...framer_error}
                            className="whitespace-nowrap px-6 py-4"
                          >
                            <div>
                              <h4>Design software</h4>
                              <h5 className="text-gray-500">
                                Super lightweight design app
                              </h5>
                            </div>
                          </motion.td>
                          <motion.td
                            {...framer_error}
                            className="whitespace-nowrap px-6 py-4"
                          >
                            <button className="bg-[#ECFDF3] rounded-md text-[#027A48] px-2">
                              Customer
                            </button>
                          </motion.td>
                          <motion.td
                            {...framer_error}
                            className="whitespace-nowrap px-6 py-4"
                          >
                            <div className="flex items-center gap-5">
                              <button>
                                <GoTrash size={23} />
                              </button>
                              <button>
                                <GoPencil size={23} />
                              </button>
                            </div>
                          </motion.td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                  <tfoot>
                    <PaginatedUser
                      userPage={userPagination?.page}
                      numberOfUser={userPagination?.per_page}
                      total_pages={userPagination?.total_pages}
                    />
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Users;
