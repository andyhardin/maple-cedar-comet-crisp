import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as ArrowUpRight, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DS5a8YxO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var site = {
	name: "Steamworks Photo",
	shortName: "Steamworks",
	tagline: "Boudoir, intimate portraiture, and nude art.",
	location: "Huntsville, Alabama",
	travel: "Available for travel",
	blurb: "A dark-room practice built on light, steam, and the people who sit in it. Sessions are private, unhurried, and made around how you want to be seen — whether that is a first boudoir sitting, a fine-art nude, or work for your own audience.",
	modeling: "Open to modeling inquiries. Based in Alabama and available to travel.",
	adultNote: "Work includes artistic nudity. All subjects are 18 or older."
};
var portfolioLinks = [
	{
		label: "Instagram",
		href: "https://www.instagram.com/steamworks_photo/",
		handle: "@steamworks_photo"
	},
	{
		label: "Studio 126 Instagram",
		href: "https://www.instagram.com/imstudio126/",
		handle: "@imstudio126"
	},
	{
		label: "Model Mayhem",
		href: "https://www.modelmayhem.com/steamworks"
	},
	{
		label: "Kavyar",
		href: "https://linktr.ee/steamworksphoto"
	},
	{
		label: "Behance",
		href: "https://linktr.ee/steamworksphoto"
	},
	{
		label: "Reddit",
		href: "https://www.reddit.com/user/Steamworks-Photo/",
		handle: "u/Steamworks-Photo"
	}
];
var spicyLinks = [
	{
		label: "Bluesky",
		href: "https://bsky.app/profile/steamworksphoto.bsky.social",
		handle: "@steamworksphoto"
	},
	{
		label: "Studio 126 Bluesky",
		href: "https://linktr.ee/steamworksphoto"
	},
	{
		label: "X",
		href: "https://x.com/steamworksphoto",
		handle: "@steamworksphoto"
	},
	{
		label: "FetLife",
		href: "https://linktr.ee/steamworksphoto"
	}
];
var exclusiveLinks = [
	{
		label: "Patreon",
		href: "https://www.patreon.com/steamworksphoto",
		handle: "Glamour, boudoir, and nude art"
	},
	{
		label: "Fansly",
		href: "https://fansly.com/steamworks",
		handle: "steamworks"
	},
	{
		label: "BentBox",
		href: "https://bentbox.co/steamworks",
		handle: "steamworks"
	}
];
var allLinksHref = "https://linktr.ee/steamworksphoto";
var services = [
	{
		title: "Boudoir",
		body: "Private sessions for people who want to see themselves held in good light. Wardrobe, posing, and a finished gallery — no performance required."
	},
	{
		title: "Intimate portraiture",
		body: "Closer work: skin, fabric, and the in-between. Built for faces that want to be looked at without being turned into a product."
	},
	{
		title: "Nude art",
		body: "Classical and contemporary figure work. Slow, collaborative, and treated as art — not a stunt."
	},
	{
		title: "For creators",
		body: "For hire with adult content creators. Stills, sets, and collaborations for people who already have an audience and want photographs that hold up."
	}
];
var gallery = [
	{
		src: "/images/work-01.jpg",
		alt: "Silhouette in window light, sheer curtains",
		caption: "Window"
	},
	{
		src: "/images/work-02.jpg",
		alt: "Champagne silk over a collarbone and shoulder",
		caption: "Silk"
	},
	{
		src: "/images/work-03.jpg",
		alt: "Editorial portrait in a dark silk robe, face in shadow",
		caption: "Robe"
	},
	{
		src: "/images/work-04.jpg",
		alt: "Hands gathering black tulle in studio light",
		caption: "Tulle"
	},
	{
		src: "/images/work-05.jpg",
		alt: "Rim-lit figure from behind in a dark studio",
		caption: "Edge"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Gallery() {
	const [open, setOpen] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (open === null) return;
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(null);
			if (event.key === "ArrowRight") setOpen((i) => i === null ? i : (i + 1) % gallery.length);
			if (event.key === "ArrowLeft") setOpen((i) => i === null ? i : (i - 1 + gallery.length) % gallery.length);
		};
		window.addEventListener("keydown", onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = prev;
		};
	}, [open]);
	const active = open === null ? null : gallery[open];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3",
		children: gallery.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen(index),
			className: cn("group relative overflow-hidden bg-elevated text-left", "rounded-md sm:rounded-lg", index === 0 && "col-span-2 sm:col-span-1", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: item.src,
				alt: item.alt,
				className: "aspect-portrait h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-bg/80 to-transparent p-3 pt-10 text-xs tracking-widest text-accent uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100",
				children: item.caption
			})]
		}, item.src))
	}), active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": active.alt,
		className: "fixed inset-0 z-50 flex items-center justify-center bg-bg/92 p-4",
		onClick: () => setOpen(null),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Close",
			className: "absolute top-4 right-4 flex size-11 items-center justify-center rounded-full text-fg transition-colors duration-150 hover:bg-elevated",
			onClick: () => setOpen(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
				className: "size-5",
				strokeWidth: 1.5
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: active.src,
			alt: active.alt,
			className: "max-h-dvh max-w-full rounded-md object-contain py-8",
			onClick: (event) => event.stopPropagation()
		})]
	}) : null] });
}
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		fill: "none",
		"aria-hidden": "true",
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "16",
			cy: "16",
			r: "13",
			stroke: "currentColor",
			strokeWidth: "1.4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M16 7.5c.2 3.4 2.6 4.4 2.6 8.4a2.6 2.6 0 1 1-5.2 0c0-4 2.4-5 2.6-8.4Z",
			fill: "currentColor"
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sessions, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Creators, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Connect, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		id: "top",
		className: "sticky top-0 z-40 border-b border-fg/8 bg-bg/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-5 sm:h-16 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#top",
				className: "flex min-h-11 items-center gap-2 text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "size-6 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg tracking-wide sm:text-xl",
					children: "Steamworks"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Primary",
				className: "flex items-center gap-1 text-xs tracking-nav text-muted uppercase",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#work",
						className: "flex min-h-11 items-center px-2 transition-colors duration-150 hover:text-fg sm:px-3",
						children: "Work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#hire",
						className: "flex min-h-11 items-center px-2 transition-colors duration-150 hover:text-fg sm:px-3",
						children: "Hire"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#connect",
						className: "flex min-h-11 items-center px-2 transition-colors duration-150 hover:text-fg sm:px-3",
						children: "Connect"
					})
				]
			})]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-5xl px-5 pt-10 pb-16 sm:px-8 sm:pt-16 sm:pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs tracking-kicker text-muted uppercase",
				children: [
					site.location,
					" · ",
					site.travel
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display mt-5 text-5xl leading-none tracking-tight text-fg sm:text-7xl md:text-8xl",
				children: ["Steamworks", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block italic text-accent",
					children: "Photo"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-md text-lg leading-relaxed text-muted sm:text-xl",
				children: site.tagline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#hire",
					className: cn("inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-medium tracking-wide text-accent-fg", "transition-transform duration-150 ease-out hover:bg-fg active:scale-press"),
					children: "Book a session"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#exclusive",
					className: cn("inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-medium tracking-wide text-fg", "shadow-border transition-[box-shadow,transform] duration-150 ease-out", "hover:shadow-border-hover active:scale-press"),
					children: "Exclusive work"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "mt-12 overflow-hidden rounded-lg sm:mt-16 sm:rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero.jpg",
					alt: "Dark studio, a wooden stool in a single beam of tungsten light and steam",
					className: "aspect-wide w-full object-cover"
				})
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-fg/8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-5xl gap-10 px-5 py-16 sm:grid-cols-12 sm:gap-12 sm:px-8 sm:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-kicker text-muted uppercase sm:col-span-3",
				children: "The studio"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-8 sm:col-start-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl leading-tight text-fg sm:text-4xl",
						children: "I shoot people for fun."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
						children: site.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
						children: site.modeling
					})
				]
			})]
		})
	});
}
function Work() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "scroll-mt-16 border-t border-fg/8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-kicker text-muted uppercase",
						children: "Selected work"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-3 text-3xl text-fg sm:text-4xl",
						children: "Light, steam, skin."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://www.instagram.com/steamworks_photo/",
						target: "_blank",
						rel: "noreferrer",
						className: "hidden min-h-11 items-center gap-1 text-xs tracking-nav text-muted uppercase transition-colors duration-150 hover:text-fg sm:inline-flex",
						children: ["Full feed", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							className: "size-3.5",
							strokeWidth: 1.5
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm leading-relaxed text-subtle",
					children: "Representative studies of the lighting and tone. Finished sets live on Instagram, Model Mayhem, and the exclusive channels below."
				})
			]
		})
	});
}
function Sessions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-fg/8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-kicker text-muted uppercase",
					children: "Sessions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 max-w-lg text-3xl text-fg sm:text-4xl",
					children: "Four ways to sit for the camera."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-px bg-line sm:grid-cols-2",
					children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "bg-bg p-6 sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-fg",
							children: service.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted sm:text-base",
							children: service.body
						})]
					}, service.title))
				})
			]
		})
	});
}
function Creators() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "hire",
		className: "scroll-mt-16 border-t border-fg/8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-5xl items-center gap-10 px-5 py-16 sm:grid-cols-2 sm:gap-16 sm:px-8 sm:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-kicker text-muted uppercase",
					children: "For hire"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-3xl text-fg sm:text-4xl",
					children: "Adult content creators."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base leading-relaxed text-muted",
					children: "Stills and sets for people who already have an audience. Original work only — photographed, not scraped. Reach out on Instagram or Model Mayhem with dates, a brief, and where you want the files to live."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarrdLink, {
						href: "https://www.instagram.com/steamworks_photo/",
						label: "Message on Instagram"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarrdLink, {
						href: "https://www.modelmayhem.com/steamworks",
						label: "Model Mayhem"
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "overflow-hidden rounded-lg sm:rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/atmosphere.jpg",
					alt: "Shaft of warm light through steam in a dark room",
					className: "aspect-photo w-full object-cover"
				})
			})]
		})
	});
}
function Connect() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "connect",
		className: "scroll-mt-16 border-t border-fg/8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg px-5 py-16 sm:px-8 sm:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs tracking-kicker text-muted uppercase",
					children: "Connect"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-center text-3xl text-fg sm:text-4xl",
					children: "Find the work."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-sm text-center text-sm leading-relaxed text-muted",
					children: "The same map as the Linktree — portfolio, spicy, and exclusive — so this page can be rebuilt on Carrd as stacked text, a gallery, and buttons."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkGroup, {
					title: "Boudoir / Glam / Nude art",
					items: portfolioLinks
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkGroup, {
					title: "Spicy",
					items: spicyLinks
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "exclusive",
					className: "scroll-mt-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkGroup, {
						title: "Fan sites",
						items: exclusiveLinks
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: allLinksHref,
					target: "_blank",
					rel: "noreferrer",
					className: cn("mt-10 flex min-h-12 w-full items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-accent-fg", "transition-transform duration-150 ease-out hover:bg-fg active:scale-press"),
					children: "All links"
				})
			]
		})
	});
}
function LinkGroup({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-3 text-center text-xs tracking-nav text-subtle uppercase",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-2.5",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarrdLink, {
				href: item.href,
				label: item.label,
				handle: item.handle
			}) }, `${item.label}-${item.href}`))
		})]
	});
}
function CarrdLink({ href, label, handle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className: cn("group flex min-h-12 w-full items-center justify-between gap-3 rounded-full px-5", "bg-surface text-sm text-fg shadow-border", "transition-[box-shadow,background-color,transform] duration-150 ease-out", "hover:bg-elevated hover:shadow-border-hover active:scale-press"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex min-w-0 flex-col py-2 text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium",
				children: label
			}), handle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate text-xs text-subtle",
				children: handle
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
			className: "size-4 shrink-0 text-muted transition-colors duration-150 group-hover:text-fg",
			strokeWidth: 1.5
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-fg/8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-5xl flex-col gap-3 px-5 py-10 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-base tracking-wide text-muted",
				children: "Steamworks Photo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: site.adultNote })]
		})
	});
}
//#endregion
export { Home as component };
