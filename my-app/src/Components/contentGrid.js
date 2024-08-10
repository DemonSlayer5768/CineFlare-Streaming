import React from "react";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7fgXLnAx3P7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function ContentGrid() {
  return (
    <section className="grid grid-cols-1 gap-6 px-4 py-8 md:grid-cols-2 lg:grid-cols-3 md:px-6 lg:py-12">
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img
          src="../imgs_Carousel/naruto.jpg"
          alt="Product Image"
          width={600}
          height={400}
          className="h-60 w-full object-cover transition-all group-hover:scale-105"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div className="bg-background p-4">
          <h3 className="text-lg font-semibold text-foreground">
            Stylish Sunglasses
          </h3>
          <p className="text-sm text-muted-foreground">
            Protect your eyes in style.
          </p>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img
          src="../imgs_Carousel/Baki.jpg"
          alt="Product Image"
          width={600}
          height={400}
          className="h-60 w-full object-cover transition-all group-hover:scale-105"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div className="bg-background p-4">
          <h3 className="text-lg font-semibold text-foreground">
            Leather Backpack
          </h3>
          <p className="text-sm text-muted-foreground">Durable and stylish.</p>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img
          src="../imgs_Carousel/dragonBallS.jpg"
          alt="Product Image"
          width={600}
          height={400}
          className="h-60 w-full object-cover transition-all group-hover:scale-105"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div className="bg-background p-4">
          <h3 className="text-lg font-semibold text-foreground">
            Wireless Headphones
          </h3>
          <p className="text-sm text-muted-foreground">
            Immersive audio experience.
          </p>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Product Image"
          width={600}
          height={400}
          className="h-60 w-full object-cover transition-all group-hover:scale-105"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div className="bg-background p-4">
          <h3 className="text-lg font-semibold text-foreground">
            Fitness Tracker
          </h3>
          <p className="text-sm text-muted-foreground">
            Monitor your health and fitness.
          </p>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Product Image"
          width={600}
          height={400}
          className="h-60 w-full object-cover transition-all group-hover:scale-105"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div className="bg-background p-4">
          <h3 className="text-lg font-semibold text-foreground">
            Smart Home Hub
          </h3>
          <p className="text-sm text-muted-foreground">
            Control your home with ease.
          </p>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Product Image"
          width={600}
          height={400}
          className="h-60 w-full object-cover transition-all group-hover:scale-105"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div className="bg-background p-4">
          <h3 className="text-lg font-semibold text-foreground">
            Outdoor Camping Gear
          </h3>
          <p className="text-sm text-muted-foreground">Adventure awaits.</p>
        </div>
      </div>
    </section>
  );
}
