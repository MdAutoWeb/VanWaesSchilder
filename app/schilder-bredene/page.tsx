import type { Metadata } from "next";
import LocalPage from "../_components/LocalPage";
import { bredenePage } from "../_data/local-pages";

export const metadata: Metadata = {
  title: bredenePage.metaTitle,
  description: bredenePage.metaDescription,
};

export default function SchilderBredenePage() {
  return <LocalPage data={bredenePage} />;
}
