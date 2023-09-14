import Button from "./UI/Button"

const Hero = () => {
  return (
    <section className=" text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
       EXTREME PC WORKSTATIONS

      </h1>

      <p className="mx-auto text-black mt-4 max-w-xl sm:text-xl/relaxed">
      Build your dream PC at the best price possible with theMVP configuration,
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Button color="primary">Get Started</Button>

        <Button  variant="outline">Learn More</Button>
      </div>
    </div>
  </div>
</section>
  )
}
export default Hero