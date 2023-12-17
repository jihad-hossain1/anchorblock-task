import { AiOutlineCloudUpload } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
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
import SingleUser from "./SingleUser";

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
                      {/* {!searchData === ""
                        ? searchData?.map((item) => (
                            <SingleUser key={item?.id} item={item} />
                          ))
                        : userPagination?.data?.map((item, _i) => (
                            <SingleUser item={item} key={_i} />
                          ))} */}
                      {userPagination?.data?.map((item, _i) => (
                        <SingleUser item={item} key={_i} />
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
