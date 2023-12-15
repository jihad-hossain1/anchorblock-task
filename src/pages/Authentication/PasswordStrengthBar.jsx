import { motion } from "framer-motion";
import { strength_bar } from "../../utils/fremer.motion";

const PasswordStrengthBar = ({ newpassvalue }) => {
  return (
    <motion.div {...strength_bar} className="flex items-center gap-4">
      <div
        className={`${
          newpassvalue?.length >= 3 ? "bg-[#F04438]" : ""
        } w-14 h-1.5 border border-zinc-300 `}
      />
      <div
        className={`${
          newpassvalue?.length >= 4 ? "bg-[#F04438]" : ""
        } w-14 h-1.5 border border-zinc-300 `}
      />
      <div
        className={`${
          newpassvalue?.length >= 5 ? "bg-[#F04438]" : ""
        } w-14 h-1.5 border border-zinc-300 `}
      />
      <div
        className={`${
          newpassvalue?.length >= 6 ? "bg-[#F04438]" : ""
        } w-14 h-1.5 border border-zinc-300 `}
      />
      <div
        className={`${
          newpassvalue?.length >= 8 ? "bg-[#F04438]" : ""
        } w-14 h-1.5 border border-zinc-300 `}
      />
    </motion.div>
  );
};

export default PasswordStrengthBar;
