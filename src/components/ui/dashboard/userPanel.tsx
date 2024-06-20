import { PanelContainerProps, User } from "@/types/dashboard";
import { currencyString } from "@/utils/formatter";
import { checkPattern, emailRegExp } from "@/utils/validate.form";
import { CSSProperties } from "react";

export default function UserPanel({
  panel,
  data,
}: {
  panel: number;
  data: User;
}) {
  switch (panel) {
    case 0:
      return <GeneralDetail data={data} />;
    case 1:
      return <Documents data={data} />;
    case 2:
      return <BankDetail data={data} />;
    case 3:
      return <Loans data={data} />;
    case 4:
      return <Settings data={data} />;
    case 5:
      return <AppSystem data={data} />;
  }
}

function PanelContainer({ title, data }: PanelContainerProps) {
  return (
    <section className="app-dashboard_content_container">
      <h2>{title}</h2>
      <div className="content-info">
        {data.map((el, i) => {
          return <PanelContent key={i} {...el} />;
        })}
      </div>
    </section>
  );
}

function PanelContent({
  title,
  property,
}: {
  title: string;
  property: string | number;
}) {
  let hasEmail: CSSProperties | undefined = undefined;

  if (typeof property === "string")
    hasEmail = checkPattern(emailRegExp, property)
      ? ({ textTransform: "lowercase" } as CSSProperties)
      : undefined;

  return (
    <div className="panel-content">
      <h3>{title}</h3>
      <p style={hasEmail}>{property}</p>
    </div>
  );
}

function GeneralDetail({ data }: { data: User }) {
  const personal = [
    { title: "full name", property: data.name },
    { title: "phone number", property: data.mobile },
    { title: "email address", property: data.email },
    { title: "bvn", property: data.bvn },
    { title: "gender", property: data.gender },
    { title: "martial status", property: data.marital },
    { title: "children", property: data.children },
    { title: "type of residence", property: data.residence },
  ];

  const education = [
    { title: "level of education", property: data.education },
    { title: "employment status", property: "employed" }, // I forgot to generate a employment status mock
    { title: "sector of employment", property: data.email }, // I forgot to generate a sector of employment mock
    { title: "duration of employment ", property: data.bvn }, // I forgot to generate a duration of employment mock
    { title: "office email", property: data.email },
    {
      title: "monthly income",
      property: `₦${currencyString(data.minIncome)} - ₦${currencyString(data.maxIncome)}`,
    },
    { title: "loan repayment", property: `₦${currencyString(data.repayment)}` },
  ];

  const social = [
    { title: "twitter", property: data.twitter },
    { title: "facebook", property: data.facebook },
    { title: "instagram", property: data.instagram },
  ];

  const guarantor = data.guarantor.map((el) => {
    const person = [
      { title: "full name", property: el.name },
      { title: "phone number", property: el.mobile },
      { title: "email address", property: el.email },
      { title: "relationship", property: el.relationship },
    ];

    return <PanelContainer title="guarantor" data={person} />;
  });
  return (
    <>
      <PanelContainer title="personal information" data={personal} />
      <PanelContainer title="education and employment" data={education} />
      <PanelContainer title="socials" data={social} />
      {guarantor}
    </>
  );
}

//  These sections won't be needed due to lack of resources and time.

function Documents({ data }: { data: User }) {
  return <div>Documents</div>;
}

function BankDetail({ data }: { data: User }) {
  return <div>Bank Detail</div>;
}

function Loans({ data }: { data: User }) {
  return <div>Loans</div>;
}

function Settings({ data }: { data: User }) {
  return <div>Settings</div>;
}

function AppSystem({ data }: { data: User }) {
  return <div>App System</div>;
}
