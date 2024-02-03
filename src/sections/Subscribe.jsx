
import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex-col  justify-center items-center text-center gap-10 max-lg:flex-col ">
      <h3 className="text-4xl leading-[64px] lg:max-w-sl lg:text-[50px] font-palanquin font-bold text-[30px] max-sm:text-center">
        Sign Up from <span className="text-coral-red ">Updates</span> <span>& Newsletter</span> </h3>
        <div className="w-full border my-2 rounded-lg ">
          <input type="text" placeholder="subscribe@nike.com" 
          className="input leading-4 my-4 font-bold   "/>
        </div>
          <div className="flex w-full max-sm:justify-end items-center max-sm:w-full">
            <Button label='sign up' />
          </div>
    </section>
  )
}

export default Subscribe