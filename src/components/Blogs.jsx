import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import testimonialImg1 from '../assets/testimonialImg1.png'

export default function Blogs() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      id: 1,
      category: "Design",
      title: "UX review presentations",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: blog1,
      author: {
        name: "Olivia Rhye",
        avatar: testimonialImg1,
        date: "20 Jan 2022",
      },
    },
    {
      id: 2,
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: blog2,
      author: {
        name: "Phoenix Baker",
        avatar: testimonialImg1,
        date: "19 Jan 2022",
      },
    },
    {
      id: 3,
      category: "Software Engineering",
      title: "Building your API Stack",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: blog3,
      author: {
        name: "Lana Steiner",
        avatar: testimonialImg1,
        date: "18 Jan 2022",
      },
    },
    {
      id: 4,
      category: "Software Engineering",
      title: "Building your API Stack",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: blog3,
      author: {
        name: "Lana Steiner",
        avatar: testimonialImg1,
        date: "18 Jan 2022",
      },
    },
    {
      id: 5,
      category: "Software Engineering",
      title: "Building your API Stack",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: blog3,
      author: {
        name: "Lana Steiner",
        avatar: testimonialImg1,
        date: "18 Jan 2022",
      },
    },
    {
      id: 6,
      category: "Software Engineering",
      title: "Building your API Stack",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: blog3,
      author: {
        name: "Lana Steiner",
        avatar: testimonialImg1,
        date: "18 Jan 2022",
      },
    },
    {
      id: 7,
      category: "Software Engineering",
      title: "Building your API Stack",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: blog3,
      author: {
        name: "Lana Steiner",
        avatar: testimonialImg1,
        date: "18 Jan 2022",
      },
    },
    {
      id: 8,
      category: "Software Engineering",
      title: "Building your API Stack",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: blog3,
      author: {
        name: "Lana Steiner",
        avatar: testimonialImg1,
        date: "18 Jan 2022",
      },
    },
    {
      id: 9,
      category: "Software Engineering",
      title: "Building your API Stack",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: blog3,
      author: {
        name: "Lana Steiner",
        avatar: testimonialImg1,
        date: "18 Jan 2022",
      },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 3 >= features.length ? 0 : prev + 3));
    }, 3000); 
    return () => clearInterval(interval);
  }, [features.length]);

  const displayedFeatures = features.slice(currentSlide, currentSlide + 3);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedFeatures.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm"
          >
            <div className="relative">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="p-5">
              <div className="text-blue-500 text-sm font-medium mb-2">
                {feature.category}
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <ArrowUpRight className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
              <div className="flex items-center">
                <img
                  src={feature.author.avatar}
                  alt={feature.author.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {feature.author.name}
                  </p>
                  <p className="text-xs text-gray-500">{feature.author.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          {Array(Math.ceil(features.length / 3))
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  Math.floor(currentSlide / 3) === index
                    ? "bg-blue-500"
                    : "bg-gray-300"
                }`}
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
}