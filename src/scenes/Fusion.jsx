
import LineGradient from "../components/LineGradient";

import { motion } from "framer-motion";
import fusion from "../assets/fusion.jpg";
import fusion2 from "../assets/fusion2.jpg";


const Fusion = () => {
  

  return (
    <section id="fusion" className="py-48">
       
      
      
       <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PARTY</span> WEAR
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      <div className="md:flex md:justify-between gap-16 mt-5">
        
 
        <motion.div
          className="md:w-3/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
   <div
            className="relative  z-0 ml-9 before:absolute before:-top-5 before:-right-5
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-yellow before:z-[-1]"
          >
<img className="z-40 max-w-[900px] " src={fusion} alt="skills" />
          </div>
          <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">TRADITIONAL</span> ATTIRE
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
            </motion.div>




           
        







            <motion.div
          className="md:w-3/3 mt-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 2.7 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          
<img className="z-10" src={fusion2} alt="skills" />
      
        </motion.div>
            </div>



      

      
          

    </section>
 

   
  );
};

export default Fusion;
