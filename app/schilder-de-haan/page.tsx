import type { Metadata } from "next";
import LocalPage from "../_components/LocalPage";
import { deHaanPage } from "../_data/local-pages";

export const metadata: Metadata = {
  title: deHaanPage.metaTitle,
  description: deHaanPage.metaDescription,
};

export default function SchilderDeHaanPage() {
  return <LocalPage data={deHaanPage} />;
}
