import { useState } from "react";
import { Paper } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import { Navbar } from "../../components/Navbar";
import { ModalFormulario } from "../../components/ModalFormulario";
import { ProcessoCard } from "../../components/Card";
import { AddProcessButton } from "../../components/AddButton/AddButton";
import { useDataContext } from "../../../utils/context/DataContext";

export const Home = () => {
  const skeletonItens = [1, 2, 3];
  const [openModal, setOpenModal] = useState(false);
  const {
    data: { listaProcesso },
  } = useDataContext();

  const handleModalState = () => {
    setOpenModal((prev) => !prev);
  };

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
        {skeleton ? (
          skeletonItens.forEach((skeletonItens) =>(
            <Skeleton
              ket={skeletonItens}
              width="50%"
              height="181px"
              animation="wave"
              style={{ margin: "auto", borderRadius: "10px" }}
            />
          ))
        ) : (
          listaProcesso.map((processo) => (
            <ProcessoCard key={processo.id} processo={processo} />
          ))
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
