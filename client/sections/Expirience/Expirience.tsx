import { FC } from "react";
import Role from "../../components/Role/Role";
import Section from "../../components/Section/Section";
import { jobs } from "./data";

const Expirience: FC = () => {
  return (
    <Section id="expirience" justify="space-around" wrap>
      {jobs.map((job, idx) => {
        return (
          <Role
            key={idx}
            company={job.company}
            location={job.location}
            role={job.role}
            years={job.years}
          />
        );
      })}
    </Section>
  );
};

export default Expirience;
