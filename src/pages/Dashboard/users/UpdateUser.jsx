import React, { useState } from "react";
import { GoPencil } from "react-icons/go";
import Modal from "../../../components/Modal/Modal";
import { useUpdateUserMutation } from "../../../redux/fetures/api/baseApi";
import toast from "react-hot-toast";

const UpdateUser = ({ upData }) => {
  //   console.log(upData);
  const [updateUser, { data: updatedData }] = useUpdateUserMutation();

  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    job: "",
  });

  const handleChnage = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleForm = (e) => {
    e.preventDefault();
    updateUser(
      { id: upData?.id },
      { data: { name: formData?.name, job: formData?.job } }
    );

    if (updatedData?.updatedAt) {
      toast.success(`user state updatedAt: ${updatedData?.updatedAt}`);
      setFormData({
        name: "",
        job: "",
      });
      setIsOpen(false);
    }
  };
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <GoPencil size={23} />
      </button>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Update User"}>
        <form
          onSubmit={handleForm}
          className="flex flex-col gap-5 w-full md:w-[330px] mx-auto"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="Name">Name</label>
            <input
              required
              onChange={handleChnage}
              defaultValue={upData?.name}
              type="text"
              name="name"
              className="cinpt"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="Job">Job</label>
            <input
              required
              onChange={handleChnage}
              className="cinpt"
              defaultValue={upData?.job}
              type="text"
              name="job"
            />
          </div>
          <div>
            <button
              type="submit"
              className="cbtn bg-[#6941C6] w-full text-zinc-50 py-2"
            >
              create
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default UpdateUser;
