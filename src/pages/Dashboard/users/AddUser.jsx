import { useState } from "react";
import { GoPlus } from "react-icons/go";
import Modal from "../../../components/Modal/Modal";
import { useSetUserMutation } from "../../../redux/fetures/api/baseApi";
import toast, { Toaster } from "react-hot-toast";

const AddUser = () => {
  const [setUser, { data: userData }] = useSetUserMutation();
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
    setUser({ name: formData?.name, job: formData?.job });
    if (userData?.id) {
      toast.success(`your id: ${userData?.id} successfull created`);
      setFormData({
        name: "",
        job: "",
      });
      setIsOpen(false);
    }
  };
  return (
    <div>
      <Toaster />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cbtn flex items-center gap-1 bg-[#7F56D9] text-zinc-50 py-[5px]"
      >
        <GoPlus size={20} /> Add User
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add user"}>
        <form
          onSubmit={handleForm}
          className="flex flex-col gap-5 w-full md:w-[330px] mx-auto"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="Name">Name</label>
            <input
              required
              onChange={handleChnage}
              defaultValue={formData.name}
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
              defaultValue={formData.job}
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
    </div>
  );
};

export default AddUser;
