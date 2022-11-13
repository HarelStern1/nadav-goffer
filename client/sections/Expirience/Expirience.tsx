import { FC } from "react";
import Role from "../../components/Role/Role";
import Section from "../../components/Section/Section";
import { jobs } from "./data";
import { Grid } from "./Expirience.styled";

const Expirience: FC = () => {
  return (
    <Section id="expirience" justify="center">
      <Grid>
        {jobs.map((job, idx) => {
          return (
            <Role
              key={idx}
              img={job.img}
              imgWidth={job.imgWidth}
              company={job.company}
              role={job.role}
            />
          );
        })}
      </Grid>
    </Section>
  );
};

export default Expirience;
