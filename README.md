This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Description

A modern application built with Next.js, featuring dynamic user interactions and seamless deployment on Vercel.

## Technologies Used 

- Next.js
- TailwindCss
- Json-server
- Vercel (for deployment)

## Project Structure

```bash
next-task/
├── components/
│   ├── Loading.js
│   ├── SearchForm.js
│   ├── SearchStatus.js
│   └── UserList.js
├── lib/
│   └── users.js
├── public/
├── src/
│   └── app/
│       ├── api/
│       │   └── users/
│       │       ├── [id]/
│       │       │   └── route.js
│       │       └── route.js
│       ├── details/
│       │   └── [id]/
│       │       ├── error.js
│       │       └── page.js
│       ├── globals.css
│       ├── layout.js
│       ├── not-found.js
│       └── page.js
├── error.js
├── dummy.json
├── jsconfig.json
└── next.config.mjs
```


## Getting Started

Prerequisites
- Node.js v14 or higher
- npm or yarn

## Installation

1- Clone the repository:
```bash
git clone https://github.com/mohamadlaqees/next-task.git
cd next-task
```

2- Install dependencies:
```bash
npm install
# or
yarn install
```

3- Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 in your browser to see the application.


## Deploy on Vercel

vercel live link : https://next-task-orcin.vercel.app/


## Live Demo 

live demo link : https://drive.google.com/file/d/1y5oDLWe6uggHpMtHHAO-6sAI-7X6oWye/view?usp=drive_link
