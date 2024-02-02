import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container ">
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize max-sm:text-[72px] max-sm:leading-[82px] font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red inline-block mt-3 ">Super</span> 
          <span className="text-coral-red inline-block mt-3 ">Quality</span> Shoes
        </h2>
        
        
        <div className="leading-9">
          <p className="mt-4 lg:max-w-lg info-text ">
            Lorem ipsum dolor sit ar adipisic Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, vitae obcaecati. Ex distinctio accusantium quam omnis consequuntur est eaque nostrum placeat voluptatem quisquam.ing pedit odio voluptate!
          </p>
          <p className="mt-6 lg:max-w-lg info-text mb-5">Lorem, ipsum dolor sit amet consectetur adipisiciniciatis nobis it nihil a voluptate reiciendis, consequuntur dolor veritatis?</p>
        <Button label="Show now" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
          <img src={shoe8} alt="shoe8" width={570} height={522}  className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality