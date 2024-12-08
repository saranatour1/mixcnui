import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import WordRotate from "./animation/WordRotator";
import TextRotator from "./mdx/TextRotator";
import { CarouselExample } from "./extension/CarouselPreview";
import HackerButton from "./mdx/HackerButton";

function HeroSeciton() {
  return (
    <div className="px-2 sm:px-0 py-20 mx-auto text-center flex flex-col items-center z-50 overflow-y-hidden ">
      <Link
        href={"https://github.com/taqui-786/mixui"}
        className="w-fit border rounded-full text-sm mb-5 px-2 py-1 font-semibold animate-pulse border-black"
      >
        ⭐ | Star it on Github &rarr;
      </Link>
      <h1 className="text-3xl font-bold tracking-tight text-card-foreground sm:text-5xl">
        Install components in seconds with <br/ > `npx mixui add 
        <span className="text-primary ml-2 inline-flex  flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden">
          <WordRotate
            className=" text-3xl sm:text-5xl  font-bold text-primary block sm:min-w-56 text-start  "
            words={[
              "<name>`",
              "hackerbutton`",
              "textrotator`",
              "carousel`",
              "form`",
            ]}
          />
        </span>
      </h1>
      <p className="mt-6 text-xs sm:text-base max-w-prose text-gray-700 dark:text-white">
        20+ free and open-source animated components built with React,
        Typescript, Tailwind CSS, and Framer Motion.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Link href="/components" className={buttonVariants()}>
          Browse Component&#39;s
        </Link>
        <Link href="/docs" className={buttonVariants({ variant: "ghost" })}>
          Documentation&rarr;
        </Link>
      </div>

      <div className="not-prose flex-row gap-2 mx-auto flex w-full max-w-[16rem] mt-10 items-center justify-between">
        <button data-state="closed">
          <svg
            role="img"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="size-8"
            fill="currentColor"
          >
            <title>React</title>
            <path d="m16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854 2.854-1.281 2.854-2.854-1.281-2.854-2.854-2.854zm-7.99 8.526-.63-.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l.63-.156.177.625c.474 1.635 1.083 3.229 1.818 4.771l.135.281-.135.286c-.734 1.536-1.344 3.13-1.818 4.771zm-.921-9.74c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c.438-1.391.964-2.745 1.578-4.063-.615-1.318-1.141-2.672-1.578-4.063zm16.901 9.74-.177-.625c-.474-1.635-1.083-3.229-1.818-4.766l-.135-.286.135-.286c.734-1.536 1.344-3.13 1.818-4.771l.177-.62.63.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zm-.657-5.677c.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-.438 1.385-.964 2.745-1.578 4.063zm-16.255-4.068-.177-.625c-1.318-4.646-.917-7.979 1.099-9.141 1.979-1.141 5.151.208 8.479 3.625l.453.464-.453.464c-1.182 1.229-2.26 2.552-3.229 3.958l-.182.255-.313.026c-1.703.135-3.391.406-5.047.813zm2.531-8.838c-.359 0-.677.073-.943.229-1.323.766-1.557 3.422-.646 7.005 1.422-.318 2.859-.542 4.313-.672.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zm12.787 27.145c-.005 0-.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-.453-.464.453-.464c1.182-1.229 2.26-2.552 3.229-3.958l.177-.255.313-.031c1.703-.13 3.391-.401 5.052-.813l.63-.156.177.625c1.318 4.646.917 7.974-1.099 9.135-.49.281-1.042.422-1.604.411zm-5.464-4.505c2.078 2.026 4.047 3.172 5.458 3.172h.005c.354 0 .672-.078.938-.229 1.323-.766 1.563-3.422.646-7.005-1.422.318-2.865.542-4.313.667-.833 1.193-1.75 2.323-2.734 3.396zm7.99-13.802-.63-.161c-1.661-.406-3.349-.677-5.052-.813l-.313-.026-.177-.255c-.969-1.406-2.047-2.729-3.229-3.958l-.453-.464.453-.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zm-5.255-2.276c1.521.141 2.969.365 4.313.672.917-3.583.677-6.24-.646-7.005-1.318-.76-3.797.406-6.401 2.943.984 1.073 1.896 2.203 2.734 3.391zm-10.058 20.583c-.563.01-1.12-.13-1.609-.411-2.016-1.161-2.417-4.49-1.099-9.135l.177-.625.63.156c1.542.391 3.24.661 5.047.813l.313.031.177.255c.969 1.406 2.047 2.729 3.229 3.958l.453.464-.453.464c-2.526 2.604-4.969 4.031-6.865 4.031zm-1.588-8.567c-.917 3.583-.677 6.24.646 7.005 1.318.75 3.792-.406 6.401-2.943-.984-1.073-1.901-2.203-2.734-3.396-1.453-.125-2.891-.349-4.313-.667zm7.979.838c-1.099 0-2.224-.047-3.354-.141l-.313-.026-.182-.26c-.635-.917-1.24-1.859-1.797-2.828-.563-.969-1.078-1.958-1.557-2.969l-.135-.286.135-.286c.479-1.01.995-2 1.557-2.969.552-.953 1.156-1.906 1.797-2.828l.182-.26.313-.026c2.234-.188 4.479-.188 6.708 0l.313.026.182.26c1.276 1.833 2.401 3.776 3.354 5.797l.135.286-.135.286c-.953 2.021-2.073 3.964-3.354 5.797l-.182.26-.313.026c-1.125.094-2.255.141-3.354.141zm-2.927-1.448c1.969.151 3.885.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-.844-1.76-1.823-3.453-2.932-5.063-1.948-.151-3.906-.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063.849 1.76 1.828 3.453 2.932 5.063z"></path>
          </svg>
        </button>
        <button data-state="closed">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="size-8"
            fill="currentColor"
          >
            <path d="m0 16v16h32v-32h-32zm25.786-1.276c.813.203 1.432.568 2.005 1.156.292.312.729.885.766 1.026.01.042-1.38.974-2.224 1.495-.031.021-.156-.109-.292-.313-.411-.599-.844-.859-1.505-.906-.969-.063-1.594.443-1.589 1.292-.005.208.042.417.135.599.214.443.615.708 1.854 1.245 2.292.984 3.271 1.635 3.88 2.557.682 1.031.833 2.677.375 3.906-.51 1.328-1.771 2.234-3.542 2.531-.547.099-1.849.083-2.438-.026-1.286-.229-2.505-.865-3.255-1.698-.297-.323-.87-1.172-.833-1.229.016-.021.146-.104.292-.188s.682-.396 1.188-.688l.922-.536.193.286c.271.411.859.974 1.214 1.161 1.021.542 2.422.464 3.115-.156.281-.234.438-.594.417-.958 0-.37-.047-.536-.24-.813-.25-.354-.755-.656-2.198-1.281-1.651-.714-2.365-1.151-3.01-1.854-.406-.464-.708-1.01-.88-1.599-.12-.453-.151-1.589-.057-2.042.339-1.599 1.547-2.708 3.281-3.036.563-.109 1.875-.068 2.427.068zm-7.51 1.339.01 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-.714.016-1.307.036-1.323.016-.021 2.547-.031 5.62-.026l5.594.016z"></path>
          </svg>
        </button>
        <button data-state="closed">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="size-8"
            fill="currentColor"
          >
            <title>Tailwind CSS</title>
            <path d="m12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576z"></path>
          </svg>
        </button>
        <button data-state="closed">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="size-8"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <title>Framer Motion</title>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
            <path d="M20 12l-8 8l-4 -4"></path>
          </svg>
        </button>
      </div>
      <div className="mt-10 mx-auto">
        <h2 className="mb-2 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">Component Demos</h2>
        <h3 className="mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80">Here are some of the components that you can use to build your landing pages.</h3>

        <div className="mx-auto w-full flex flex-col max-w-screen-xl">
        <div className="flex w-full justify-center flex-wrap overflow-x-hidden gap-5">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className=" h-56 w-[500px] flex justify-center items-center bg-gray-50">
            <HackerButton label="Download Resume" />
          </div>
          
        </div>
      
        
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className=" h-64 w-[500px] flex justify-center items-center bg-gray-50">
            <CarouselExample />
          </div>
          
      </div>
      <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className=" h-56 w-[500px] flex justify-center items-center bg-gray-50">
            <TextRotator />
          </div>
      </div>
    
      </div>          
        </div>
      </div>
    </div>
  );
}

export default HeroSeciton;
