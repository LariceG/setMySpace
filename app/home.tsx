import Image, { type StaticImageData } from "next/image";
import heroImage from "./assests/hero-section-background-img.png";
import husbandImage from "./assests/husband.png";
import wifeImage from "./assests/wife.png";
import kidsImage from "./assests/kids.png";
import cardOne from "./assests/1.png";
import cardTwo from "./assests/2.png";
import cardThree from "./assests/3.png";
import cardFour from "./assests/4.png";
import cardFive from "./assests/5.png";
import cardSix from "./assests/6.png";
import judithBlackImage from "./assests/JudithBlack.png";
import josephRodriguezImage from "./assests/JosephRodriguez.png";

type EventCard = {
  title: string;
  image: StaticImageData;
  overlay: string;
};

type ProductCard = {
  title: string;
  image: StaticImageData;
  badge?: string;
  description?: boolean;
};

const events: EventCard[] = [
  {
    title: "Husband's Birthday Party",
    image: husbandImage,
    overlay: "bg-[#3498DB]/60"
  },
  {
    title: "Wife's Birthday Party",
    image: wifeImage,
    overlay: "bg-[#9b59b6]/50"
  },
  {
    title: "Kids's Birthday Party",
    image: kidsImage,
    overlay: "bg-[#16A085]/50"
  }
];

const categories = [
  "Birthday Special Decors",
  "Candlelight Dinners",
  "Birthday Cakes",
  "Birthday Surprises",
  "Couple Activities",
  "Birthday Special Decors",
  "Candlelight Dinners",
  "Birthday Cakes",
  "Birthday Surprises",
  "Couple Activities",
  "Birthday Special Decors",
  "Candlelight Dinners",
  "Birthday Cakes",
  "Birthday Surprises"
];

const products: ProductCard[] = [
  {
    title: "Pastel and Gold Birthday Decor",
    image: cardOne,
    badge: "Premium , New Arrival"
  },
  {
    title: "Minion Themed Birthday Decor",
    image: cardTwo,
    badge: "New Arrival"
  },
  {
    title: "Black and Gold Birthday Decor",
    image: cardThree
  },
  {
    title: "Flamingo Themed Birthday Decor",
    image: cardFour,
    badge: "New Arrival",
    description: true
  },
  {
    title: "Beer and Whiskey Themed Birthday Decor",
    image: cardFive,
    description: true
  },
  {
    title: "Moustache Themed Birthday Decor",
    image: cardSix,
    badge: "Premium",
    description: true
  }
];

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M13.1417 14.25L8.15417 9.2625C7.75833 9.57917 7.30312 9.82986 6.78854 10.0146C6.27396 10.1993 5.72639 10.2917 5.14583 10.2917C3.70764 10.2917 2.49045 9.79358 1.49427 8.7974C0.49809 7.80122 0 6.58403 0 5.14583C0 3.70764 0.49809 2.49045 1.49427 1.49427C2.49045 0.49809 3.70764 0 5.14583 0C6.58403 0 7.80122 0.49809 8.7974 1.49427C9.79358 2.49045 10.2917 3.70764 10.2917 5.14583C10.2917 5.72639 10.1993 6.27396 10.0146 6.78854C9.82986 7.30312 9.57917 7.75833 9.2625 8.15417L14.25 13.1417L13.1417 14.25ZM5.14583 8.70833C6.13542 8.70833 6.97656 8.36198 7.66927 7.66927C8.36198 6.97656 8.70833 6.13542 8.70833 5.14583C8.70833 4.15625 8.36198 3.3151 7.66927 2.6224C6.97656 1.92969 6.13542 1.58333 5.14583 1.58333C4.15625 1.58333 3.3151 1.92969 2.6224 2.6224C1.92969 3.3151 1.58333 4.15625 1.58333 5.14583C1.58333 6.13542 1.92969 6.97656 2.6224 7.66927C3.3151 8.36198 4.15625 8.70833 5.14583 8.70833Z" fill="#1C1B1F" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M7.87708 17.3375V15.7542C6.22778 15.5694 4.81267 14.8866 3.63177 13.7057C2.45087 12.5248 1.76806 11.1097 1.58333 9.46042H0V7.87708H1.58333C1.76806 6.22778 2.45087 4.81267 3.63177 3.63177C4.81267 2.45087 6.22778 1.76806 7.87708 1.58333V0H9.46042V1.58333C11.1097 1.76806 12.5248 2.45087 13.7057 3.63177C14.8866 4.81267 15.5694 6.22778 15.7542 7.87708H17.3375V9.46042H15.7542C15.5694 11.1097 14.8866 12.5248 13.7057 13.7057C12.5248 14.8866 11.1097 15.5694 9.46042 15.7542V17.3375H7.87708ZM8.66875 14.2104C10.1993 14.2104 11.5056 13.6694 12.5875 12.5875C13.6694 11.5056 14.2104 10.1993 14.2104 8.66875C14.2104 7.13819 13.6694 5.83194 12.5875 4.75C11.5056 3.66806 10.1993 3.12708 8.66875 3.12708C7.13819 3.12708 5.83194 3.66806 4.75 4.75C3.66806 5.83194 3.12708 7.13819 3.12708 8.66875C3.12708 10.1993 3.66806 11.5056 4.75 12.5875C5.83194 13.6694 7.13819 14.2104 8.66875 14.2104ZM8.66875 11.8354C7.79792 11.8354 7.05243 11.5253 6.43229 10.9052C5.81215 10.2851 5.50208 9.53958 5.50208 8.66875C5.50208 7.79792 5.81215 7.05243 6.43229 6.43229C7.05243 5.81215 7.79792 5.50208 8.66875 5.50208C9.53958 5.50208 10.2851 5.81215 10.9052 6.43229C11.5253 7.05243 11.8354 7.79792 11.8354 8.66875C11.8354 9.53958 11.5253 10.2851 10.9052 10.9052C10.2851 11.5253 9.53958 11.8354 8.66875 11.8354ZM8.66875 10.2521C9.10417 10.2521 9.47691 10.097 9.78698 9.78698C10.097 9.47691 10.2521 9.10417 10.2521 8.66875C10.2521 8.23333 10.097 7.86059 9.78698 7.55052C9.47691 7.24045 9.10417 7.08542 8.66875 7.08542C8.23333 7.08542 7.86059 7.24045 7.55052 7.55052C7.24045 7.86059 7.08542 8.23333 7.08542 8.66875C7.08542 9.10417 7.24045 9.47691 7.55052 9.78698C7.86059 10.097 8.23333 10.2521 8.66875 10.2521Z" fill="#1C1B1F" />
    </svg>
  );
}

function GalleryIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16ZM3 14H15L11.25 9L8.25 13L6 10L3 14ZM5.5 7C5.91667 7 6.27083 6.85417 6.5625 6.5625C6.85417 6.27083 7 5.91667 7 5.5C7 5.08333 6.85417 4.72917 6.5625 4.4375C6.27083 4.14583 5.91667 4 5.5 4C5.08333 4 4.72917 4.14583 4.4375 4.4375C4.14583 4.72917 4 5.08333 4 5.5C4 5.91667 4.14583 6.27083 4.4375 6.5625C4.72917 6.85417 5.08333 7 5.5 7Z" fill="#DE3163" />
    </svg>
  );
}

function InspirationIcon() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M13.75 16H2C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H16.6L11.9 11.3C11.55 11.5333 11.1708 11.7083 10.7625 11.825C10.3542 11.9417 9.93333 12 9.5 12C8.25 12 7.1875 11.5625 6.3125 10.6875C5.4375 9.8125 5 8.75 5 7.5C5 6.25 5.4375 5.1875 6.3125 4.3125C7.1875 3.4375 8.25 3 9.5 3C10.75 3 11.8125 3.4375 12.6875 4.3125C13.5625 5.1875 14 6.25 14 7.5C14 7.95 13.9417 8.375 13.825 8.775C13.7083 9.175 13.5333 9.55 13.3 9.9L17.4 14H18V2H2V14H11.75L13.75 16ZM9.5 10C10.2 10 10.7917 9.75833 11.275 9.275C11.7583 8.79167 12 8.2 12 7.5C12 6.8 11.7583 6.20833 11.275 5.725C10.7917 5.24167 10.2 5 9.5 5C8.8 5 8.20833 5.24167 7.725 5.725C7.24167 6.20833 7 6.8 7 7.5C7 8.2 7.24167 8.79167 7.725 9.275C8.20833 9.75833 8.8 10 9.5 10Z" fill="#DE3163" />
    </svg>
  );
}

function HireIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M0 16V13.2C0 12.6333 0.145833 12.1125 0.4375 11.6375C0.729167 11.1625 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64583 4.75 9.3875C5.81667 9.12917 6.9 9 8 9C9.1 9 10.1833 9.12917 11.25 9.3875C12.3167 9.64583 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2708 11.1625 15.5625 11.6375C15.8542 12.1125 16 12.6333 16 13.2V16H0ZM18 16V13C18 12.2667 17.7958 11.5625 17.3875 10.8875C16.9792 10.2125 16.4 9.63333 15.65 9.15C16.5 9.25 17.3 9.42083 18.05 9.6625C18.8 9.90417 19.5 10.2 20.15 10.55C20.75 10.8833 21.2083 11.2542 21.525 11.6625C21.8417 12.0708 22 12.5167 22 13V16H18ZM8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM18 4C18 5.1 17.6083 6.04167 16.825 6.825C16.0417 7.60833 15.1 8 14 8C13.8167 8 13.5833 7.97917 13.3 7.9375C13.0167 7.89583 12.7833 7.85 12.6 7.8C13.05 7.26667 13.3958 6.675 13.6375 6.025C13.8792 5.375 14 4.7 14 4C14 3.3 13.8792 2.625 13.6375 1.975C13.3958 1.325 13.05 0.733333 12.6 0.2C12.8333 0.116667 13.0667 0.0625 13.3 0.0375C13.5333 0.0125 13.7667 0 14 0C15.1 0 16.0417 0.391667 16.825 1.175C17.6083 1.95833 18 2.9 18 4ZM2 14H14V13.2C14 13.0167 13.9542 12.85 13.8625 12.7C13.7708 12.55 13.65 12.4333 13.5 12.35C12.6 11.9 11.6917 11.5625 10.775 11.3375C9.85833 11.1125 8.93333 11 8 11C7.06667 11 6.14167 11.1125 5.225 11.3375C4.30833 11.5625 3.4 11.9 2.5 12.35C2.35 12.4333 2.22917 12.55 2.1375 12.7C2.04583 12.85 2 13.0167 2 13.2V14ZM8 6C8.55 6 9.02083 5.80417 9.4125 5.4125C9.80417 5.02083 10 4.55 10 4C10 3.45 9.80417 2.97917 9.4125 2.5875C9.02083 2.19583 8.55 2 8 2C7.45 2 6.97917 2.19583 6.5875 2.5875C6.19583 2.97917 6 3.45 6 4C6 4.55 6.19583 5.02083 6.5875 5.4125C6.97917 5.80417 7.45 6 8 6Z" fill="#DE3163" />
    </svg>
  );
}

function ProductArrowIcon() {
  return (
    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1.25729 14.1667L0 12.9094L5.82604 7.08333L0 1.25729L1.25729 0L8.34063 7.08333L1.25729 14.1667Z" fill="#DE3163" />
    </svg>
  );
}
function ProIcon() {
  return (
    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2V0H20V2H12ZM12 6V4H20V6H12ZM12 10V8H20V10H12ZM6 9C5.16667 9 4.45833 8.70833 3.875 8.125C3.29167 7.54167 3 6.83333 3 6C3 5.16667 3.29167 4.45833 3.875 3.875C4.45833 3.29167 5.16667 3 6 3C6.83333 3 7.54167 3.29167 8.125 3.875C8.70833 4.45833 9 5.16667 9 6C9 6.83333 8.70833 7.54167 8.125 8.125C7.54167 8.70833 6.83333 9 6 9ZM0 15V13.1C0 12.75 0.0833333 12.4167 0.25 12.1C0.416667 11.7833 0.65 11.5333 0.95 11.35C1.7 10.9 2.49583 10.5625 3.3375 10.3375C4.17917 10.1125 5.06667 10 6 10C6.93333 10 7.82083 10.1125 8.6625 10.3375C9.50417 10.5625 10.3 10.9 11.05 11.35C11.35 11.5333 11.5833 11.7833 11.75 12.1C11.9167 12.4167 12 12.75 12 13.1V15H0ZM2.15 13H9.85C9.26667 12.6667 8.65 12.4167 8 12.25C7.35 12.0833 6.68333 12 6 12C5.31667 12 4.65 12.0833 4 12.25C3.35 12.4167 2.73333 12.6667 2.15 13ZM6 7C6.28333 7 6.52083 6.90417 6.7125 6.7125C6.90417 6.52083 7 6.28333 7 6C7 5.71667 6.90417 5.47917 6.7125 5.2875C6.52083 5.09583 6.28333 5 6 5C5.71667 5 5.47917 5.09583 5.2875 5.2875C5.09583 5.47917 5 5.71667 5 6C5 6.28333 5.09583 6.52083 5.2875 6.7125C5.47917 6.90417 5.71667 7 6 7Z" fill="#DE3163" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff1f5] text-[#242329]">
      <header className="sticky top-0 z-20 bg-[#fff2f5] shadow-[0_1px_0_rgba(32,31,35,0.05)]">
        <div className="mx-auto flex min-h-[68px] w-[min(100%-3rem,78rem)] items-center justify-between gap-6 max-[900px]:flex-wrap max-[900px]:items-start max-[900px]:py-4 max-[640px]:w-[min(100%-2rem,78rem)]">
        <a className="whitespace-nowrap text-[18px] font-normal text-[#242329] no-underline" href="/">
          SET<span className="text-[#e72c68]">MySpace</span>
        </a>
        <nav className="flex items-center gap-7 text-[14px] text-[#28272c] max-[900px]:order-3 max-[900px]:w-full max-[900px]:gap-4 max-[900px]:overflow-x-auto max-[900px]:pb-1" aria-label="Main navigation">
          <a className="text-[#e72c68]" href="/home">Home</a>
          <a href="#">Spaces</a>
          <a href="#">Celebrations</a>
          <a href="#">Professionals</a>
          <a href="#">Vendors</a>
          <a href="#">Blog</a>
        </nav>
        <div className="flex items-center gap-4 text-[12px] font-normal uppercase">
          <a className="flex items-center gap-2 hover:text-[#e72c68]" href="#"><ProIcon /> Become a Professional</a>
          <a className="grid min-h-8 min-w-[68px] place-items-center rounded-md bg-[#1d1d20] text-white normal-case" href="#">Login</a>
        </div>
        </div>
      </header>

      <section className="relative min-h-[560px] overflow-hidden max-[640px]:min-h-[640px]">
        <Image src={heroImage} alt="" fill priority sizes="100vw" className="object-none object-top max-[640px]:object-[62%_top]" />
        <div className="relative ml-[230px] z-10 mx-auto w-full max-w-[78rem] px-6 pt-[82px] max-[640px]:pt-12 pb-[150px]">
          <h1 className="m-0 max-w-[932px] text-[48px] font-light leading-none tracking-normal max-[640px]:text-[38px]">
            We set up your space to <br />
            celebrate your <strong className="font-semibold">Birthday Party</strong>
          </h1>

          <div className="mt-8 flex flex-wrap gap-6 text-base font-normal" aria-label="Birthday services">
            <span className="flex items-center gap-2 text-[#242329]"><GalleryIcon /> Browse gallery</span>
            <span className="flex items-center gap-2 text-[#242329]"><InspirationIcon /> Find Inspiration</span>
            <span className="flex items-center gap-2 text-[#242329]"><HireIcon /> Hire Professionals</span>
          </div>

          <form className="mt-5 grid w-fit grid-cols-[minmax(14rem,22rem)_minmax(12rem,22rem)] max-[640px]:w-full max-[640px]:grid-cols-1">
            <label className="relative block">
              <span className="sr-only">Search service or professional</span>
              <input className="min-h-[49px] w-full rounded-l-md border-0 border-r border-[#eeeeee] bg-white py-0 pl-4 pr-11 text-[#333238] shadow-[0_4px_14px_rgba(32,31,35,0.12)] outline-none placeholder:text-[#929097] max-[640px]:mb-2 max-[640px]:rounded-md max-[640px]:border-r-0" type="search" placeholder="Search Service, Professional etc." />
              <span className="absolute right-4 top-1/2 -translate-y-1/2"><SearchIcon /></span>
            </label>
            <label className="relative block">
              <span className="sr-only">Location</span>
              <input className="min-h-[49px] w-full rounded-r-md border-0 bg-white py-0 pl-4 pr-12 text-[#333238] shadow-[0_4px_14px_rgba(32,31,35,0.12)] outline-none placeholder:text-[#929097] max-[640px]:mb-2 max-[640px]:rounded-md" type="text" placeholder="Enter Location" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2"><LocationIcon /></span>
            </label>
            <button className="mt-4 min-h-[42px] w-max rounded-md border-0 bg-[#e72c68] px-6 font-normal text-white" type="submit">Search Professionals</button>
          </form>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-[68px] grid w-[min(100%-3rem,78rem)] grid-cols-3 gap-6 max-[900px]:grid-cols-1 max-[640px]:-mt-8 max-[640px]:w-[min(100%-3rem,78rem)]" aria-label="Birthday party types">
        {events.map((event) => (
          <a className="relative flex min-h-[125px] items-center justify-between overflow-hidden rounded-lg px-8 py-6 text-[24px] font-normal leading-none tracking-normal text-white capitalize shadow-[0_12px_24px_rgba(40,39,44,0.12)] max-[640px]:min-h-[100px] max-[640px]:px-5 max-[640px]:text-[20px]" href="#" key={event.title}>
            <Image src={event.image} alt="" fill sizes="33vw" className="-z-20 object-cover" />
            <span className={`absolute inset-0 -z-10 ${event.overlay}`} />
            <span>{event.title}</span>
            <strong className="text-3xl font-light" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white"/>
              </svg>
            </strong>
          </a>
        ))}
      </section>

      <section className="mx-auto mt-14 grid w-[min(100%-3rem,78rem)] grid-cols-[13rem_1fr] gap-8 max-[1100px]:grid-cols-1 max-[640px]:w-[min(100%-2rem,78rem)]">
        <aside className="grid content-start gap-3 pt-12 max-[1100px]:grid-cols-3 max-[1100px]:pt-0 max-[640px]:grid-cols-1" aria-label="Decoration categories">
          {categories.map((category, index) => (
            <a
              key={`${category}-${index}`}
              href="#"
              className={`flex items-center h-[36px] w-fit rounded-[7px] border border-[#B456D2] px-[20px] py-[8px] text-center text-[14px] font-normal leading-none text-[#8E44AD] transition-all duration-200 hover:bg-[#8E44AD] hover:text-white `}
            >
              {category}
            </a>
          ))}
          <button className="flex h-9 w-fit items-center gap-[10px] rounded-[7px] border border-[#b456d2] bg-transparent px-5 py-2 text-left text-[16px] font-normal leading-none tracking-normal text-[#a34dc0] transition-colors hover:bg-[#8E44AD] hover:text-white" type="button">More +</button>
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="m-0 text-[22px] font-normal leading-tight">Top professionals for Birthday Decorations</h2>
            <button
              type="button"
              className="flex min-h-8 min-w-[86px] items-center justify-center gap-2 rounded-md border border-[#e72c68] bg-[#fff8fa] font-normal text-[#e72c68]"
            >
              <span>Sort</span>

              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 8.81396V7.34497H4.40698V8.81396H0ZM0 5.14148V3.67249H8.81396V5.14148H0ZM0 1.46899V0H13.2209V1.46899H0Z"
                  fill="#DE3163"
                />
              </svg>
            </button>
          </div>
          <div className="grid auto-rows-fr grid-cols-3 items-stretch gap-5 max-[900px]:grid-cols-1">
            {products.map((product, index) => (
              <article className="flex h-[455px] flex-col overflow-hidden rounded-lg bg-white shadow-[0_8px_18px_rgba(32,31,35,0.11)] transition-colors hover:bg-[#F1D2D9] max-[900px]:h-auto" key={product.title}>
                <div className="relative h-[220px] shrink-0 overflow-hidden max-[900px]:h-[300px] max-[640px]:h-[240px]">
                  <Image src={product.image} alt={product.title} fill sizes="(max-width: 900px) 100vw, 33vw" className="object-cover" />
                    {product.badge && (
                      <div className="absolute left-5 top-4 flex gap-2">
                        {product.badge.split(",").map((badge: string, index: number) => (
                          <span
                            key={index}
                            className="grid min-h-8 min-w-[94px] place-items-center rounded-md bg-[#e72c68] px-2 text-[12px] font-normal uppercase text-white"
                          >
                            {badge.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                  <button className="absolute right-4 top-4 grid h-[34px] w-[34px] place-items-center rounded-full border-0 bg-white text-xl leading-none text-[#e72c68]" type="button" aria-label="Save professional"><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.11382 13.0539L6.08232 12.1291C4.88482 11.0501 3.89482 10.1194 3.1123 9.33689C2.32978 8.55437 1.70732 7.85188 1.24492 7.22942C0.78252 6.60696 0.459434 6.03489 0.275661 5.51321C0.0918869 4.99153 0 4.45799 0 3.9126C0 2.7981 0.373476 1.86738 1.12043 1.12043C1.86738 0.373476 2.7981 0 3.9126 0C4.52913 0 5.11602 0.13042 5.67327 0.39126C6.23052 0.6521 6.7107 1.01965 7.11382 1.4939C7.51694 1.01965 7.99712 0.6521 8.55437 0.39126C9.11162 0.13042 9.69851 0 10.315 0C11.4295 0 12.3603 0.373476 13.1072 1.12043C13.8542 1.86738 14.2276 2.7981 14.2276 3.9126C14.2276 4.45799 14.1358 4.99153 13.952 5.51321C13.7682 6.03489 13.4451 6.60696 12.9827 7.22942C12.5203 7.85188 11.8979 8.55437 11.1153 9.33689C10.3328 10.1194 9.34282 11.0501 8.14532 12.1291L7.11382 13.0539ZM7.11382 11.1331C8.25203 10.1135 9.18869 9.23908 9.92378 8.50991C10.6589 7.78074 11.2398 7.14643 11.6667 6.60696C12.0935 6.0675 12.3899 5.58731 12.5559 5.16641C12.7219 4.74551 12.8049 4.32757 12.8049 3.9126C12.8049 3.20122 12.5677 2.6084 12.0935 2.13415C11.6192 1.65989 11.0264 1.42276 10.315 1.42276C9.75779 1.42276 9.24204 1.57986 8.76778 1.89405C8.29353 2.20825 7.96748 2.6084 7.78963 3.09451H6.43801C6.26016 2.6084 5.93411 2.20825 5.45986 1.89405C4.9856 1.57986 4.46985 1.42276 3.9126 1.42276C3.20122 1.42276 2.6084 1.65989 2.13415 2.13415C1.65989 2.6084 1.42276 3.20122 1.42276 3.9126C1.42276 4.32757 1.50576 4.74551 1.67175 5.16641C1.83774 5.58731 2.13415 6.0675 2.56098 6.60696C2.9878 7.14643 3.56877 7.78074 4.30386 8.50991C5.03896 9.23908 5.97561 10.1135 7.11382 11.1331Z" fill="#DE3163"/>
                    </svg>
                  </button>
                </div>
                <div className="flex flex-1 flex-col p-4 pt-3">
                  <div className="grid grid-cols-[1fr_auto] items-start gap-3">
                    <h3 className="m-0 text-[18px] font-normal leading-none tracking-normal">{product.title}</h3>
                    <span className="-mr-4 -mt-3 grid min-h-8 min-w-[84px] place-items-center rounded-bl-md bg-[#9342ad] font-normal text-white">Rs. 1900</span>
                  </div>
                  <p className="mt-3 flex items-center gap-2 text-[13px] text-[#77717a]"><span className="grid h-[23px] w-[23px] place-items-center rounded-full bg-[#e8d0c7] text-[12px] font-normal text-[#6e4236]">S</span> Suresh Sitharaman</p>
                  <p className="mt-2 text-[13px] text-[#f0ad1e] flex">
                        <span className="flex items-center gap-1">
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.56819 11.1187L8.12874 9.69375L10.6893 11.1375L10.0187 8.4375L12.2744 6.6375L9.30741 6.39375L8.12874 3.84375L6.95007 6.375L3.98308 6.61875L6.23881 8.4375L5.56819 11.1187ZM3.10924 14.25L4.43016 8.98125L0 5.4375L5.85269 4.96875L8.12874 0L10.4048 4.96875L16.2575 5.4375L11.8273 8.98125L13.1482 14.25L8.12874 11.4563L3.10924 14.25Z" fill="#FBBE21"/>
                          </svg>
                          4.9 (256)
                        </span>
                        <span className="ml-2 text-[#5f5962] flex items-center gap-1">
                          <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.87725 15C3.44117 15 2.26927 14.7906 1.36156 14.3719C0.453855 13.9531 0 13.4125 0 12.75C0 12.3125 0.196445 11.9313 0.589334 11.6063C0.982223 11.2812 1.52414 11.025 2.21508 10.8375L2.68249 12.2625C2.45217 12.325 2.24218 12.4031 2.05251 12.4969C1.86284 12.5906 1.73413 12.675 1.66639 12.75C1.84251 12.95 2.24895 13.125 2.8857 13.275C3.52246 13.425 4.1863 13.5 4.87725 13.5C5.56819 13.5 6.23542 13.425 6.87895 13.275C7.52247 13.125 7.9323 12.95 8.10842 12.75C8.04068 12.675 7.91198 12.5906 7.72231 12.4969C7.53263 12.4031 7.32264 12.325 7.09233 12.2625L7.55973 10.8375C8.25067 11.025 8.7892 11.2812 9.17532 11.6063C9.56143 11.9313 9.75449 12.3125 9.75449 12.75C9.75449 13.4125 9.30064 13.9531 8.39293 14.3719C7.48522 14.7906 6.31332 15 4.87725 15ZM4.87725 9.99375C5.12111 9.58125 5.37852 9.20312 5.64948 8.85938C5.92043 8.51562 6.18462 8.1875 6.44203 7.875C6.9433 7.275 7.34296 6.73438 7.64102 6.25313C7.93907 5.77188 8.0881 5.175 8.0881 4.4625C8.0881 3.6375 7.7765 2.9375 7.15329 2.3625C6.53009 1.7875 5.77141 1.5 4.87725 1.5C3.98308 1.5 3.2244 1.7875 2.6012 2.3625C1.97799 2.9375 1.66639 3.6375 1.66639 4.4625C1.66639 5.175 1.81542 5.77188 2.11347 6.25313C2.41153 6.73438 2.81119 7.275 3.31246 7.875C3.56987 8.1875 3.83406 8.51562 4.10502 8.85938C4.37597 9.20312 4.63338 9.58125 4.87725 9.99375ZM4.87725 12.75C4.72822 12.75 4.59274 12.7094 4.47081 12.6281C4.34888 12.5469 4.26082 12.4375 4.20662 12.3C3.89502 11.4125 3.50213 10.6687 3.02796 10.0688C2.55378 9.46875 2.09315 8.89375 1.64607 8.34375C1.21254 7.79375 0.836583 7.225 0.518207 6.6375C0.199832 6.05 0.0406437 5.325 0.0406437 4.4625C0.0406437 3.2125 0.508046 2.15625 1.44285 1.29375C2.37766 0.43125 3.52246 0 4.87725 0C6.23204 0 7.37683 0.43125 8.31164 1.29375C9.24644 2.15625 9.71385 3.2125 9.71385 4.4625C9.71385 5.325 9.55805 6.05 9.24644 6.6375C8.93484 7.225 8.5555 7.79375 8.10842 8.34375C7.67489 8.89375 7.21765 9.46875 6.7367 10.0688C6.25574 10.6687 5.85947 11.4125 5.54787 12.3C5.49368 12.4375 5.40561 12.5469 5.28368 12.6281C5.16175 12.7094 5.02627 12.75 4.87725 12.75ZM4.87725 6.05625C5.35142 6.05625 5.75786 5.9 6.09656 5.5875C6.43525 5.275 6.6046 4.9 6.6046 4.4625C6.6046 4.025 6.43525 3.65 6.09656 3.3375C5.75786 3.025 5.35142 2.86875 4.87725 2.86875C4.40307 2.86875 3.99663 3.025 3.65793 3.3375C3.31924 3.65 3.14989 4.025 3.14989 4.4625C3.14989 4.9 3.31924 5.275 3.65793 5.5875C3.99663 5.9 4.40307 6.05625 4.87725 6.05625Z" fill="#DE3163"/>
                        </svg>
                        Indiranagar, BL</span></p>
                  {product.description && (
                    <div className="mt-4 flex min-h-[41px] items-center gap-4 border-t border-[#eee7eb] pt-3">
                      <p className="m-0 flex-1 text-[13px] leading-snug text-[#77717a]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                      {index === 4 && <ProductArrowIcon />}
                    </div>
                  )}
                  <a className="mt-auto grid h-[35px] w-full max-w-[322px] place-items-center gap-[10px] rounded-[7px] border border-[#e72c68] bg-transparent px-5 py-2 text-[15px] font-normal uppercase leading-none tracking-normal text-[#e72c68] transition-colors hover:bg-[#e72c68] hover:text-white" href="#">Contact Now</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 w-[min(100%-3rem,78rem)] text-center max-[640px]:w-[min(100%-2rem,78rem)]">
        <h2 className="m-0 text-[28px] font-normal leading-tight">What Our Customers Are Saying</h2>
        <div className="mt-9 grid grid-cols-2 rounded-lg bg-white text-left shadow-[0_8px_20px_rgba(32,31,35,0.11)] max-[900px]:grid-cols-1">
          <figure className="m-0 p-12 max-[640px]:p-6">
            <blockquote className="m-0 min-h-24 leading-normal text-[#77717a]">&quot;Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu present at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.&quot;</blockquote>
            <figcaption className="mt-7 flex items-center gap-4 text-[13px]"><Image src={judithBlackImage} alt="Judith Black" width={52} height={52} className="h-13 w-13 rounded-full object-cover" /><span><strong className="mb-1 block text-[#e72c68]">Judith Black</strong>CEO of Tuple</span></figcaption>
          </figure>
          <figure className="m-0 border-l border-[#eee7eb] p-12 max-[900px]:border-l-0 max-[900px]:border-t max-[640px]:p-6">
            <blockquote className="m-0 min-h-24 leading-normal text-[#77717a]">&quot;Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint dolor nisi ullamco.&quot;</blockquote>
            <figcaption className="mt-7 flex items-center gap-4 text-[13px]"><Image src={josephRodriguezImage} alt="Joseph Rodriguez" width={52} height={52} className="h-13 w-13 rounded-full object-cover" /><span><strong className="mb-1 block text-[#e72c68]">Joseph Rodriguez</strong>CEO of Reform</span></figcaption>
          </figure>
        </div>
        <div className="my-8 flex justify-center gap-2" aria-hidden="true">
          <span className="h-2 w-2 rounded-full border border-[#e72c68] bg-[#e72c68]" />
          <span className="h-2 w-2 rounded-full border border-[#aaa0a7]" />
          <span className="h-2 w-2 rounded-full border border-[#aaa0a7]" />
          <span className="h-2 w-2 rounded-full border border-[#aaa0a7]" />
        </div>
      </section>

      <footer className="bg-[#1f1f21] text-[#89858b]">
        <div className="mx-auto grid min-h-36 w-[min(100%-3rem,78rem)] grid-cols-[16rem_1fr_16rem] items-center gap-8 py-8 max-[900px]:grid-cols-1 max-[900px]:text-center max-[640px]:w-[min(100%-2rem,78rem)]">
        <div>
          <a className="mb-2 inline-block text-[18px] font-normal text-white" href="/">SET<span className="text-[#e72c68]">MySpace</span></a>
          <p className="my-1">A Unit Of UrbanBarrow Pvt. Ltd.</p>
          <p className="my-1">Whitefield, Bangalore</p>
          <p className="my-1">Karnataka, India 560066</p>
        </div>
        <nav className="flex flex-col justify-center gap-6 text-[13px] font-normal text-white" aria-label="Footer navigation">
          <div className="flex items-center justify-center gap-2">
            <a href="#">Help &amp; Support</a>
            <span className="text-[#DE3163]">|</span>

            <a href="#">Signup As Partner</a>
            <span className="text-[#DE3163]">|</span>

            <a href="#">Terms &amp; Conditions</a>
            <span className="text-[#DE3163]">|</span>

            <a href="#">Privacy Policy</a>
          </div>
                  <p className="text-center text-[13px] text-[#7F7F7F] font-normal mt-[40px]">All Rights reserved 2026 setmyspace</p>

        </nav>
        </div>
      </footer>
    </main>
  );
}
