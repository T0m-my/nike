const Hero = () => {
  return (
    <section id="home" className="w-full min-h-screen flex flex-col xl:flex-row justify-center gap-10 max-container">
      <div className="border-2 border-red-500 p-2 relative w-full xl:2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28">
        <p>Our Summer Collection</p>
        <h1>
          <span>New Arrival</span>
          <br />
          <span>Nike Shoes</span>
        </h1>
        <p>Discover stylish Nike arrivals, quality comfort, and innovation for your active life</p>
      </div>
    </section>
  )
}

export default Hero