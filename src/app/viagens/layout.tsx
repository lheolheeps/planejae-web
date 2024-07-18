import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { SignOutButton } from "@components";
import { authOptions } from "@lib/next-auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");

  return (
    <div className="px-4 py-2">
      <div className="flex items-center justify-between gap-2 w-full mb-4">
        <h1>Viagens</h1>
        <SignOutButton />
      </div>
      {children}
    </div>
  );
}
