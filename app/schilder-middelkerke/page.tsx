import type { Metadata } from "next";
import LocalPage from "../_components/LocalPage";
import { middelkerkePage } from "../_data/local-pages";

export const metadata: Metadata = {
  title: middelkerkePage.metaTitle,
  description: middelkerkePage.metaDescription,
};

export default function SchilderMiddelkerkePage() {
  return <LocalPage data={middelkerkePage} />;
}
