import NollywoodFilmmakerImage from "../../public/images/nollywood-filmmaker.png";
import WhispaHealthImage from "../../public/images/whispa-health.png";
import PayscribeImage from "../../public/images/payscribe.png";
import AfternoonPrepImage from "../../public/images/afternoon-prep.png";
import Web3Image from "../../public/images/web3bridge.png";
import GithubImage from "../../public/images/github.jpg";

export const projectImageMap: Record<string, any> = {
  "Nollywood filmmaker": NollywoodFilmmakerImage,
  "Whispa Health": WhispaHealthImage,
  "Banking system in GO": GithubImage,
  "Banking system in ExpressJS": GithubImage,
  "Payscribe": PayscribeImage,
  "Afternoonprep": AfternoonPrepImage,
  "Web3": Web3Image,
};

export const getProjectImage = (title: string) => {
  return projectImageMap[title] || GithubImage; // Default to Github image if not found
};
