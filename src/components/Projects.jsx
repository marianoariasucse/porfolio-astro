import { motion } from "framer-motion";

const projects = [
  {
    title: "Proyect 1",
    descripction: "Lorem ipsum dolor sit.",
    link: "https://google.com",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  },
  {
    title: "Proyect 2",
    descripction: "Lorem ipsum dolor sit.",
    link: "https://google.com",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  },
];

const handleImageClick = (link) => {
    window.location.href = link;
}

export const Projects = () => {
  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="custom-block-subtitle">
                Galeria de proyectos
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                Ejemplos de mi trabajo
              </h2>
            </div>
            {/* gallery */}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className=" rounded-lg"
                >
                  <img
                    className="h-auto max-w-full rounded-lg hover:cursor-pointer"
                    src={project.image}
                    alt={project.title}
                    title="Click para ver proyecto"
                    onClick={handleImageClick(project.link)}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
