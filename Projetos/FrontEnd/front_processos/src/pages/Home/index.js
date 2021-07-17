import { ProcessoCard } from "../../components";
import Skeleton from '@material-ui/lab/Skeleton';

export const Home = () => {
  return (
    <>
      <h1>Homepage</h1>
      <ProcessoCard />      

      <Skeleton width='50%' height='181px' animation='wave' style={{ margin: 'auto', borderRadius: '10px' }}/>
    </>
  )
}