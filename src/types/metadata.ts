import { IMetaBase, IMetaBasic } from "@/interfaces/metadata";

//  Might not be necessary
type TMetaData = {
    title: IMetaBasic["title"];
    desc: IMetaBasic["desc"];
    short_name?: IMetaBasic["title"];
    backgroundColor: IMetaBasic["background_color"];
    themeColor: IMetaBasic["theme_color"],
    startUrl: IMetaBasic["start_url"],
    metadataBase: IMetaBase["metadataBase"],
    alternates: IMetaBase["alternates"];
};

export type {TMetaData}

