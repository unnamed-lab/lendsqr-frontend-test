import { TMetaData } from "@/types/metadata";

//  To aid in setting up the SEO metadata :)
const appdata: TMetaData = {
  title: "Lendsqr Frontend Engineering Test",
  desc: "Frontend Engineering Assessment Solution By Adebayo Anuoluwa Success",
  short_name: "Lendsqr Frontend Engineering Test",
  backgroundColor: "#21407d",
  themeColor: "#88d6fd",
  startUrl: "/",
  metadataBase: new URL("https://lendsqr-frontend-test.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-UK": "/en-UK",
      "en-US": "/en-US",
    },
  },
};

export default appdata;
