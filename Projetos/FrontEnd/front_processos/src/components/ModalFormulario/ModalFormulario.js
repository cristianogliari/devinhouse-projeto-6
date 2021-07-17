import { Modal } from "@material-ui/core";

import { FormProcesso } from "./FormProcesso";

import { useStyle } from "./ModalFormulario.styles";

export function ModalFormulario(props) {
  const { openModal, handleModalState, processo } = props;

  const classes = useStyle();
  return (
    <Modal
      className={classes.teste}
      open={openModal}
      onClose={handleModalState}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div>
        {processo == null ? (
          <FormProcesso
            handleModal={handleModalState}
            formType="cadastro"
            processoDados={{ interessado: "", ano: "", descricao: "" }}
          />
        ) : (
          <FormProcesso
            handleModal={handleModalState}
            formType="editar"
            processoDados={processo}
          />
        )}
      </div>
    </Modal>
  );
}
