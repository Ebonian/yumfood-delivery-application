import { NextPage } from "next";
import Link from "next/link";
import Map from "../components/Map";

const Home: NextPage = () => {
  return (
    <main>
      <div className="grid place-content-center w-full h-16 bg-primary text-white text-xl font-semibold">
        <h1>Yumfood</h1>
      </div>
      <div>
        <h1>Hello World!</h1>
        <Link href="/receiving">
          <a>Receiving</a>
        </Link>
      </div>
      {/* <section className="min-w-[600px] min-h-screen">
        <Map />
      </section> */}
      <iframe
        width="100%"
        height="400px"
        src="https://api.mapbox.com/styles/v1/ebonian/ckyx5wt8z000i14nzgggsphev.html?title=false&access_token=pk.eyJ1IjoiZWJvbmlhbiIsImEiOiJja3l4NXA0eGUwZmxmMnZwZmpwYjZ3bXY3In0.AjTuTP62fDzsdPIdScnimg&zoomwheel=false#12/13.7563/100.5018"
        title="Navigation"
      ></iframe>
    </main>
  );
};

export default Home;
