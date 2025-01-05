import { CreateOrganization } from "@clerk/nextjs";

export default function CreateOrgPage() {
  return (
    <>
      <CreateOrganization path="/create-organization" />
    </>
  );
}
