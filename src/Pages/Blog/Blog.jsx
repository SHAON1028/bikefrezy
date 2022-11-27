import React from 'react';

const Blog = () => {
    return (
        <div>
             <>
       <h1 className='text-center text-4xl font-bold m-10'>Blog</h1>
             
      <section className="w-4/5 mx-auto divide-y divide-slate-200 rounded mb-32">
        <details className="group p-4" open>
          <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  shrink-0  stroke-emerald-500  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac05 desc-ac05"
            >
              <title id="title-ac05">Leading icon</title>
              <desc id="desc-ac05">Icon that describes the summary</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
              />
            </svg>
            What are the different ways to manage a state in a React application?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac06 desc-ac06"
            >
              <title id="title-ac06">Open icon</title>
              <desc id="desc-ac06">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
          There are four main types of state you need to properly manage in your React apps:

1.Local state
2.Global state
3.Server state
4.URL state
<br/>
Local (UI) state – Local state is data we manage in one or another component <br/>
Global (UI) state – Global state is data we manage across multiple components.<br/>
Server state – Data that comes from an external server that must be integrated with our UI state.<br/>
URL state – Data that exists on our URLs, including the pathname and query parameters.
          </p>
        </details>
        <details className="group p-4">
          <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  shrink-0  stroke-emerald-500  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac07 desc-ac07"
            >
              <title id="title-ac07">Leading icon</title>
              <desc id="desc-ac07">Icon that describes the summary</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
              />
            </svg>
            How does prototypical inheritance work?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac08 desc-ac08"
            >
              <title id="title-ac08">Open icon</title>
              <desc id="desc-ac08">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
          Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype
          </p>
        </details>
        <details className="group p-4">
          <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  shrink-0  stroke-emerald-500  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac09 desc-ac09"
            >
              <title id="title-ac09">Leading icon</title>
              <desc id="desc-ac09">Icon that describes the summary</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
            What is a unit test? Why should we write unit tests?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac10 desc-ac10"
            >
              <title id="title-ac10">Open icon</title>
              <desc id="desc-ac10">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
            WiThe main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
          </p>
        </details>
        <details className="group p-4">
          <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  shrink-0  stroke-emerald-500  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac11 desc-ac11"
            >
              <title id="title-ac11">Leading icon</title>
              <desc id="desc-ac11">Icon that describes the summary</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            React vs. Angular vs. Vue?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac12 desc-ac12"
            >
              <title id="title-ac12">Open icon</title>
              <desc id="desc-ac12">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
          Angular, React, and Vue are all under very active development. They regularly release new versions and maintain the existing ones. As the current level of support is high in each case, you can safely use any of these frameworks.

It’s important to note that Angular is not growing as fast as before, while Vue — even though it started more recently — seems to be growing a lot.

As previously stated, we can’t predict which frameworks will remain relevant in the long term, but each project has a great community behind it and is constantly evolving
          </p>
        </details>
      </section>
      {/*<!-- End Icon accordion --> */}
    </>
        </div>
    );
};

export default Blog;