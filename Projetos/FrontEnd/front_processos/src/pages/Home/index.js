import { Navbar } from "../../components/Navbar";
import { ModalFormulario } from "../../components/ModalFormulario";
import { ProcessoCard } from "../../components/Card";
import Skeleton from "@material-ui/lab/Skeleton";
import { useState } from "react";
import { AddProcessButton } from "../../components/AddButton/AddButton";
import { Paper } from "@material-ui/core";

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
      
      <Paper elevation={3} style={{ width: '55%', margin: 'auto', paddingTop: '50px', paddingBottom: '10px' }}>
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


      </Paper>
      
      <AddProcessButton />

      <ModalFormulario 
      openModal={openModal}
      handleModalState={handleModalState}
      />
    </>
  );
};
