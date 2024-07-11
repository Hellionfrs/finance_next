import { Header } from "@/components/header";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="gap-4 p-4 sm:p-8 lg:p-12">
        {children}
      </main>
    </>
  );
}
