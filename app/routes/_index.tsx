import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { Command } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { ThemeToggle } from "./resources.theme-toggle";
import { Hero3DCard } from "~/components/hero-3d-card";
import { Card2 } from "~/components/card2";
import { SparklesCore } from "~/components/ui/sparkles";
import { TextGenerateEffect } from "~/components/ui/text-generate-effect";
import { LampDemo } from "~/components/ui/lamp";
import { CardStack } from "~/components/ui/card-stack"; 

import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "~/components/ui/text-reveal-card";
import { AnimatedTooltipPreview } from "~/components/animated-preview";
import { HeroParallax } from "~/components/ui/hero-parallax";  // Corrected import path
import { AnimatedPinDemo } from "~/components/animated-3d-pin";


const stackCards = [
  {
    id: 1,

    content: (
<div>
  <h3 className="text-lg font-bold pb-8">Sup! Dawg👋</h3>

  <ul className="list-disc list-inside text-left">

    <li>See for yourself Dev is a chad</li>
    <li>The Art is sick and memeable af</li>
    <li>Dexscreener, Coingecko requested</li>
    <li>Active Tweets and Spaces</li>
    <li>Foot is Pink🤯🩷</li>
  </ul>
</div>

    )
  }
];
// Sample product data for HeroParallax
const sampleProducts = [
  { title: "", link: "/product-1", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F47023%252F191afa685ce691d7ea979357b3fb686fc7bcb82f7de1bfa5caab71fce4389bad.gif?ixlib=js-3.8.0&width=550&height=550&format=avif&fit=crop&quality=75&video=false&name=ImageMedium&auto=format%2Ccompress&s=fb75764eaae10147e9373d2f903c162f" },
  { title: "", link: "/product-2", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xcf4825be60c739c63788d9563d70658519a938e7%252F2%252Fbo2de?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=e80afe72972fd6eab8c0a9deaf41064d" },
  { title: "", link: "/product-3", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F41987%252F7awjc?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=0381ef42c26d5327e553bcdcc8b5ae48" },
  { title: "", link: "/product-4", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F35873%252Fd17504c0-d878-43b8-ab1b-9191080115f6%252Furi%252Fimage-2023-08-28-21-58-y55jr?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=3a80f6508a47bfa20f08cc27580df703" },
  { title: "", link: "/product-5", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F35087%252F358e9c13-a5e7-4d55-bf7e-533c745c456a%252Furi%252Fimage-2023-08-28-22-49-s5ucqh?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=b5f124e30b2390a979cc973876ed33d0" },
  { title: "", link: "/product-6", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F33507%252F78379fdc-eca7-4d40-b185-0dcde63ace7d%252Furi%252Fimage-2023-08-28-22-09-8s82f?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=b0bbcf0363cb6fc08d4543375e1291ae" },
  { title: "", link: "/product-7", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F42778%252F9he3k?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=30bb92f09a9288125effe645bbef80da" },
  { title: "", link: "/product-8", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F18987%252Fdf39229b-86f0-4198-b106-eea428eff17e%252Furi%252Fimage-2023-08-28-22-07-4nfe2j?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=0b5680be52853a7ae5fe7fc86cbe4472" },
  { title: "", link: "/product-9", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F24793%252Ff4c71161-1a84-4776-95c8-79f9163d5e96%252Furi%252Fimage-2023-08-28-22-08-r2n8ng?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=5e3c9efba7cbaebae29b161600d59220" },
  { title: "", link: "/product-10", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F14127%252Fe1018716-5516-4def-8814-3440718e09b5%252Furi%252Fimage-2023-08-28-22-07-n92r1?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=5389d81f9f54f848dedd122369d40a93" },
  { title: "", link: "/product-11", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F12698%252Fe7c6c1be-b6f8-435a-ab7f-305272467d54%252Furi%252Fimage-2023-08-10-22-17-fujy5?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=21ce57028fec74215b94c4e47c79f780" },
  { title: "", link: "/product-12", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F11287%252Flvw9q?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=9c4cef2d8a5c729c273cec3f5f741308" },
  { title: "", link: "/product-13", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F9965%252Fh03li?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=995a4e9d30385fb5019ad1600c336a3b" },
  { title: "", link: "/product-14", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F26736%252F761a1e7e-79a3-4002-a277-40aebc9b88e7%252Furi%252Fimage-2023-08-28-22-08-mgb0z?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=aedcd45ec1991ed0328a32ca10cf859d" },
  { title: "", link: "/product-15", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F26736%252F761a1e7e-79a3-4002-a277-40aebc9b88e7%252Furi%252Fimage-2023-08-28-22-08-mgb0z?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=aedcd45ec1991ed0328a32ca10cf859d" },
];

export default function Index() {
  return (
    <section className="w-full min-h-screen flex flex-col">
<nav className="flex items-center justify-between p-4 w-full">
  <Link to="/" className="flex items-center space-x-2">
    <img src="https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F42778%252F9he3k?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=30bb92f09a9288125effe645bbef80da" alt="Logo" className="h-20 w-20 mr-2"/> {/* Logo Image */}
    <h1 className="text-3xl md:text-4xl font-bold tracking-tighter font-extrabold bg-gradient-to-r from-orange-300 via-orange-100 to-orange-50 text-transparent bg-clip-text bg-300% animate-gradient">$Psyopss</h1>
  </Link>
  <ThemeToggle />
</nav>








{/* <div className="flex-1 min-w-0">
    <CardStack
      items={stackCards}
      offset={30}
      scaleFactor={0.95}
    />
  </div>

  <div className="flex items-center justify-center space-x-4"> 
  <div className="flex items-center justify-center  w-full">
    <TextRevealCard
      text="Hover to reveal"
      revealText="Radium is coming!"
      className="cursor-pointer md:w-full"
    />
  </div>
</div> */}


<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  
          <Hero3DCard />

          
  
          <SparklesCore
        className="absolute top-0 left-0 w-full h-full z-[-1]"
        particleColor="#FFC0CB"  // White particles
        particleDensity={10}     // Moderate density
        speed={3}                // Medium speed
        minSize={1}              // Minimum size of particles
        maxSize={3}              // Maximum size of particles
      />
          </div>


          <div className="flex items-center justify-center  w-full ">
        <div className="flex flex-col items-center space-y-4 text-center p-4 md:w-1/2">
        <TextGenerateEffect words={"human you have been Lied to, Influenced by them, misled by their propaganda, They control your every move, Psyopss Psyopss Psyopss Psyopss "} />
     
        </div>

          </div>

          <div className="flex items-center justify-center  w-full ">
        <div className="flex flex-col items-center space-y-4 text-center p-4 md:w-1/2">

          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            The{" "}
            <span className="font-extrabold bg-gradient-to-r from-orange-300 via-orange-200 to-orange-50 text-transparent bg-clip-text bg-300% animate-gradient">
            $Psyopss
            </span>{" "}
            Token PreSale is now live on{" "}
            <Link
              to="https://pump.fun/86UVPH8g8YX6Vm8Q6VxpMRiaBHLVBwgDTNDhpjvmCF5J"
              className="font-extrabold bg-gradient-to-r from-emerald-100 via-emerald-500 to-emerald-50 text-transparent bg-clip-text bg-300% animate-gradient hover:text-emerald-500"
            >
              Pump.fun
            </Link>
          </h1>

          

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <Card className="relative group overflow-hidden rounded-lg">

    <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-300 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        <Link to="https://twitter.com/pinkfootsol">
          Twitter/𝕏
        </Link>
        </div>
      </button>

  </Card>
  <Card className="relative group overflow-hidden rounded-lg">

    <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        <Link to="https://twitter.com/pinkfootsol">
          Pump.Fun
        </Link>
        </div>
      </button>

  </Card>
  <Card className="relative group overflow-hidden rounded-lg">

    <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-300 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        <Link to="https://twitter.com/pinkfootsol">
          Telegram Community
        </Link>
        </div>
      </button>

  </Card>
</div>



          </div>
          {/* <LampDemo />  */}
        </div>
        
<div className="flex items-center justify-between p-4 w-full">          <HeroParallax products={sampleProducts} />  {/* Full-width HeroParallax component */}</div>
    </section>
  );
}
