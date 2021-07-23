import { useState, useEffect } from "react";

import { Paper } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import { Navbar } from "../../components/Navbar";
import { ModalFormulario } from "../../components/ModalFormulario";
import { ProcessoCard } from "../../components/Card";
import { AddProcessButton } from "../../components/AddButton/AddButton";
import { useDataContext } from "../../utils/context/DataContext";

export const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const { stateLoading, setStateLoading, listaProcesso, carregarData } = useDataContext();
  
  const handleModalState = () => {
    setOpenModal((prev) => !prev);
  };

  const stateLoadingFinish = () => {
    setStateLoading("ready");
  }

  const timeOutSkeleton = () => {
    setTimeout(stateLoadingFinish, 3000)
  }

  useEffect(() => {
    timeOutSkeleton();
    carregarData();
  }, []);
  
  return (
    <>
      <Navbar />
      <Paper
        elevation={3}
        style={{
          width: "55%",
          margin: "auto",
          marginBottom: "100px",
          paddingTop: "50px",
          paddingBottom: "10px", }} >

          {stateLoading === "skeleton" ? (listaProcesso?.map((skeletonItens) => (
              <Skeleton
                key={skeletonItens.id}
                width="90%"
                height="190px"
                animation="wave"
                style={{ margin: "auto", borderRadius: "10px", marginTop: "-50px" }}
              />
            )))
          : (listaProcesso?.map((processo) => (
              <ProcessoCard 
                key={processo.id} 
                processo={processo} />
            )))}
      </Paper>
      <AddProcessButton openModalCadastro={handleModalState} />

      <ModalFormulario
        openModal={openModal}
        handleModalState={handleModalState}
      />
    </>
  );
};
