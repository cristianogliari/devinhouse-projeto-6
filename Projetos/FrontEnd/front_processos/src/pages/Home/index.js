import { Navbar } from "../../components/Navbar";
import { ModalFormulario } from "../../components/ModalFormulario";
import { ProcessoCard } from "../../components/Card";
import Skeleton from "@material-ui/lab/Skeleton";
import { useState } from "react";

const skeleton = false;

export const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalState = () => {
    setOpenModal((prev) => !prev);
  };

  const handleEdit = () => {
    setOpenModal(true)
  }

  return (
    <>
      <Navbar />
      {skeleton ? (
        <Skeleton
          width="50%"
          height="181px"
          animation="wave"
          style={{ margin: "auto", borderRadius: "10px" }}
        />
      ) : (
        <ProcessoCard 
          handleEdit={handleEdit}
        />
      )}
      <ModalFormulario 
      openModal={openModal}
      handleModalState={handleModalState}
      />
    </>
  );
};
