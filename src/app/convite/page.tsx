import { Suspense } from "react";
import MenuConvitePageClient from "./MenuConvitePageClient";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <MenuConvitePageClient />
    </Suspense>
  );
}