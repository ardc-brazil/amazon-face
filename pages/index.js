import Link from "next/link";
import Layout from "../components/Layout";
import { ROUTE_PAGE_SEARCH } from "../contants/InternalRoutesConstants";

function TextDecorationBolder(props) {
  return (
    <span
      className={`underline decoration-secondary-900 decoration-8 underline-offset-4 ${props.className}`}
    >
      {props.children}
    </span>
  );
}

function SearchCategory(props) {
  return (
    <Link href={ROUTE_PAGE_SEARCH} legacyBehavior>
      <div className="bg-secondary-300 rounded-xl h-48 relative group cursor-pointer">
        <div className=" grid grid-cols-1 gap-4 place-items-center h-full bg-secondary-400 rounded-xl transition ease-in delay-150 duration-300 opacity-0 group-hover:opacity-100 border-2 border-secondary-900">
          <div>
            <p className="text-lg text-center">{props.children}</p>
          </div>
        </div>
        <button className="text-lg font-normal w-full h-full p-8 border-secondary-300 bg-secondary-300 rounded-xl absolute inset-0 transition ease-out delay-150 group-hover:opacity-0">
          {props.children}
        </button>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <Layout fluid={true}>
      <div className="special-background">
        <div className="container mx-auto flex flex-row flex-wrap pt-56 pb-24">
          <div className="w-full">
            <h1 className="font-bold text-8xl text-center pb-8">
              <TextDecorationBolder>DataMap for AmazonFACE</TextDecorationBolder>
            </h1>

            <h1 className="font-normal text-7xl text-center pb-8">
              Scientific data portal analysis, for AmazonFACE Program.
              <br />
            </h1>
          </div>
        </div>
        <div className="py-12 bg-gradient-to-t from-primary-50 h-40"></div>
      </div>
      <div className="container mx-auto px-8">

        <section className="mb-40">
          <p className="display-4 text-center">
            AmazonFACE Program
          </p>
          <p>
            The central feature of the program is a field experiment of unprecedented scope that will expose an area of mature forest in the Amazon to a predicted future concentration of CO2 at a research station near Manaus, Brazil, using "Free - Air CO2 Enrichment" (FACE). Greater knowledge about how the world's largest tropical forest functions in light of climate change and the use of this knowledge to guide regional policies on climate change mitigation and adaptation are part of the legacy the program seeks to establish.
          </p>
          <p>
            Know more about the program in <a href="https://amazonface.unicamp.br/" target="_blank">https://amazonface.unicamp.br/</a>.
          </p>
        </section>

        <section className="mb-40">
          <p className="display-4 text-center">
            With DataMap you can find environmental datasets from diverse
            sources of data from Brazil and the World.
          </p>
        </section>
        <section className="mb-40">
          <h1 className="py-8">
            <TextDecorationBolder className="font-normal">
              Catalog Datasets
            </TextDecorationBolder>
          </h1>

          <p className="text-xl">
            Our platform provides a centralized hub where researchers can easily
            catalog and organize all their datasets related to various research
            projects and campaigns. With intuitive and user-friendly tools, you
            can effortlessly upload, label, and categorize your datasets,
            ensuring quick access and efficient data management.
          </p>
        </section>

        <section className="mb-40">
          <h1 className="py-8">
            <TextDecorationBolder className="font-normal">
              Powerful Search
            </TextDecorationBolder>
          </h1>

          <p className="text-xl">
            We understand that the ability to find and understand your cataloged
            datasets is crucial for your research success. That's why our
            platform boasts a robust and highly flexible search service.
            Seamlessly navigate through your data repository using advanced
            search filters, metadata tags, and custom keywords. Discover hidden
            correlations, uncover insights, and retrieve specific datasets with
            unparalleled ease.
          </p>

        </section>

        <section className="mb-40">
          <h1 className="py-8">
            <TextDecorationBolder className="font-normal">
              Process and Analyse
            </TextDecorationBolder>
          </h1>

          <p className="text-xl">
            We take data processing and analysis to new heights with our
            seamless Jupyter Notebook integration. No need to switch between
            applications or download files; you can now process all the
            information from your datasets directly within the web application.
            Leverage the full power of Jupyter Notebooks' interactive and
            collaborative environment, harnessing its rich libraries and tools
            for data exploration, visualization, and advanced analytics.
            Experience unparalleled convenience and efficiency as you work with
            your datasets in real-time.
          </p>
        </section>
      </div>
    </Layout>
  );
}
