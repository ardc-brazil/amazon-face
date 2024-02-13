import Link from "next/link";

export function ActionItemsNavBar() {
  return <>
    <a href={`${process.env.DATAMAP_BASE_URL}/account/login?phase=sign-in&tenancy=amazon-face`} className="btn-primary-outline mx-2">
      Sign in
    </a >

    <a href={`${process.env.DATAMAP_BASE_URL}/account/login?phase=register&tenancy=amazon-face`} className="btn-primary-outline mx-2">
      Register
    </a >
  </>;

}
