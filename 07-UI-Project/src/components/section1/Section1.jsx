import Navbar from './Navbar';
import Content from './Content';

const Section1 = (props) => {
  return (
    <div className=" w-full h-screen ">
      <Navbar />
      <Content users={props.users} />
    </div>
  );
};

export default Section1;
