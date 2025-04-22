import { ServicesData } from "./types";

export const getServicesData = (): Promise<ServicesData> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        title: "WHY CHOOSSE US",
        subtitle: "We Are Different From Others",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        expertImage: {
          src: "/image.png",
          alt: "Expert consultant with phone",
        },
        features: [
          {
            id: 1,
            title: "Industry Experts",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            color: "bg-rose-700",
          },
          {
            id: 2,
            title: "Dedicated Team",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
            color: "bg-gray-100",
          },
          {
            id: 3,
            title: "Outcome Focused",
            description: "Sed ut perspiciatis unde omnis iste natus error sit.",
            color: "bg-gray-100",
          },
          {
            id: 4,
            title: "High Quality Service",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
            color: "bg-gray-100",
          },
          {
            id: 5,
            title: "Cyber Security Expert",
            description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
            color: "bg-gray-100",
          },
        ],
      });
    }, 1000);
  });
};
