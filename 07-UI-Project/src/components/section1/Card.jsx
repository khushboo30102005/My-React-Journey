import CardContent from './CardContent';

const Card = ({img, intro, tag, id}) => {
  return (
    <div className=" h-full w-80 relative overflow-hidden shrink-0  rounded-4xl">
      <CardContent id = {id} img={img} intro = {intro} tag = {tag} />
    </div>
  );
};

export default Card;
