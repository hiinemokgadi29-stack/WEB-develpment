# Sephaphoshe NPO Web Development Project (WEDE5020) - Part 3
**Student:** HIINE MOKGADI PRUDENCE (ST10517712)  
**Module:** WEDE5020 (Web Development) | Part 3: Enhancing Functionality and SEO  

---

## Project Overview
A fully responsive, semantic 5-page web application developed for the **Sephapose Old Age & Day Care Centre** located in Ga-Mothapo, Limpopo, South Africa (NPO Reg: 098-244). The project is optimized to attract corporate social investment (CSI), government grants, water engineers, and community volunteers to assist with infrastructural rebuilding.

---

## Changelog
### [Part 1 Submission] - 2026-07-30
- Created core repository folder structure (`/css`, `/js`, `/images`).
- Developed 5 required semantic web files: `index.html`, `about.html`, `services.html`, `enquiry.html`, and `contact.html`.
- Implemented global navigation menu linking all 5 local files.
- Configured external stylesheet (`/css/style.css`) and drafted the Project Proposal.

### [Part 2 Submission] - 2026-09-18
- Enhanced external CSS stylesheet (`/css/style.css`) with consistent typography, colours, shadows, and spacing.
- Implemented responsive web design with CSS media queries across desktop, tablet, and mobile breakpoints using relative units (`rem`, `%`).
- Styled tables, forms, buttons, and responsive image layouts.

### [Part 3 Submission] - 2026-10-28 (Current Phase)
- **Advanced JavaScript Interactivity:**
  - Implemented a native JavaScript Lightbox overlay mechanism for gallery and service images.
  - Added a live dynamic item filter on `services.html` responding to user search input.
  - Added collapsible accordion functionality to section headers across pages.
- **Forms Architecture & Strict Validation:**
  - Built robust client-side validation algorithms checking required fields, email syntax, and phone number lengths.
  - Wired up enquiry and contact form triggers using asynchronous JavaScript (`fetch` simulation) with loading indicators and success confirmation messages without full page reloads.
- **Search Engine Optimization (SEO) & Performance:**
  - Standardized unique `<title>` rules and detailed `<meta name="description">` tags across all 5 pages.
  - Created technical SEO files: `robots.txt` and `sitemap.xml`.
  - Optimized media loading (`loading="lazy"`) and viewport configurations.
- **Interactive Map Integration:**
  - Embedded an operational Map API iframe within `contact.html` and `about.html` pinpointing the Ga-Mothapo facility.
- **Documentation & Academic Referencing:**
  - Updated repository documentation, changelog, and structured reference list.

---

## Website Goals & Objectives
1. **Secure Infrastructure Funding:** Attract corporate social investment (CSI) and government grants to fund the borehole station, boundary fencing, sleeping quarters, and daycare playground.
2. **Streamline Funder Compliance:** Build immediate institutional trust with corporate donors (e.g. Hollywoodbets Foundation) and government departments via transparent NPO registration and financial document access.

---

## Key Features & Functionality
1. **Homepage (`index.html`):** Hero banner, NPO verification badge (Reg: 098-244), urgent needs ticker, and dual landing-gate buttons.
2. **About Us (`about.html`):** Historical timeline, Hollywoodbets Foundation partnership showcase, facility concept designs, and embedded location map.
3. **Services (`services.html`):** 4-pillar operational care grid with live search/filter functionality and lightbox image viewing.
4. **Enquiry (`enquiry.html`):** Funder submission form with strict client-side validation and AJAX asynchronous submission.
5. **Contact (`contact.html`):** Dedicated messaging portal, operational hours, contact info, and embedded interactive map API.

---

## Website Sitemap
```text
                         ┌──────────────────────────────┐
                         │          index.html          │
                         │      (Main Homepage Hub)     │
                         └──────────────┬───────────────┘
                                        │
         ┌───────────────┬─────────────┴─────────────┬───────────────┐
         ▼               ▼                           ▼               ▼
┌────────────────┐┌──────────────┐           ┌──────────────┐┌────────────────┐
│   about.html   ││ services.html│           │ enquiry.html ││  contact.html  │
│ (Our History & ││ (4 Care Care │           │(Secure Funder││(Map, Forms, &  │
│   NPO Data)    ││   Pillars)   │           │    Portal)   ││    Support)    │
└────────────────┘└──────────────┘           └──────────────┘└────────────────┘
```

---

## Deployment Instructions
1. **Hosting Platform:** Static cloud hosting via **GitHub Pages** or **Netlify**.
2. **Build Configuration:** Point the publishing directory to the root or `Sephapose-website` folder.
3. **Verification:** Ensure all internal relative links (`index.html`, `about.html`, `services.html`, `enquiry.html`, `contact.html`), stylesheet (`css/style.css`), script (`js/script.js`), and images (`/images/`) resolve correctly.

---

## Reference List
- Department of Social Development, 2026. *National Register of Non-Profit Organisations: Sephaphoshe Old Age & Day Care Centre (Reg No: 098-244)*. Pretoria: Department of Social Development.
- Hollywoodbets Foundation, 2024. *Hollywoodbets Foundation empowers Sephaphoshe Old Age Centre in Limpopo*. Available at: <https://hollywoodfoundation.co.za> [Accessed 11 August 2026].
- Limpopo Department of Social Development, 2026. *Registered Service Centres for Older Persons: Capricorn District*. Polokwane: Limpopo Provincial Government.
- The Independent Institute of Education, 2026. *Web Development (WEDE5020) Portfolio of Evidence Manual*. Sandton: IIE.
- World Wide Web Consortium, 2023. *Web Content Accessibility Guidelines (WCAG) 2.2*. Available at: <https://www.w3.org> [Accessed 11 August 2026].
