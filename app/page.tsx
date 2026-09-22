"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bath, BedDouble, CalendarDays, ChevronDown, ChevronLeft, ChevronRight,
  DoorOpen, Heart, House, KeyRound, Map, MapPin, Menu, Minus, PawPrint,
  Plus, Search, Share, Shield, Sparkles, Tag, Utensils, Users, Wifi, X,
} from "lucide-react";
import Header from "./components/Header";
import { listingData } from "../data/listing";

const imagePath = (name: string) => `/images/listing/${name}`;
const photos = [
  "b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg",
  "090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg",
  "70325367-cbae-4993-b560-18cd3f6edd53.jpeg",
  "0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg",
  "c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg",
  "1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg",
];
const tourPhotos = [
  "b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg", "090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg", "70325367-cbae-4993-b560-18cd3f6edd53.jpeg", "0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg", "c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg", "1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg",
  "153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg", "2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg", "23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg", "246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg", "30ad93b2-293f-494d-b645-626303c6cb93.jpeg", "34529829-a971-44d3-ac2f-90ea3678a34d.jpeg",
  "3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg", "3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg", "3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg", "42befad7-fb29-473d-91db-b03e7a544d1d.jpeg", "48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg", "4fede77d-7a71-446f-89e3-263af937f3fa.jpeg",
  "56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg", "5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg", "5b856fde-a393-41bf-b373-c9d02e64221f.jpeg", "608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg", "79addceb-8c2d-419b-80ff-e29af426a94c.jpeg",
  "79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg", "862d936c-0f34-4e50-af87-b519e2781d19.jpeg", "8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg", "929545d3-e241-46c0-8a70-c24531ce7b54.jpeg", "9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg", "97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg",
  "9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg", "9be71047-fc52-438a-9270-75cb470f6752.jpeg", "a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg", "a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg", "a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg", "67c61c6f-6260-4809-9510-0360e58a345d.jpeg",
  "cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg", "dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg", "ddc853d7-e658-405c-bedc-8f31106c447e.jpeg", "f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg", "f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg", "f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg", "fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg", "fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg",
];
const assignedTourPhotos: readonly string[] = [
  "b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg", "090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg", "862d936c-0f34-4e50-af87-b519e2781d19.jpeg", "a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg", "608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg",
  "70325367-cbae-4993-b560-18cd3f6edd53.jpeg", "30ad93b2-293f-494d-b645-626303c6cb93.jpeg", "dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg",
  "56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg",
  "48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg",
  "97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg",
  "246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg", "4fede77d-7a71-446f-89e3-263af937f3fa.jpeg", "9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg",
  "23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg", "5b856fde-a393-41bf-b373-c9d02e64221f.jpeg", "79addceb-8c2d-419b-80ff-e29af426a94c.jpeg", "42befad7-fb29-473d-91db-b03e7a544d1d.jpeg", "c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg",
  "8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg", "929545d3-e241-46c0-8a70-c24531ce7b54.jpeg",
] as const;
const remainingTourPhotos = tourPhotos.filter((photo) => !assignedTourPhotos.includes(photo));
const tourSections = [
  ["Living room 1", "Sofa · Air conditioning · Ceiling fan · TV", ["b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg", "090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg", "862d936c-0f34-4e50-af87-b519e2781d19.jpeg", "a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg", "608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg"]],
  ["Living room 2", "Ceiling fan · Hot tub", ["70325367-cbae-4993-b560-18cd3f6edd53.jpeg", "30ad93b2-293f-494d-b645-626303c6cb93.jpeg", "dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg"]],
  ["Full kitchen", "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster", ["56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg"]],
  ["Bedroom", "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Wifi", ["48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg"]],
  ["Full bathroom", "Hair dryer · Hot water · Shampoo · Shower · Towels", ["97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg"]],
  ["Gym", "Exercise equipment · Fitness room · Shared facilities", ["246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg", "4fede77d-7a71-446f-89e3-263af937f3fa.jpeg", "9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg"]],
  ["Exterior", "Building entrance · Outdoor dining · Garden · Parking", ["23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg", "5b856fde-a393-41bf-b373-c9d02e64221f.jpeg", "79addceb-8c2d-419b-80ff-e29af426a94c.jpeg", "42befad7-fb29-473d-91db-b03e7a544d1d.jpeg", "c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg"]],
  ["Pool", "Shared outdoor pool · Sun loungers · Outdoor seating", ["8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg", "929545d3-e241-46c0-8a70-c24531ce7b54.jpeg"]],
  ["Additional photos", "Details and spaces around the home", remainingTourPhotos],
] as const;
const nearbyPhotos = ["0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg", "090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg", "153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg", "1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg", "2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg"];

const amenities = [
  [Utensils, "Kitchen"], [Wifi, "Wifi"], [House, "Dedicated workspace"], [Sparkles, "Free parking on premises"],
  [Bath, "Pool"], [Bath, "Hot tub"], [PawPrint, "Pets allowed"], [Shield, "Exterior security cameras on property"],
  [Shield, "Carbon monoxide alarm"], [Shield, "Smoke alarm"],
] as const;

const reviews = [
  ["Amit", "2 months on Airbnb", "Very helpful and responsive team. Safe and peaceful stay, loved everything about the property.", "A"],
  ["Aheesh", "3 years on Airbnb", "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay.", "rev1.jpeg"],
  ["Samiksha", "8 months on Airbnb", "the host nitish was really great help", "rev2.jpeg"],
  ["Vedant", "4 years on Airbnb", "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained.", "V"],
  ["Vaibhav S", "3 years on Airbnb", "Great great experience living out there, can't expect more, will always look for it in the future.", "rev3.jpeg"],
  ["Mohd", "5 years on Airbnb", "Great place. Exactly as described in the listing.", "rev4.jpeg"],
] as const;

export default function Home() {
  const [view, setView] = useState<"page" | "tour" | "lightbox">("page");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [guestCount, setGuestCount] = useState(2);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [reserved, setReserved] = useState(false);
  const [showAmenities, setShowAmenities] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [saved, setSaved] = useState(false);
  const [status, setStatus] = useState("");
  const [nearbyPreview, setNearbyPreview] = useState<{ photo: string; title: string } | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (view === "page") return;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setView("page");
      if (event.key === "ArrowRight") setPhotoIndex((index) => (index + 1) % tourPhotos.length);
      if (event.key === "ArrowLeft") setPhotoIndex((index) => (index - 1 + tourPhotos.length) % tourPhotos.length);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = ""; };
  }, [view]);

  const openPhoto = (index: number) => { setPhotoIndex(index); setView("lightbox"); };
  const reserve = () => { setReserved(true); setStatus("Reservation requested"); };
  const shareListing = async () => { try { await navigator.clipboard?.writeText(window.location.href); } catch {} setStatus("Link copied"); };
  const toggleSaved = () => { setSaved(!saved); setStatus(saved ? "Removed from saved" : "Saved to your wishlist"); };
  const claimDiscount = () => setStatus("Discount claimed");

  return <div className="airbnb-page">
    <Header />
    <div className="listing-container">
      <header className="listing-heading">
        <h1>{listingData.title}</h1>
        <div className="heading-actions"><button onClick={shareListing}><Share size={15} /> {status === "Link copied" ? "Copied" : "Share"}</button><button onClick={toggleSaved}><Heart size={17} fill={saved ? "#222" : "none"} /> {saved ? "Saved" : "Save"}</button></div>
      </header>

      <section className="hero-gallery" id="photos" aria-label="Listing photos">
        <button className="hero-photo" onClick={() => setView("tour")} aria-label="Open photo tour"><img src={imagePath(photos[0])} alt="Main living room" /></button>
        {photos.slice(1, 5).map((photo, index) => <button className="hero-photo" key={photo} onClick={() => index === 3 ? setView("tour") : openPhoto(index + 1)} aria-label={index === 3 ? "Show all photos" : `Open photo ${index + 2}`}><img src={imagePath(photo)} alt="Property interior" />{index === 3 && <span className="show-photos"><Menu size={14} /> Show all photos</span>}</button>)}
      </section>

      <nav className="section-nav" aria-label="Listing sections"><a href="#photos" className="active" onClick={(event) => { event.preventDefault(); setView("tour"); }}>Photos</a><a href="#amenities">Amenities</a><a href="#reviews">Reviews</a><a href="#location">Location</a><div className="nav-reserve"><span><b>₹28,499</b> for 5 nights<br /><small>★ {listingData.rating} · {listingData.reviews} reviews</small></span><button onClick={reserve}>{reserved ? "Reserve requested" : "Reserve"}</button></div></nav>

      <div className="listing-layout">
        <main className="listing-main">
          <div className="offer-banner"><Tag size={21} fill="#51a95a" color="#51a95a" /><span>Get 10% off your next stay.<br /><u>Terms apply</u></span><button onClick={claimDiscount}>{status === "Discount claimed" ? "Claimed" : "Claim"}</button></div>
          <section className="property-intro"><div><h2>Entire serviced apartment in Candolim, India</h2><p>3 guests · 1 bedroom · 1 bed · 1 bathroom</p></div><img src={imagePath("host.jpeg")} alt="Mirashya Homes host" /></section>
          <section className="guest-favourite"><div className="laurel">❧</div><b>Guest<br />favourite</b><span>One of the most loved homes on Airbnb,<br />according to guests</span><strong>4.95<small>★★★★★</small></strong><i></i><strong>19<small>Reviews</small></strong></section>
          <section className="host-row"><img src={imagePath("host.jpeg")} alt="Mirashya Homes" /><div><h3>Hosted by Mirashya Homes</h3><p>2 years hosting</p></div></section>
          <section className="feature-list"><Feature icon={Bath} title="Outdoor entertainment" text="The pool and alfresco dining are great for summer trips." /><Feature icon={Sparkles} title="Designed for staying cool" text="Beat the heat with the A/C and ceiling fan." /><Feature icon={DoorOpen} title="Self check-in" text="You can check in with the building staff." /></section>
          <section className="description-block"><div className="translation-note">Some info has been automatically translated. <u>Show original</u></div><p>🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 📺, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife.</p>{showDescription && <p className="extra-copy">The apartment is designed for calm mornings and easy evenings, with self check-in and everything you need for a comfortable stay.</p>}<button className="text-link" onClick={() => setShowDescription(!showDescription)}>{showDescription ? "Show less" : "Show more"} <ChevronRight size={16} /></button></section>
          <section className="sleep-section"><h2>Where you'll sleep</h2><div className="sleep-grid"><SleepCard image="0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg" title="Bedroom" text="1 double bed" /><SleepCard image="153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg" title="Living room" text="1 sofa" /></div></section>
          <section className="amenity-section" id="amenities"><h2>What this place offers</h2><div className="amenity-grid">{amenities.slice(0, showAmenities ? amenities.length : 8).map(([Icon, label]) => <div key={label} className={label.includes("alarm") ? "muted-amenity" : ""}><Icon size={20} strokeWidth={1.5} /><span>{label}</span></div>)}</div><button className="outline-button" onClick={() => setShowAmenities(!showAmenities)}>{showAmenities ? "Show fewer amenities" : "Show all 50 amenities"}</button></section>
          <section className="calendar-section"><h2>5 nights in Candolim</h2><p>18 Oct 2026 - 23 Oct 2026</p><div className="calendar-head"><ChevronLeft size={18} /><b>October 2026</b><b>November 2026</b><ChevronRight size={18} /></div><Calendar month="October 2026" selected={[18, 23]} /><button className="clear-dates">Clear dates</button></section>
          <section className="rating-section"><div className="rating-number"><img src={imagePath("laurel-left.png")} alt="" /><strong>4.95</strong><img src={imagePath("laurel-right.png")} alt="" /><b>Guest favourite</b><span>This home is a guest favourite based on ratings, reviews and reliability</span></div><div className="rating-bars"><Rating label="Cleanliness" value="5.0" image="cleanliness.png" /><Rating label="Accuracy" value="5.0" image="accuracy.png" /><Rating label="Check-in" value="5.0" image="condition.png" /><Rating label="Communication" value="5.0" image="comfort.png" /><Rating label="Location" value="4.8" image="location.png" /><Rating label="Value" value="4.8" image="decor.png" /></div></section>
          <section className="reviews-section" id="reviews"><a className="review-help">How reviews work</a><div className="review-tags"><span>🛏️ Comfort 6</span><span>✅ Accuracy 5</span><span>🛁 Hot Tub 5</span><span>🎁 Hospitality 8</span><span>🧼 Cleanliness 4</span><span>🧺 Amenities 2</span></div><div className="reviews-grid">{reviews.map(([name, meta, text, avatar]) => <Review key={name} name={name} meta={meta} text={text} avatar={avatar} />)}</div><button className="outline-button">Show all 19 reviews</button></section>
          <section className="location-section" id="location"><h2>Where you'll be</h2><p>Candolim, Goa, India</p><div className="fake-map"><div className="map-search"><Search size={17} /></div><div className="map-zoom"><button>+</button><button>−</button></div><div className="map-pin"><House size={23} /></div></div><p className="muted-text">Exact location will be provided after booking.</p><h3>Neighbourhood highlights</h3><p>Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.</p><button className="text-link">Show more <ChevronRight size={16} /></button></section>
          <section className="meet-host"><h2>Meet your host</h2><div className="host-content"><div className="host-card"><img src={imagePath("host.jpeg")} alt="Mirashya Homes" /><h3>Mirashya<br />Homes</h3><span>Host</span><div className="host-stats"><b>1,463<small>Reviews</small></b><b>4.68★<small>Rating</small></b><b>2<small>Years hosting</small></b></div></div><div><h3>Co-Hosts</h3><div className="cohosts">{["Sharath", "Aman Dev Pahwa", "Maria Karen Priyanka", "Simran", "Pallavi", "Sanyukta", "Shruti", "Amisha"].map((name, i) => <span key={name}><img src={imagePath(["co1.jpg", "co2.jpg", "co3.jpg"][i % 3])} alt="" />{name}</span>)}</div><h3 className="host-details-title">Host details</h3><p>Response rate: 100%<br />Responds within an hour</p><button className="soft-button">Message host</button></div></div></section>
          <section className="know-section"><h2>Things to know</h2><div><Info icon={CalendarDays} title="Cancellation policy">Free cancellation before 17 October. Cancel before check-in 18 October for a partial refund.<br /><u>Review this host’s full policy for details.</u></Info><Info icon={KeyRound} title="House rules">Check-in after 2:00 pm<br />Checkout before 11:00 am<br />3 guests maximum</Info><Info icon={Shield} title="Safety & property">Carbon monoxide alarm not reported<br />Smoke alarm not reported<br />Exterior security cameras on property</Info></div></section>
          <section className="nearby-section"><h2>More stays nearby</h2><div className="nearby-grid">{nearbyPhotos.map((photo, index) => <button key={photo} onClick={() => setNearbyPreview({ photo, title: ["Beautiful Studio with a view to die for", "NAQAB - 1bhk with private pool", "Greentique Luxury Flat with plunge pool", "The Tropical Studio | 5 mins to Beach", "Luxury Casa Bella 1BHK with plunge pool"][index] })}><img src={imagePath(photo)} alt="Nearby stay" /><b>{["Beautiful Studio with a view to die for", "NAQAB - 1bhk with private pool", "Greentique Luxury Flat with plunge pool", "The Tropical Studio | 5 mins to Beach", "Luxury Casa Bella 1BHK with plunge pool"][index]}</b><span>₹{["23,600", "42,218", "44,506", "22,824", "39,942"][index]} · ★ 4.9{index}</span></button>)}</div></section>
        </main>
        <aside className="booking-rail"><div className="offer-banner"><Tag size={21} fill="#51a95a" color="#51a95a" /><span>Get 10% off your next stay.<br /><u>Terms apply</u></span><button onClick={claimDiscount}>{status === "Discount claimed" ? "Claimed" : "Claim"}</button></div><BookingCard guestCount={guestCount} setGuestCount={setGuestCount} guestsOpen={guestsOpen} setGuestsOpen={setGuestsOpen} reserved={reserved} reserve={reserve} /></aside>
      </div>
    </div>
    {status && <div className="action-toast" role="status">{status}</div>}
    {nearbyPreview && <div className="nearby-preview" role="dialog" aria-modal="true"><button className="nearby-preview-close" onClick={() => setNearbyPreview(null)} aria-label="Close nearby stay"><X /></button><img src={imagePath(nearbyPreview.photo)} alt={nearbyPreview.title} /><h2>{nearbyPreview.title}</h2><p>Nearby stay preview</p></div>}
    {view !== "page" && <GalleryOverlay mode={view} index={photoIndex} setIndex={setPhotoIndex} closeRef={closeRef} close={() => setView("page")} openPhoto={openPhoto} />}
  </div>;
}

function Feature({ icon: Icon, title, text }: { icon: typeof Wifi; title: string; text: string }) { return <div><Icon size={22} /><span><b>{title}</b><small>{text}</small></span></div>; }
function SleepCard({ image, title, text }: { image: string; title: string; text: string }) { return <div><img src={imagePath(image)} alt={title} /><b>{title}</b><span>{text}</span></div>; }
function Rating({ label, value, image }: { label: string; value: string; image: string }) { return <div><span>{label}</span><b>{value}</b><img src={imagePath(image)} alt="" /></div>; }
function Review({ name, meta, text, avatar }: { name: string; meta: string; text: string; avatar: string }) { return <article><div className="reviewer">{avatar.includes(".") ? <img src={imagePath(avatar)} alt="" /> : <span>{avatar}</span>}<b>{name}<small>{meta}</small></b></div><div className="stars">★★★★★ · 1 week ago</div><p>{text}</p></article>; }
function Info({ icon: Icon, title, children }: { icon: typeof Wifi; title: string; children: React.ReactNode }) { return <article><Icon size={22} /><h3>{title}</h3><p>{children}</p><u>Learn more</u></article>; }
function Calendar({ month, selected }: { month: string; selected: number[] }) { const days = Array.from({ length: 35 }, (_, index) => index < 4 ? "" : String(index - 3)); return <div className="calendar"><b>{month}</b><div className="weekdays">S M T W T F S</div><div className="days">{days.map((day, index) => <span key={index} className={selected.includes(Number(day)) ? "selected" : ""}>{day}</span>)}</div></div>; }

function BookingCard({ guestCount, setGuestCount, guestsOpen, setGuestsOpen, reserved, reserve }: { guestCount: number; setGuestCount: (value: number) => void; guestsOpen: boolean; setGuestsOpen: (value: boolean) => void; reserved: boolean; reserve: () => void }) { return <div className="booking-card"><h2>₹28,499 <small>for 5 nights</small></h2><div className="date-fields"><label>CHECK-IN<input type="date" defaultValue="2026-10-18" /></label><label>CHECKOUT<input type="date" defaultValue="2026-10-23" /></label><label className="guest-field">GUESTS<button onClick={() => setGuestsOpen(!guestsOpen)}>{guestCount} guests <ChevronDown size={16} /></button>{guestsOpen && <span className="guest-menu"><b>Guests</b><small>Maximum 3 guests</small><span><button onClick={() => setGuestCount(Math.max(1, guestCount - 1))}><Minus size={14} /></button>{guestCount}<button onClick={() => setGuestCount(Math.min(3, guestCount + 1))}><Plus size={14} /></button></span></span>}</label></div><div className="cancel-note">Free cancellation before <b>17 October</b></div><button className="reserve-button" onClick={reserve}>{reserved ? "Reservation requested" : "Reserve"}</button><p className="charge-note">You won't be charged yet</p></div>; }

function GalleryOverlay({ mode, index, setIndex, closeRef, close, openPhoto }: { mode: "tour" | "lightbox"; index: number; setIndex: (value: number | ((value: number) => number)) => void; closeRef: React.RefObject<HTMLButtonElement | null>; close: () => void; openPhoto: (index: number) => void }) {
  const handleKey = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") close();
    if (event.key === "ArrowRight") setIndex((value) => (Number(value) + 1) % tourPhotos.length);
    if (event.key === "ArrowLeft") setIndex((value) => (Number(value) - 1 + tourPhotos.length) % tourPhotos.length);
  };
  if (mode === "tour") return <div className="tour-overlay" tabIndex={-1} onKeyDown={handleKey}>
    <div className="tour-header"><button ref={closeRef} onClick={close} aria-label="Close photo tour"><X /></button><b>Photo tour</b><div className="tour-actions"><button aria-label="Share photo tour"><Share size={18} /></button><button aria-label="Save photo tour"><Heart size={18} /></button></div></div>
    <div className="tour-catalogue" aria-label="Photo tour sections">{tourSections.map(([title, , sectionPhotos]) => <a href={`#tour-${title.replaceAll(" ", "-")}`} key={title} onClick={(event) => { event.preventDefault(); document.getElementById(`tour-${title.replaceAll(" ", "-")}`)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}><img src={imagePath(sectionPhotos[0])} alt="" /><span>{title}</span></a>)}</div>
    <div className="tour-sections">{tourSections.map(([title, detail, sectionPhotos]) => <section className="tour-section" id={`tour-${title.replaceAll(" ", "-")}`} key={title}><div className="tour-section-copy"><h2>{title}</h2><p>{detail}</p></div><div className="tour-section-images">{sectionPhotos.map((photo, photoIndex) => <button key={`${title}-${photo}-${photoIndex}`} onClick={() => openPhoto(tourPhotos.indexOf(photo))}><img src={imagePath(photo)} alt={`${title} photo ${photoIndex + 1}`} loading="lazy" /></button>)}</div></section>)}</div>
  </div>;
  return <div className="lightbox" tabIndex={-1} onKeyDown={handleKey}><button className="lightbox-close" ref={closeRef} onClick={close} aria-label="Close photo"><X /></button><button className="lightbox-arrow left" onClick={() => setIndex((value) => (Number(value) - 1 + tourPhotos.length) % tourPhotos.length)} aria-label="Previous photo"><ChevronLeft /></button><img src={imagePath(tourPhotos[index])} alt="Full property photo" /><button className="lightbox-arrow right" onClick={() => setIndex((value) => (Number(value) + 1) % tourPhotos.length)} aria-label="Next photo"><ChevronRight /></button><span className="lightbox-count">{index + 1} / {tourPhotos.length}</span></div>;
}
