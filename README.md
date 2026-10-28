# Sephaphoshe NPO Web Development Project (WEDE5020) - Part 3
## Student Information
* **Student Name:** HIINE MOKGADI PRUDENCE
* **Student Number:** ST10517712
* **Module Code:** WEDE5020 (Web Development) | Part 3: Enhancing Functionality and SEO
* **Institution:** The Independent Institute of Education (IIE) Rosebank College

---

## Project Overview
A fully responsive, semantic 5-page web application developed for the **Sephaphoshe Old Age & Day Care Centre** located in Ga-Mothapo, Limpopo, South Africa (NPO Reg: 098-244). The project is optimized to attract corporate social investment (CSI), government grants, water engineers, and community volunteers to assist with infrastructural rebuilding.

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

### Navigation Structure
```text
Home
├── About Us
├── Services
├── Gallery
└── Contact Us
    └── Enquiry Form
```

---

## Deployment Instructions
1. **Hosting Platform:** Static cloud hosting via **GitHub Pages** or **Netlify**.
2. **Build Configuration:** Point the publishing directory to the root or `Sephapose-website` folder.
3. **Verification:** Ensure all internal relative links (`index.html`, `about.html`, `services.html`, `enquiry.html`, `contact.html`), stylesheet (`css/style.css`), script (`js/script.js`), and images (`/images/`) resolve correctly.

---

## Submission Details

### Part 1 Details
* **Core Repository Setup:** Established consistent root and subfolder structures (`/css`, `/js`, and `/images`).
* **Semantic File Allocation:** Developed the foundational structural web pages: `index.html`, `about.html`, `services.html`, `enquiry.html`, and `contact.html`.
* **Global Navigation:** Integrated a persistent, functional menu navigation schema linking all pages uniformly.
* **External Styling Integration:** Configured and linked a clean external stylesheet template (`/css/style.css`) across all files.

### Part 2 Details
* **CSS Component Styling:** Applied comprehensive structural layouts using advanced CSS Grid and Flexbox mechanics across all 5 pages.
* **Responsive Web Design (RWD):** Implemented CSS Media Queries to ensure fluid, seamless screen adaptability across mobile, tablet, and desktop viewports.
* **Typography & Visual Hierarchy:** Integrated clean typography scales, coordinated NPO color palettes, and styled accessible user navigation systems.
* **Form & UI Component Styling:** Formatted input fields, compliance portal download buttons, and interactive layout elements for enhanced user experiences.

### Part 3 Details
* **Advanced JS Programming:** Programmed a modular script ecosystem (`/js/script.js`) handling custom UI patterns without third-party reliance.
* **Interactive Mapping & Lightbox:** Built an interactive Map API component showing location coordinates alongside an adaptive modal gallery lightbox overlay.
* **Form Validation & AJAX:** Engineered real-time client-side error notifications on inputs, character bounds handling, and custom AJAX `fetch` asynchronous submissions.
* **SEO Engine Optimization:** Implemented meta keywords, page-specific structural headers, descriptive file conventions, a robust `robots.txt` configuration, and an XML indexing map schema.

---

## Changelog

### [Part 1 Submission] - 2026-07-30
* **Added:** Created core repository folder structure with separate `/css`, `/js`, and `/images` subfolders.
* **Added:** Developed 5 required semantic web files: `index.html`, `about.html`, `services.html`, `enquiry.html`, and `contact.html`.
* **Added:** Implemented global navigation menu linking all 5 local files seamlessly.
* **Added:** Configured a blank external stylesheet layout (`/css/style.css`) and linked it across all pages.
* **Added:** Drafted the comprehensive Project Proposal document outlining target audiences, aesthetics, and infrastructural goals.

### [Part 2 Submission] - 2026-09-15
* **Added:** Created a fully customized external stylesheet (`/css/style.css`) with global reset rules and root variable tokens.
* **Added:** Implemented a mobile-first responsive layout structure using CSS Media Queries.
* **Added:** Transformed the global navigation menu into a fully responsive navigation bar.
* **Added:** Designed a responsive 4-pillar grid layout for the `services.html` page using CSS Grid.
* **Styled:** Applied complete typographic styling, form field layouts, and interactive hover states for all functional buttons.

### [Part 3 Submission] - 2026-10-27
* **Added:** Integrated Leaflet JavaScript API to build an interactive map layout component inside `contact.html`.
* **Added:** Developed a custom, native JavaScript image lightbox component for the responsive gallery.
* **Added:** Coded custom interactive content tabs on `about.html` and a search filter toggle feature on `services.html`.
* **Added:** Implemented extensive client-side form validation mechanisms with descriptive live error layouts for both `enquiry.html` and `contact.html`.
* **Added:** Configured an asynchronous AJAX form processing module utilizing JavaScript `fetch` API methods.
* **Added:** Set up complete On-Page and Technical SEO features including optimized `<title>` configurations, descriptive `<meta>` elements, `robots.txt`, and a structural `sitemap.xml` roadmap file.
* **Fixed:** Resolved structural formatting and mobile grid overlapping issues flagged during Part 2 grading reviews.

---

## Timeline and Milestones
* **Milestone 1 (Week 1):** Finalize requirement gathering, structural wireframes, asset collection, and historical copy refinement.
* **Milestone 2 (Week 2):** Develop semantic HTML5 structure for all core pages and implement responsive CSS3 layouts.
* **Milestone 3 (Week 3):** Integrate JavaScript functionality, build the portal file repository, and run local cross-browser accessibility testing.
* **Milestone 4 (Week 4):** Push final production build to live cloud hosting, execute performance optimization checks, and submit POE assignment.

---

## Reference List
## Reference List
- Department of Social Development, 2026. *National Register of Non-Profit Organisations: Sephaphoshe Old Age & Day Care Centre (Reg No: 098-244)*. Pretoria: Department of Social Development.
- Hollywoodbets Foundation, 2024. *Hollywoodbets Foundation empowers Sephaphoshe Old Age Centre in Limpopo*. Available at: <https://hollywoodfoundation.co.za> [Accessed 11 August 2026].
- Hollywoodbets Foundation, 2026. *Corporate Social Investment Impact Reports: Community Facility Infrastructure Development Grants*. Durban: Hollywoodbets.
- Leaflet, 2026. *Leaflet JS Open-Source Interactive Map Library Documentation*. Available at: [leafletjs.com](https://leafletjs.com) [Accessed 27 October 2026].
- Limpopo Department of Social Development, 2026. *Registered Service Centres for Older Persons: Capricorn District*. Polokwane: Limpopo Provincial Government.
- The Independent Institute of Education, 2026. *Web Development (WEDE5020) Portfolio of Evidence Manual*. Sandton: IIE.
- W3Schools, 2026. *How To Create an AJAX Form Submission Guide*. Available at: [w3schools.com](https://w3schools.com) [Accessed 27 October 2026].
- World Wide Web Consortium, 2023. *Web Content Accessibility Guidelines (WCAG) 2.2*. Available at: <https://www.w3.org> [Accessed 11 August 2026].
