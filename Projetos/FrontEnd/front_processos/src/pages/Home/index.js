import { useState, useEffect } from "react";

import { Paper } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import { Navbar } from "../../components/Navbar";
import { ModalFormulario } from "../../components/ModalFormulario";
import { ProcessoCard } from "../../components/Card";
import { AddProcessButton } from "../../components/AddButton/AddButton";

export const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleModalState = () => {
    setOpenModal((prev) => !prev);
  };

  const handleEdit = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    /* fetchProducts().then((state) => {
      setProducts(state);
      setLoading(!loading);
    }); */
  }, []);

  return (
    <>
      <Navbar />

      <Paper
        elevation={3}
        style={{
          width: "55%",
          margin: "auto",
          paddingTop: "50px",
          paddingBottom: "10px",
        }}
      >
        {loading ? (
          <Skeleton
            width="90%"
            height="181px"
            animation="wave"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              //marginBottom: "20px",
              borderRadius: "5px",
            }}
          />
        ) : (
          <ProcessoCard handleEdit={handleEdit} />
        )}

        {loading ? (
          <Skeleton
            width="90%"
            height="181px"
            animation="wave"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              //marginBottom: "20px",
              borderRadius: "5px",
            }}
          />
        ) : (
          <ProcessoCard handleEdit={handleEdit} />
        )}

        {loading ? (
          <Skeleton
            width="90%"
            height="181px"
            animation="wave"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              //marginBottom: "20px",
              borderRadius: "5px",
            }}
          />
        ) : (
          <ProcessoCard handleEdit={handleEdit} />
        )}
      </Paper>

      <AddProcessButton openModalCadastro={handleModalState} />

      <ModalFormulario
        openModal={openModal}
        handleModalState={handleModalState}
      />
    </>
  );
};
