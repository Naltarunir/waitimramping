import Analysis from "./Analysis";
import { PageMetadata } from "@components/PageMetadata/PageMetadata";

const title = "Analysis Tools";
const description = "Interactive graphs & tools for analyzing healing and damage mechanics, rotation optimizations, and probability simulations";
export const metadata = PageMetadata(title, description);

export default function Page() {
  return <Analysis title={title} description={description} />;
}