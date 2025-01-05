import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  OrganizationList,
  OrganizationProfile,
  OrganizationSwitcher,
  UserButton,
} from "@clerk/nextjs";

export default function ProtectedPage() {
  return (
    <>
      <div className="mx-auto grid max-w-5xl grid-cols-2 grid-rows-2">
        <Card>
          <CardHeader>
            <CardTitle>User Button</CardTitle>
          </CardHeader>
          <CardContent>
            <UserButton />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Switch Org</CardTitle>
          </CardHeader>
          <CardContent>
            <OrganizationSwitcher />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Org List</CardTitle>
          </CardHeader>
          <CardContent>
            <OrganizationList />
          </CardContent>
        </Card>
        {/* <Card>
          <CardHeader>
            <CardTitle>Help</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card> */}
      </div>
    </>
  );
}
