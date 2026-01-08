import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiNextra,
  SiMongodb,
  SiFirebase,
  SiExpress,
} from "react-icons/si";

import { BsFiletypePdf } from "react-icons/bs";

export const projects = [
  {
    id: 1,
    title: "Gadget Hunter",
    image:
      "https://res.cloudinary.com/dudvlnxio/image/upload/v1764484475/gadget-hunter_j9kprs.png",
    short_desc:
      "An advanced e-commerce platform for gadgets built with Next.js and TypeScript, supporting secure payments and modern animations.",
    description:
      "Gadget Hunter is a full-featured e-commerce web application for buying and selling gadgets like mobiles, laptops, and accessories. It is built with Next.js and TypeScript, using Framer Motion for smooth animations and SSLCommerz for secure payment handling. The system includes user authentication, product management, and PDF invoice generation for orders. The UI is clean, responsive, and user-friendly with Tailwind CSS.",
    features: [
      "Dynamic product listing and detailed view",
      "Next Auth integration for secure login/signup",
      "SSLCommerz payment gateway for smooth transactions",
      "PDF invoice generation using PDF.js",
      "Framer Motion animations for better UX",
    ],
    live: "https://gadget-hunter-pranoy.vercel.app/",
    github: "https://github.com/impranoybiswas/Gadget_Hunter",
    stack: [
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "text-black",
        bg: "bg-gray-100",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        name: "Framer Motion",
        icon: <SiFramer />,
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        name: "Next Auth",
        icon: <SiNextra />,
        color: "text-green-600",
        bg: "bg-green-50",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "text-green-700",
        bg: "bg-green-100",
      },
      {
        name: "PDF.js",
        icon: <BsFiletypePdf />,
        color: "text-red-600",
        bg: "bg-red-50",
      },
    ],
  },
  {
    id: 2,
    title: "Ticket Hub (Team Project)",
    image:
      "https://res.cloudinary.com/dudvlnxio/image/upload/v1764484707/ticket-hub_otqjnu.png",
    short_desc:
      "A role-based event ticket booking system built with Next.js and MongoDB, featuring real-time seat booking and secure payments.",
    description:
      "Ticket Hub is a full-stack event ticket booking platform built using Next.js, TypeScript, and MongoDB. It offers role-based dashboards for Admins, Organizers, and Users to manage events, bookings, and transactions efficiently. Framer Motion enhances UI transitions, while SSLCommerz ensures secure payment processing. Users can generate digital tickets in PDF format and authenticate via Next Auth. The system provides real-time seat management and event analytics for organizers.",
    features: [
      "Role-based dashboards for Admin, Organizer, and User",
      "Real-time seat booking and event management",
      "Secure payments via SSLCommerz gateway",
      "PDF e-ticket generation with custom design",
      "Smooth animations and transitions using Framer Motion",
    ],
    live: "https://ticket-hub-online-ticket-booking-sy.vercel.app/",
    github: "https://github.com/anik804/TicketHub-Online-Ticket-Booking-System",
    stack: [
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "text-black",
        bg: "bg-gray-100",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        name: "Framer Motion",
        icon: <SiFramer />,
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        name: "Next Auth",
        icon: <SiNextra />,
        color: "text-green-600",
        bg: "bg-green-50",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "text-green-700",
        bg: "bg-green-100",
      },
      {
        name: "PDF.js",
        icon: <BsFiletypePdf />,
        color: "text-red-600",
        bg: "bg-red-50",
      },
    ],
  },
  {
    id: 3,
    title: "Tower Edge",
    image:
      "https://res.cloudinary.com/dudvlnxio/image/upload/v1753454186/tower-edge_cynmxr.png",
    short_desc:
      "A modern building management platform offering digital solutions for apartment management, communication, and rent payment.",
    description:
      "Tower Edge is a full-stack apartment management system designed to simplify the digital management of building operations. It provides role-based dashboards for admins, members, and general users. Residents can handle rent payments, announcements, and maintenance requests efficiently. Built using React, Tailwind, and Firebase, the system ensures real-time updates, secure interactions, and seamless communication between admins and tenants.",
    features: [
      "Role-based dashboards for admins, members, and users",
      "Apartment and resident management",
      "Online rent payments and digital receipts",
      "Announcements and notifications for members",
      "User-friendly and responsive design",
    ],
    live: "https://tower-edge-pranoy.netlify.app/",
    github: "https://github.com/impranoybiswas/PH_A12_Tower_Edge",
    stack: [
      {
        name: "React",
        icon: <SiReact />,
        color: "text-sky-500",
        bg: "bg-sky-50",
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss />,
        color: "text-sky-600",
        bg: "bg-sky-100",
      },
      {
        name: "DaisyUI",
        icon: <SiTailwindcss />,
        color: "text-amber-600",
        bg: "bg-amber-50",
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
        color: "text-yellow-600",
        bg: "bg-yellow-50",
      },
    ],
  },
  {
    id: 4,
    title: "Share Bite",
    image:
      "https://res.cloudinary.com/dudvlnxio/image/upload/v1753454185/share-bite_xx2bdd.png",
    short_desc:
      "A community-based food sharing app that connects donors and receivers to reduce food waste sustainably and communicate securely.",
    description:
      "Share Bite is a community-driven platform that connects food donors and receivers to minimize food waste. Users can share surplus food, browse available listings nearby, and communicate securely. The platform promotes sustainability and social responsibility through real-time updates and a location-based sharing system. Built with React, Tailwind CSS, and Firebase for secure user authentication and data storage.",
    features: [
      "Real-time food listing and updates",
      "Location-based food sharing",
      "User authentication with Firebase",
      "Responsive design for all devices",
      "Secure donor-receiver communication",
    ],
    live: "https://share-bite-pranoy.netlify.app/",
    github: "https://github.com/impranoybiswas/PH_A11_Share_Bite",
    stack: [
      {
        name: "React",
        icon: <SiReact />,
        color: "text-sky-500",
        bg: "bg-sky-50",
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss />,
        color: "text-sky-600",
        bg: "bg-sky-100",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "text-green-600",
        bg: "bg-green-50",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        color: "text-gray-700",
        bg: "bg-gray-100",
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
        color: "text-yellow-600",
        bg: "bg-yellow-50",
      },
    ],
  },
];
