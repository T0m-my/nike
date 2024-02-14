const Button = ({label, iconURL}) => {
  return (
    <button className="border border-x-coral-red bg-coral-red text-white rounded-full px-7 py-4 font-montserrat text-lg leading-none flex justify-center items-center gap-2">
      {label}
      {iconURL && <img 
        src={iconURL} 
        alt="Arrow right icon" 
        className="w-5 h-5 ml-2 rounded-full" 
      />}
    </button>
  )
}

export default Button