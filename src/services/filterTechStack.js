import { getTechStack } from "./getTechStack";

export function filterTechStack(techStack) {
  let filteredTechStack = getTechStack().filter((data) =>
    data.techStackLists.includes(techStack)
  );

  return filteredTechStack;
}
