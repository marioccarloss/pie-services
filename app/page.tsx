import Services from "@/components/services";
import ServicesSkeleton from "@/components/services-skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<ServicesSkeleton />}>
      <Services />
    </Suspense>
  );
}
