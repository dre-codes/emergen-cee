import "@/app/globals.css";
import { Inter } from "next/font/google";
//import { ThemeProvider } from "@/components/theme-provider"
import { SessionProvider } from "./components/SessionProvider";
import { getServerSession } from "next-auth";

import { authOptions } from "../pages/api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HealthTrack - Your Complete Health & Fitness App",
  description:
    "Track your fitness, nutrition, sleep, and more with our all-in-one health app. Achieve your wellness goals with personalized insights.",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
