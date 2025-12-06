import Card from './Card';

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full p-6 w-2/3 flex flex-nowrap rounded-4xl overflow-x-auto gap-10"
    >
      {props.users.map(function (p, i) {
        return (
          <Card key={i} id={i + 1} img={p.img} intro={p.intro} tag={p.tag} />
        );
      })}
    </div>
  );
};

export default RightContent;
