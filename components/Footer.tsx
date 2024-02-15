import Link from "next/link";

export interface FooterProps {
  children?: React.ReactNode;
  marginTop?: boolean;
}

export function Footer(props: FooterProps) {
  return (
    <footer
      className={`bg-secondary-900 h-[50vh] ${props.marginTop ?? "mt-12"} `}
    >
      <div className="container mx-auto pt-24">
        <div className="grid grid-rows-1 grid-flow-col gap-4">
          <div className="row-span-2">
            <Link href="/">

              <img src="/img/logo-amazonface.png" alt="DataMap" className="px-6 w-60 " />

            </Link>
            <p className="px-12 py-8">
              Have an account?{" "}
              <a href={`${process.env.DATAMAP_BASE_URL}/account/login?phase=sign-in&tenancy=amazon-face`} >
                Sign in
              </a >
            </p>
          </div>
          <div className=" row-span-2">
            <h2 className="font-light">Project</h2>
            <ul>
              <li>
                <a href="https://amazonface.unicamp.br/" target="_blank">
                  About
                </a>
              </li>
              <li>
                <Link href="/project/tutorials">
                  Tutorials
                </Link>
              </li>
              <li>
                <a href="https://amazonface.unicamp.br/wp-content/uploads/2022/11/amazon-face-data-policy.pdf" target="_blank">
                  Data Policy
                </a>
              </li>
            </ul>
          </div>
          <div className=" row-span-2">
            <h2 className="font-light">Communication</h2>
            <ul className="px-2 py-4">
              <li>
                <a href="https://amazonface.unicamp.br/noticias/" target="_blank">
                  News
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center p-12">
          © {new Date().getFullYear()} Data Map Platform
        </p>
      </div>
    </footer>
  );
}
