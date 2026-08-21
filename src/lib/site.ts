export const site = {
  name: "Steamworks Photo",
  shortName: "Steamworks",
  location: "Huntsville, Alabama",
  travel: "I come to you",
  heroLine: "Photographs with heat in them.",
  heroSupport:
    "Boudoir, nude art, and stills for adult creators. Original work only.",
  quote: "I shoot people for fun.",
  about:
    "Steamworks is a Huntsville photographer shooting boudoir, intimate portraits, and nude art — in your space, a hotel, or a place we find. Sessions are private and directed. You do not have to know how to pose. You have to want the picture.",
  aboutMore:
    "I work with models. I get on a plane. If you make content for a living, I hire on as your photographer.",
  adultNote: "Artistic nudity. Everyone in front of the camera is 18 or older.",
  instagram: "https://www.instagram.com/steamworks_photo/",
  modelMayhem: "https://www.modelmayhem.com/steamworks",
  linktree: "https://linktr.ee/steamworksphoto",
} as const;

export type LinkItem = {
  label: string;
  href: string;
  note: string;
};

export const doors = [
  {
    kicker: "For you",
    title: "A private sitting",
    body: "Boudoir, intimate portraits, nude art. Wardrobe help, slow direction, a gallery you can live with. No audience. No performance.",
    cta: "Request a sitting",
    href: "https://www.instagram.com/steamworks_photo/",
  },
  {
    kicker: "For your audience",
    title: "Hire the photographer",
    body: "Original stills and sets for adult creators. Shot with you — not pulled from a folder you have already seen. Bring a date, a brief, and where the files should live.",
    cta: "Book a hire",
    href: "https://www.instagram.com/steamworks_photo/",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Inquire",
    body: "Instagram is fastest. Send dates, what you want, and whether I am coming to you.",
  },
  {
    n: "02",
    title: "We shoot",
    body: "On location. I bring lights. I direct. You do not have to arrive with a pose list.",
  },
  {
    n: "03",
    title: "You get the work",
    body: "A finished gallery for you — or files cut for the platforms you actually post to.",
  },
] as const;

export const vault = [
  {
    label: "Patreon",
    href: "https://www.patreon.com/steamworksphoto",
    kicker: "The body of work",
    body: "Full galleries. Glamour, boudoir, nude art. For people who want the sitting, not a teaser.",
  },
  {
    label: "Fansly",
    href: "https://fansly.com/steamworks",
    kicker: "The spicier cut",
    body: "Subscriber drops. The work that does not belong on the public feed.",
  },
  {
    label: "BentBox",
    href: "https://bentbox.co/steamworks",
    kicker: "Buy the file",
    body: "A la carte. No subscription. Take what you want and leave.",
  },
] as const;

export const elsewhere = [
  {
    group: "The public work",
    items: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/steamworks_photo/",
        note: "@steamworks_photo",
      },
      {
        label: "Studio 126",
        href: "https://www.instagram.com/imstudio126/",
        note: "@imstudio126",
      },
      {
        label: "Model Mayhem",
        href: "https://www.modelmayhem.com/steamworks",
        note: "Casting and collabs",
      },
      {
        label: "Reddit",
        href: "https://www.reddit.com/user/Steamworks-Photo/",
        note: "u/Steamworks-Photo",
      },
      {
        label: "Kavyar",
        href: "https://linktr.ee/steamworksphoto",
        note: "Published editorials",
      },
      {
        label: "Behance",
        href: "https://linktr.ee/steamworksphoto",
        note: "Long-form portfolio",
      },
    ] satisfies LinkItem[],
  },
  {
    group: "After hours",
    items: [
      {
        label: "Bluesky",
        href: "https://bsky.app/profile/steamworksphoto.bsky.social",
        note: "@steamworksphoto",
      },
      {
        label: "X",
        href: "https://x.com/steamworksphoto",
        note: "@steamworksphoto",
      },
      {
        label: "FetLife",
        href: "https://linktr.ee/steamworksphoto",
        note: "The scene",
      },
      {
        label: "Studio 126 Bluesky",
        href: "https://linktr.ee/steamworksphoto",
        note: "@imstudio126",
      },
    ] satisfies LinkItem[],
  },
] as const;

export const gallery = [
  {
    src: "/images/work-03.jpg",
    alt: "Editorial portrait in a dark silk robe, face in shadow",
    caption: "Robe",
    layout: "feature",
  },
  {
    src: "/images/work-01.jpg",
    alt: "Silhouette in window light, sheer curtains",
    caption: "Window",
    layout: "normal",
  },
  {
    src: "/images/work-02.jpg",
    alt: "Champagne silk over a collarbone and shoulder",
    caption: "Silk",
    layout: "normal",
  },
  {
    src: "/images/work-04.jpg",
    alt: "Hands gathering black tulle in tungsten light",
    caption: "Tulle",
    layout: "normal",
  },
  {
    src: "/images/work-05.jpg",
    alt: "Rim-lit figure from behind against a dark backdrop",
    caption: "Edge",
    layout: "normal",
  },
  {
    src: "/images/atmosphere.jpg",
    alt: "Shaft of warm light through steam",
    caption: "Steam",
    layout: "wide",
  },
] as const;
