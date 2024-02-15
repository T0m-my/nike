import Button from "../components/Button"

const Subcribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10 capitalize" id="contact-us">
      <h3 className=" text-4xl leading-[68px] font-palanquin font-bold lg:max-w-md">sign up for <span className="text-coral-red">updates</span> & newsletter</h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button 
            label='Sign Up'
            fullwidth
          />
        </div>
      </div>
    </section>
  )
}

export default Subcribe