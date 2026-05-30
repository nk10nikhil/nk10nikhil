import { cn } from "../../lib/utils";
import { Marquee } from "./Marquee";

const reviews = [
  {
    name: "Rahul",
    username: "@rahul",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/rahul",
  },
  {
    name: "Ananya",
    username: "@ananya",
    body: "This is a game-changer. It has completely transformed the way I work.",
    img: "https://avatar.vercel.sh/ananya",
  },
  {
    name: "Vikram",
    username: "@vikram",
    body: "The performance is incredible. It's so fast and responsive.",
    img: "https://avatar.vercel.sh/vikram",
  },
  {
    name: "Sanya",
    username: "@sanya",
    body: "The design is sleek and modern. I love the attention to detail.",
    img: "https://avatar.vercel.sh/sanya",
  },
  {
    name: "Arjun",
    username: "@arjun",
    body: "The support team is fantastic. They helped me with all my questions.",
    img: "https://avatar.vercel.sh/arjun",
  },
  {
    name: "Priya",
    username: "@priya",
    body: "I can't imagine going back to how I worked before. This is a must-have.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Karan",
    username: "@karan",
    body: "The features are incredibly useful. It has made my workflow so much smoother.",
    img: "https://avatar.vercel.sh/karan",
  },
  {
    name : "Anupriya",
    username: "@anupriya",
    body: "The user experience is fantastic. It's so intuitive and easy to use.",
    img: "https://avatar.vercel.sh/anupriya",
  },
  {
    name: "Satyam",
    username: "@satyam",
    body: "The integration with other tools is seamless. It has made my life so much easier.",
    img: "https://avatar.vercel.sh/satyam",
  },
  {
    name: "Akshay",
    username: "@akshay",
    body: "The customization options are great. I can tailor it to my specific needs.",
    img: "https://avatar.vercel.sh/akshay",
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
