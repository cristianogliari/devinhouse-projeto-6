import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from './AddButton.styles';

export const AddProcessButton = (props) => {
  const classes = useStyles();

  const { openModalCadastro } = props;
  return (
    <Fab 
      color="primary" 
      aria-label="add" 
      className={classes.root} 
      style={{ padding: '40px' }} 
      onClick={openModalCadastro} >
        <AddIcon fontSize="large" />
    </Fab>
  )
}