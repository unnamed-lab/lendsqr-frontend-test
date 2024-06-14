//  Might not be necessary
export interface IMetaBasic {
  title: string;
  desc: string;
  start_url: string;
  theme_color: string;
  background_color: string;
}

export interface IMetaBase {
  metadataBase: URL;
  alternates: {
    canonical: string;
    languages: Record<string, string>;
  };
}
