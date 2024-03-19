import ProcessCard from "./ProcessCard"
import { processData } from "@/dataMock/data"

const Process = () => {
  return (
    <section className='pt-8 lg:px-8'>
        <h2 className='text-[32px] leading-[35px] text-center lg:text-[40px] lg:leading-[48px] font-bold jakarta-font text-gray-900'>Say <span className='underline'>Goodbye To Writing Docs</span>, and Hello To Wizardshot Doing it for YOU.</h2>
        <div className='grid grid-cols-1 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 pt-4 lg:pt-8'>
            {processData.map((process, index) => (
                <ProcessCard key={index} step={process.step} image={process.image} title={process.title} description={process.description} />
            ))}

        </div>
    </section>
  )
}

export default Process