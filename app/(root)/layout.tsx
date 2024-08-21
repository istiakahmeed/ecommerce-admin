import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // load the first store available with the current logged in user
  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  });

  // redirect to the dashboard
  if (store) {
    redirect(`/${store.id}`);
  }

  return <>{children}</>;
}
