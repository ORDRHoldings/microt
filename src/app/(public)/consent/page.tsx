import { Metadata } from "next";
import ConsentFormClient from "./ConsentFormClient";

export const metadata: Metadata = {
  title: "Client Consent Form | Velvet Brow by Tannaz",
  description:
    "Complete your pre-treatment client intake and consent form before your permanent makeup appointment at Velvet Brow by Tannaz.",
};

export default function ConsentPage() {
  return <ConsentFormClient />;
}
