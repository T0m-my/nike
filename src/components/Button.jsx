const Button = ({label, iconURL, backgroundColor, borderColor, textColor, fullwidth}) => {
  return (
    <button className={
      `border rounded-full ${fullwidth && 'w-full'}
        ${
          !backgroundColor}
        ? 'border-coral-red bg-coral-red text-white'
        : ${backgroundColor} ${borderColor} ${textColor}

        px-7 py-4 font-montserrat text-lg leading-none flex justify-center items-center gap-2`
        }>
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