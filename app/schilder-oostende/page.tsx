import type { Metadata } from "next";
import LocalPage from "../_components/LocalPage";
import { oostendePage } from "../_data/local-pages";

export const metadata: Metadata = {
  title: oostendePage.metaTitle,
  description: oostendePage.metaDescription,
};

export default function SchilderOostendePage() {
  return <LocalPage data={oostendePage} />;
}
