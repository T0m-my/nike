const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full px-10 py-16 rounded-[20px] shadow-3xl"
    >
      <div className="h-11 w-11 flex justify-center items-center rounded-full bg-coral-red">
        <img
          src={imgURL}
          alt={label}
          width={24}
          height={24}
        />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal">{label}</h3>
      <p className="mt-3 text-slate-gray break-words font-montserrat text-lg leading-normal">{subtext}</p>
    </div>
  )
}

export default ServiceCard