"use client";
import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";

export default function Home() {
  const {data: accounts, isLoading} = useGetAccounts();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {accounts?.map((account) => (
        <div key={account.id}>
          <h1>{account.name}</h1>
          <Button>Edit</Button>
        </div>
      ))}
    </div>
  );
}
