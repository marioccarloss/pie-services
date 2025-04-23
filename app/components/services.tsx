"use client";

import { Typography } from "@/components/ui";
import Icon from "@/components/ui/icon";
import { getServicesData, type Feature, type StrapiResponse } from "@/lib/services-api";
import Image from "next/image";
import { use, useState } from "react";

const servicesDataPromise = getServicesData();

const Services = () => {
  const {
    data: { title, subtitle, description, expertImage, feature },
  } = use(servicesDataPromise) as StrapiResponse;

  const [activeFeature, setActiveFeature] = useState<number>(feature[0].id);

  const handleFeatureSelect = (id: number) => {
    setActiveFeature(activeFeature === id ? feature[0].id : id);
  };

  const selectedFeature = feature.find((feature: Feature) => feature.id === activeFeature);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <Typography
          mode="title"
          size="small"
          align="center"
          className="tracking-wider mb-4 !font-normal"
        >
          {title}
        </Typography>
        <Typography mode="subtitle" size="extra-large" align="center" className="!font-bold mb-6">
          {subtitle}
        </Typography>
        <Typography
          mode="body"
          size="small"
          align="center"
          className="max-w-2xl mx-auto !text-gray-600"
        >
          {description[0].children[0].text}
        </Typography>
      </div>

      <div className="w-full max-w-[990px] flex flex-col md:flex-row justify-between items-center mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center mb-8 md:mb-auto">
          <div id="text-circle" className="relative w-80 h-80">
            <div className="absolute inset-0 bg-secondary rounded-full flex items-center justify-center p-8">
              <div className="text-white">
                <Typography mode="subtitle" size="large" className="mb-4 leading-none">
                  {selectedFeature?.title}
                </Typography>
                <Typography mode="body" size="small">
                  {selectedFeature?.description}
                </Typography>
              </div>
            </div>
          </div>

          <div
            id="image-circle"
            className="relative -mt-10 md:ml-auto lg:-ml-20 lg:mt-0 -z-10 w-80 h-80"
          >
            <div className="absolute inset-0 bg-gray-100 rounded-full overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${expertImage[0].url}`}
                alt="Expert"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Lista de características */}
        <div className="space-y-4">
          {feature.map(({ id, title }: Feature) => (
            <div
              key={id}
              onClick={() => handleFeatureSelect(id)}
              className={`${
                activeFeature === id ? "bg-primary text-white" : "bg-gray-100 text-gray-700"
              } rounded-full md:rounded-r-none py-3 pl-5 pr-8 flex items-center justify-between gap-8 transition-all cursor-pointer`}
            >
              <Icon icon="arrowLeft" size="w-3 h-3" />
              <Typography mode="caption" size="small" className="leading-none !font-medium">
                {title}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
