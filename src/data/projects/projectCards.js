import eviraPreview from '../../assets/images/evira-preview.jpg'
import applePreview from '../../assets/images/apple-home.png'
import sonicboxPreview from '../../assets/images/sonicbox-preview.png'

import HTML from '../../assets/pngs/html-icon.png'
import CSS from '../../assets/pngs/css-icon.png'
import JavaScript from '../../assets/pngs/javascript-programming-language-icon.png'
import Tailwind from '../../assets/pngs/tailwind-css-icon.png'
import TypeScript from '../../assets/pngs/typescript-programming-language-icon.png'
import NodeJS from '../../assets/pngs/node-js-icon.png'
import ExpressJS from '../../assets/pngs/express-js-icon.png'
import RESTAPI from '../../assets/pngs/web-api-icon.png'
import GraphQL from '../../assets/pngs/graphql-icon.png'
import MongoDB from '../../assets/pngs/mongodb-icon.png'
import Git from '../../assets/pngs/git-icon.png'
import GitHub from '../../assets/pngs/github-icon.png'
import Postman from '../../assets/pngs/postman-icon.png'

export const projectCards = [
  {
    id: 1,
    path: '/projects/evira',
    title: 'Evira',
    titleDescription: 'E-commerce App Backend',
    image: eviraPreview,
    extraClasses: 'justify-self-start',
    projectURL: 'https://evira.onrender.com/api/docs',
    githubURL: 'https://github.com/Sanket4450/Evira',
    descriptionPoints: [
      {
        id: 1,
        title: 'Extensive API Coverage',
        description:
          'With a total of 77 APIs, it provides comprehensive functionality allows for seamless interaction between different components of the application, ensuring efficient management of data.',
      },
      {
        id: 2,
        title: 'Robust Admin Functionality',
        description:
          'Admin APIs empower administrators to efficiently manage the backend of the e-commerce platform. These APIs enable tasks such as product management, order processing and user management.',
      },
      {
        id: 3,
        title: 'Secure Authentication Mechanism',
        description:
          'Implemented token-based authentication enhances the security of the backend APIs. This approach helps prevent unauthorized access to sensitive data and resources,',
      },
      {
        id: 4,
        title: 'Email Service',
        description:
          'Integrated an email service enables the application to communicate effectively with users, providing essential notifications, updates, and promotional messages.',
      },
    ],
    technologies: [
      { id: 1, logo: JavaScript },
      { id: 2, logo: NodeJS },
      { id: 3, logo: ExpressJS },
      { id: 4, logo: MongoDB },
      { id: 5, logo: RESTAPI },
      { id: 6, logo: Git },
      { id: 7, logo: GitHub },
      { id: 8, logo: Postman },
    ],
  },
  {
    id: 2,
    path: '/projects/apple',
    title: 'Apple',
    titleDescription: 'MacBook Air Page',
    image: applePreview,
    extraClasses: 'justify-self-end',
    descriptionPoints: [
      {
        id: 1,
        title: 'Tailwind CSS Integration',
        description:
          'The project ensures the power of Tailwind CSS, a utility-first CSS framework, to streamline development and ensure consistency in styling.',
      },
      {
        id: 2,
        title: 'Tailwind CSS Integration',
        description:
          "The official MacBook Air page adapts seamlessly to various screen sizes and resolutions through Tailwind CSS's responsive design utilities, the layout gracefully adjusts to accommodate desktops, laptops, tablets, and mobile devices.",
      },
      {
        id: 3,
        title: 'Enhanced User Interaction',
        description:
          'The project prioritizes smooth interaction to enhance user engagement and satisfaction by ensuring hover effects to intuitive navigation gestures',
      },
    ],
    technologies: [
      { id: 1, logo: HTML },
      { id: 2, logo: CSS },
      { id: 3, logo: Tailwind },
      { id: 4, logo: JavaScript },
      { id: 5, logo: Git },
      { id: 6, logo: GitHub },
    ],
  },
  {
    id: 3,
    path: '/projects/sonic-box',
    title: 'SonicBox',
    titleDescription: 'Music streaming App Backend',
    image: sonicboxPreview,
    extraClasses: 'justify-self-start',
    descriptionPoints: [
      {
        id: 1,
        title: 'GraphQL Backend Implementation',
        description:
          'SonicBox boasts a sophisticated backend architecture developed using GraphQL that allows for efficient data retrieval and manipulation, enabling clients to request precisely the data they need,',
      },
      {
        id: 2,
        title: 'TypeScript for Strong Typing',
        description:
          "TypeScript serves as the primary programming language for SonicBox's backend development, offering strong typing to improve code quality and developer productivity by enforcing strict type checking at compile-time",
      },
      {
        id: 3,
        title: 'Secure Token-Based Authentication',
        description:
          'SonicBox implements token-based authentication to ensure secure access control. By generating and validating tokens, SonicBox verifies the identity of users and grants them access to protected resources and functionalities.',
      },
    ],
    technologies: [
      { id: 1, logo: TypeScript },
      { id: 2, logo: NodeJS },
      { id: 3, logo: ExpressJS },
      { id: 4, logo: MongoDB },
      { id: 5, logo: GraphQL },
      { id: 6, logo: Git },
      { id: 7, logo: GitHub },
      { id: 8, logo: Postman },
    ],
  },
]
