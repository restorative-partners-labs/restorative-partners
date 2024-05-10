import EventCardOne from "@/components/ui/cards/eventCardOne";
import SectionTitle from "@/components/ui/sectionTitle";
import { eventsData } from "@/lib/fackData/eventsData";
import {
  cardSlideAnimation,
  cardSlideAnimationDelay,
  cardSlideAnimationRight,
  cardSlideAnimationRightDelay,
} from "@/lib/utils";

export const metadata = {
  title: "Events -- Restorative Partners",
  description:
    "Explore our calendar to participate in insightful discussions, experiential learning opportunities, and collaborative initiatives aimed at building a more equitable society. Join us in reimagining justice and cultivating meaningful connections within our community.",
};

const ProjectArchive = () => {
  return (
    <section>
      <div className="container-fluid ">
        <SectionTitle
          sectionName={"Events"}
          sectionTitle={"Healing Together"}
          sectionDesc={
            "Join us in reimagining justice and fostering community healing."
          }
        />
      </div>
      <div className="lg:pt-30 2sm:pt-20 pt-14">
        <div className="">
          {eventsData.map(
            ({
              id,
              project_desc,
              project_img,
              project_name,
              project_year,
              project_type,
              location,
              link,
            }) => {
              if (id % 2 === 0) {
                return (
                  <EventCardOne
                    key={id}
                    project_desc={project_desc}
                    project_img={project_img}
                    project_type={project_type}
                    location={location}
                    project_year={project_year}
                    link={link}
                    project_name={project_name}
                    order={"lg:order-1 order-0"}
                    position={
                      "lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2"
                    }
                    imageVariants={cardSlideAnimationRight()}
                    cardVariants={cardSlideAnimationRightDelay()}
                  />
                );
              } else {
                return (
                  <EventCardOne
                    key={id}
                    project_desc={project_desc}
                    project_img={project_img}
                    project_type={project_type}
                    location={location}
                    project_year={project_year}
                    link={link}
                    project_name={project_name}
                    position={
                      "lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2"
                    }
                    imageVariants={cardSlideAnimation()}
                    cardVariants={cardSlideAnimationDelay()}
                  />
                );
              }
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectArchive;
