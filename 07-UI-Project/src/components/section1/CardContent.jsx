import { ArrowRight } from 'lucide-react';

const CardContent = ({ img, intro, tag ,id}) => {
  return (
    <>
      <img className="w-full h-full object-cover" src={img} alt="img" />
      <div className="absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between">
        <h1 className="bg-white flex text-2xl font-semibold justify-center items-center w-12 h-12 rounded-full ">
          {id}
        </h1>
        <div>
          <div>
            <p className="text-xl text-white mb-14 leading-relaxed">{intro}</p>
            <div className="flex justify-between ">
              <button className="bg-blue-600 text-white font-semibold px-8 py-2 rounded-full">
                {tag}
              </button>
              <button className="bg-blue-600 text-white font-semibold px-2 py-1 rounded-full">
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContent;
