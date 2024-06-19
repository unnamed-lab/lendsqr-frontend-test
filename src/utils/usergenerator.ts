const fs = require("fs");

type User = {
  id: string;
  name: string;
  organisation: string;
  username: string;
  image: string;
  tier: string;
  mobile: string;
  email: string;
  date: string;
  status: string;
  bvn: number;
  gender: string;
  marital: string;
  children: number;
  residence: string;
  education: string;
  bank: string;
  minIncome: number;
  maxIncome: number;
  balance: number;
  repayment: number;
  twitter: string;
  facebook: string;
  instagram: string;
  guarantor: Guarantor[];
};

type Guarantor = {
  name: string;
  mobile: string;
  email: string;
  relationship: string;
};

const names = [
  "Amina",
  "Chinwe",
  "Fatoumata",
  "Kwame",
  "Makena",
  "Oliver",
  "Harry",
  "Amelia",
  "Isla",
  "Emily",
  "Haruto",
  "Yuto",
  "Sota",
  "Yuki",
  "Hayato",
  "Nia",
  "Zuri",
  "Kofi",
  "Adisa",
  "Dalia",
  "Liam",
  "Noah",
  "Emma",
  "Ava",
  "Sophia",
  "Ren",
  "Hiroto",
  "Rin",
  "Asahi",
  "Minato",
  "Femi",
  "Jabari",
  "Kunto",
  "Lisha",
  "Zalika",
  "Jack",
  "George",
  "Olivia",
  "Charlotte",
  "Mia",
  "Daiki",
  "Haruki",
  "Kaito",
  "Yuma",
  "Sora",
  "Amina",
  "Chinwe",
  "Fatoumata",
  "Kwame",
  "Makena",
  "Oliver",
  "Harry",
  "Amelia",
  "Isla",
  "Emily",
  "Haruto",
  "Yuto",
  "Sota",
  "Yuki",
  "Hayato",
];

const companies = [
  "Access Bank",
  "Equity Bank",
  "KCB Group",
  "United Bank for Africa",
  "Zenith Bank",
  "FirstRand",
  "Standard Bank Group",
  "Absa Group",
  "Nedbank Group",
  "Investec",
  "QNB Group",
  "Al Rajhi Bank",
  "National Commercial Bank",
  "Emirates NBD",
  "Samba Financial Group",
  "Kuwait Finance House",
  "Qatar Islamic Bank",
  "Lendsqr",
  "Irorun",
];

function generateUsers(count: number, names: string[], companies: string[]) {
  // Premade data arrays
  const statuses = ["inactive", "pending", "blacklisted", "active"];
  const tiers = ["Bronze", "Silver", "Gold", "Platinum"];
  const genders = ["Male", "Female"];
  const maritalStatuses = ["Single", "Married", "Divorced", "Widowed"];
  const banks = [
    // African Banks
    "Absa Group Limited",
    "Standard Bank Group",
    "Nedbank Group",
    "FirstRand Bank",
    "Ecobank",
    "Guaranty Trust Bank",
    "Zenith Bank",
    "First Bank of Nigeria",
    "United Bank for Africa",
    "Access Bank PLC",
    // Asian Banks
    "Industrial and Commercial Bank of China",
    "China Construction Bank",
    "Agricultural Bank of China",
    "Bank of China",
    "Mitsubishi UFJ Financial Group",
    "Japan Post Bank",
    "State Bank of India",
    "HDFC Bank",
    "ICICI Bank",
    "China Merchants Bank",
  ];

  const educationLevels = ["High School", "Bachelor's", "Master's", "PhD"];
  const users: User[] = [];

  // Helper function to generate random integer
  const getRandomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // Helper function to generate random string
  const getRandomString = (length: number) =>
    Math.random()
      .toString(36)
      .substring(2, 2 + length);

  for (let i = 1; i <= count; i++) {
    const business = companies[Math.floor(Math.random() * companies.length)];
    const firstname = names[Math.floor(Math.random() * names.length)];
    const lastname = names[Math.floor(Math.random() * names.length)];
    const guarantor = names[Math.floor(Math.random() * names.length)];
    const gender = genders[getRandomInt(0, genders.length - 1)].toLowerCase();
    const luckNumber = getRandomInt(1, 200);

    users.push({
      id: getRandomString(11),
      name: `${firstname} ${lastname}`.toLowerCase(),
      organisation: business.toLowerCase(),
      username: `${firstname}${luckNumber}`.toLowerCase(),
      image: `https://randomuser.me/api/portraits/${gender === "male" ? "men" : "women"}/${getRandomInt(1, 99)}.jpg`,
      tier: tiers[getRandomInt(0, tiers.length - 1)].toLowerCase(),
      mobile: `+234${getRandomInt(1000000000, 9999999999)}`,
      email:
        `${firstname}${luckNumber}@${business.replace(" ", "").toLowerCase()}.com`.toLowerCase(),
      date:
        new Date(
          2020,
          Math.floor(Math.random() * 12),
          Math.floor(Math.random() * 28),
        ).toDateString() + " 10:00 AM",
      status: statuses[Math.floor(Math.random() * statuses.length)],
      bvn: getRandomInt(10000000000, 99999999999),
      gender: gender,
      marital:
        maritalStatuses[
          getRandomInt(0, maritalStatuses.length - 1)
        ].toLowerCase(),
      children: getRandomInt(0, 5),
      residence: `Residence ${getRandomInt(1, 100)}`.toLowerCase(),
      education:
        educationLevels[
          getRandomInt(0, educationLevels.length - 1)
        ].toLowerCase(),
      bank: banks[getRandomInt(0, banks.length - 1)].toLowerCase(),
      minIncome: getRandomInt(10000, 50000),
      maxIncome: getRandomInt(50001, 100000),
      balance: getRandomInt(1000, 50000),
      repayment: getRandomInt(500, 10000),
      twitter: `@${firstname}${getRandomString(8)}`.toLowerCase(),
      facebook: `${firstname}${getRandomString(8)}`.toLowerCase(),
      instagram: `${firstname}${getRandomString(8)}`.toLowerCase(),
      guarantor: [
        {
          name: `${guarantor}`.toLowerCase(),
          mobile: `+234${getRandomInt(1000000000, 9999999999)}`,
          email: `${guarantor}${getRandomString(5)}@example.com`,
          relationship: ["Friend", "Relative", "Colleague"][
            getRandomInt(0, 2)
          ].toLowerCase(),
        },
      ],
    });
  }

  return users;
}

//  Create the Object JSON
function generateJSON(data: Array<User>) {
  const jsonContent = JSON.stringify(data);

  fs.writeFile("src/utils/users.json", jsonContent, "utf8", (err: any) => {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("JSON file has been saved.");
  });
}

//  Generate 500 mock users - See [src\utils\users.json]
const output = generateUsers(500, names, companies);
generateJSON(output);

// [Dump]
//   const randomData = {
//     name: getRandomString(10),
//     organisation: business,
//     username: `${person}${i}`,
//     image: `https://randomuser.me/api/portraits/${getRandomInt(1, 99)}.jpg`,
//     tier: tiers[getRandomInt(0, tiers.length - 1)],
//     mobile: `+234${getRandomInt(1000000000, 9999999999)}`,
//     email: `user${i}@${business.replace(" ", "").toLowerCase()}.com`,
//     date:
//       new Date(
//         2020,
//         Math.floor(Math.random() * 12),
//         Math.floor(Math.random() * 28),
//       ).toDateString() + " 10:00 AM",
//     status: statuses[Math.floor(Math.random() * statuses.length)],
//     bvn: getRandomInt(10000000000, 99999999999),
//     gender: genders[getRandomInt(0, genders.length - 1)],
//     marital: maritalStatuses[getRandomInt(0, maritalStatuses.length - 1)],
//     children: getRandomInt(0, 5),
//     residence: `Residence ${getRandomInt(1, 100)}`,
//     education: educationLevels[getRandomInt(0, educationLevels.length - 1)],
//     bank: banks[getRandomInt(0, banks.length - 1)],
//     minIncome: getRandomInt(10000, 50000),
//     maxIncome: getRandomInt(50001, 100000),
//     balance: getRandomInt(1000, 50000),
//     repayment: getRandomInt(500, 10000),
//     twitter: `@${getRandomString(8)}`,
//     facebook: `${getRandomString(8)}`,
//     instagram: `${getRandomString(8)}`,
//     guarantor: [
//       {
//         name: getRandomString(10),
//         mobile: `+234${getRandomInt(1000000000, 9999999999)}`,
//         email: `${getRandomString(5)}@example.com`,
//         relationship: ["Friend", "Relative", "Colleague"][getRandomInt(0, 2)],
//       },
//     ],
//   };
