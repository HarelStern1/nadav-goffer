import Image from "next/image";
import { FC } from "react";
import { RoleProps } from ".";
import { Wrapper } from "./Role.styled";

const Role: FC<RoleProps> = ({ img, imgWidth, company, role }) => {
  return (
    <Wrapper>
      <img style={{ margin: "0 auto" }} src={img} width={imgWidth} />
      <h2>{company}</h2>
      <h4>{role}</h4>
    </Wrapper>
  );
};

export default Role;
