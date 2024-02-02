import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 " >
        <img src={offer} width={773} height={687} className="object-contain w-full " />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize max-sm:text-[72px] max-sm:leading-[82px] font-bold lg:max-w-lg">
          Special <span className="text-coral-red inline-block mt-3 ">Offer</span> 
        </h2>
        
        
        <div className="leading-9">
          <p className="mt-4 lg:max-w-lg info-text ">
            Lorem ipsum dolor sit ar adipisic Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, vitae obcaecati. Ex distinctio accusantium quam omnis consequuntur est eaque nostrum placeat voluptatem quisquam.ing pedit odio voluptate!
          </p>
          <p className="mt-6 lg:max-w-lg info-text mb-5">Lorem, ipsum dolor sit amet consectetur adipisiciniciatis nobis it nihil a voluptate reiciendis, consequuntur dolor veritatis?</p>
        <div className="mt-11 flex flex-wrap gap-4 ">
          <Button label="Show now" iconURL={arrowRight}/>
          <Button label="Learn more" backgroundColor="bg-white" borderColor=""/>
        </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer