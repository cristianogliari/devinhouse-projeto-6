import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from './AddButton.style';

export const AddProcessButton = () => {
  const classes = useStyles();

  return (
    <Fab 
      color="primary" 
      aria-label="add" 
      className={classes.root} 
      style={{ padding: '40px' }} >
        
        <AddIcon fontSize="large" />
    </Fab>
  )
}