import { FC } from "react";
import { RoleProps } from ".";

const Role: FC<RoleProps> = ({ company, location, role, years }) => {
  return (
    <div style={{ margin: "30px 60px" }}>
      <h2>
        {company}, <span>{location}</span>
      </h2>
      <p>{role}</p>
      <p>{years}</p>
    </div>
  );
};

export default Role;
