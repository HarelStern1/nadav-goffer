import { FC } from "react";
import { RoleProps } from ".";
import { Wrapper } from "./Role.styled";

const Role: FC<RoleProps> = ({ company, role }) => {
  return (
    <Wrapper>
      <h2>{company}</h2>
      <h4>{role}</h4>
    </Wrapper>
  );
};

export default Role;
