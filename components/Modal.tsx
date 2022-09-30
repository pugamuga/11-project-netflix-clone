import { XIcon } from "@heroicons/react/outline";
import MuiModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

export default function Modal(): JSX.Element {
  const [showModal, setShowModal] = useRecoilState(modalState);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button className="modalBtn absolute right-5 top-5 !z-40">
          <XIcon className="w-6 h-6 stroke-[2px] tr hover:stroke-[3px]" onClick={handleClose} />
        </button>
      </>
    </MuiModal>
  );
}
