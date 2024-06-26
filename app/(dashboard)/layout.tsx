import { Header } from "@/components/header";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>
        <h1>Dashboard Layout</h1>
        {children}
      </main>
    </>
  );
}
