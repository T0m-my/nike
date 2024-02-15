import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, feedback, rating }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img 
        src={imgURL}
        alt={customerName}
        className="object-cover rounded-full w-[120px] h-[120px]"
      />
      <p className="mt-6 info-text text-center max-w-sm">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} alt="" width={24} height={24}/>
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className=" mt-3 font-palanquin font-bold text-3xl text-center">{customerName}</h3>
    </div>
  )
}

export default ReviewCard