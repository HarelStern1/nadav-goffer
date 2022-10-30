import { FC } from "react";
import { RoleProps } from ".";
import { Wrapper } from "./Role.styled";

const Role: FC<RoleProps> = ({ company, location, role, years }) => {
  return (
    <Wrapper>
      <h2>
        {company}
        {/* {location && ","} <span>{location}</span> */}
      </h2>
      <h4>{role}</h4>
      <p>{years}</p>
    </Wrapper>
  );
};

export default Role;
