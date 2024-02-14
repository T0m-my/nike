import { star } from "../assets/icons";

const PopularProductCard = ({ name, imgURL, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full sm:w-full">
      <img 
        src={imgURL} 
        alt={name} 
        className="w-[280px] h-[280px]"
      />
      <div className="mt-8 flex justify-start gap-2 5">
        <img 
          src={star}
          alt="rating" 
          width={24}
          height={24}
        />
        <p className="font-montserrat leading-normal text-xl text-slate-gray">(4.5)</p>
      </div>
      <h3 className="font-palanquin font-semibold text-2xl leading-normal mt-2">{name}</h3>
      <p className="font-montserrat font-semibold leading-normal text-2xl text-coral-red mt-2">{price}</p>
    </div>
  )
}

export default PopularProductCard