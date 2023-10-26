import type { NextPage } from "next";
import { Project } from "../components/project";
import DetailProject from "../components/project/detail-project";

const project: NextPage = () => {
  return (
    <div>
      {/* <Project /> */}
      <DetailProject />
    </div>
  );
};

export default project;
