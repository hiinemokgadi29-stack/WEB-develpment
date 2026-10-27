<img width="1600" height="1200" alt="image" src="https://github.com/user-attachments/assets/ca88f546-a49d-4c8f-9cf2-376c6a493a48" /># Sephaphoshe NPO Web Development Project

## Student Information
* **Student Name:** HIINE MOKGADI PRUDENCE
* **Student Number:** ST10517712
* **Module Code:** WEDE5020 (Web Development)
* **Institution:** The Independent Institute of Education (IIE) Rosebank College

---

## Project Description

A 5-page semantic HTML website developed for the **Sephaphoshe Old Age & Day Care Centre** to attract corporate sponsors, water engineers, and community volunteers to assist with infrastructural rebuilding efforts in Ga-Mothapo.

---

## Website Goals and Objectives

### Primary Web Goals
1. **Secure Infrastructure Funding**
   * **Objective:** Attract corporate social investment (CSI) initiatives and government grant allocations.
   * **Focus Areas:** Raise development capital for the borehole water station, secure boundary perimeter fencing, separated residential sleeping quarters, and the early childhood daycare playground.
2. **Streamline Funder Compliance (Funder Submission Portal)**
   * **Objective:** Build immediate institutional trust with corporate donors (such as the Hollywoodbets Foundation) and government departments.
   * **Feature:** A secure, easily navigable compliance document repository.
   * **Content:** Direct access to NPO registration certificates, tax clearance status, audited financial statements, and Section 18A tax-deductible receipt workflows.

---

## Key Features and Functionality

### 1. Homepage (`index.html`)
* **Hero Section:** High-impact call-to-action banner detailing the NPO’s core mission statement grounded within the Ga-Mothapo community.
* **NPO Verification Badge:** A high-visibility banner highlighting active registration status verified by the Department of Social Development (**NPO Reg: 098-244**).
* **Urgent Needs Ticker:** A dynamic layout banner cycling through active infrastructure deficits (e.g., *Borehole Station Repairs Needed*, *Secure Perimeter Fencing Required*).
* **Desired Functionality:** Dual landing-gate buttons (*"Enter Funder Portal"* and *"Get Involved Locally"*) that dynamically route user traffic to target sub-pages based on user intent.

### 2. About Us (`about.html`)
* **Historical Timeline:** A structured layout tracking the center's progression from a community day facility to a comprehensive dual-care hub.
* **Corporate Milestone Showcase:** A dedicated space highlighting past corporate social investments, specifically focusing on the milestone partnership with the **Hollywoodbets Foundation**.
* **Functionality:** Responsive expandable JavaScript content tabs that let readers view specific legacy milestones cleanly without cluttering the page view.

### 3. Services Layout (`services.html`)
* **4-Pillar Operational Grid:** Program descriptions mapping out:
  * Elderly Residential Care
  * Early Childhood Development (ECD) Daycare
  * The Women's Sewing Club
  * Youth Literacy & Sports Hubs
* **Functionality:** A script-driven JavaScript filter system that lets users sort and isolate services based on target demographic (*Seniors*, *Children*, *Volunteers*).

### 4. Enquiry & Compliance Portal (`enquiry.html`)
* **Compliance Document Vault:** Secure links enabling corporate social responsibility (CSR) officers to download necessary organizational verification files.
* **Funder Submission Form:** A dedicated interface allowing corporate donors to register grant applications or submit compliance request reviews.
* **Functionality:** Robust JavaScript client-side validation layers that cross-verify input data length and email patterns before processing. Submits asynchronously using AJAX to ensure a seamless interface experience without page reloads.

### 5. Contact & Location (`contact.html`)
* **Contact Details:** Official communication lines, email channels, and physical operation addresses.
* **Interactive Map Placement:** Leaflet API mapping integration providing a functional, interactive location pointer showing the facility's location within Limpopo for volunteers and engineers.
* **General Contact Form:** Built-in message field allowing open text input with strict live field validation and error message formatting.

### 6. Interactive Gallery (`gallery.html`)
* **Image Showcase:** Displays visual highlights of the Ga-Mothapo facility operations, community programs, and infrastructure challenges.
* **Functionality:** Native JavaScript Lightbox implementation allowing images to expand smoothly into large overlay windows upon mouse clicks.

---

## Website Site Map

```text
                         ┌──────────────┐
                         │     HOME     │
                         └──────┬───────┘
                                │
             ┌──────────────────┼──────────────────┐
             │                  │                  │
             ▼                  ▼                  ▼
      ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
      │  ABOUT US   │   │   SERVICES  │   │  CONTACT US │
      └─────────────┘   └─────────────┘   └──────┬──────┘
                                                  │
                                                  ▼
                                           ┌─────────────┐
                                           │  ENQUIRY    │
                                           │    FORM     │
                                           └─────────────┘
                               
                         ┌─────────────┐
                         │   GALLERY   │
                         └─────────────┘
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

* Department of Social Development, 2026. *National Register of Non-Profit Organisations: Sephaphoshe Old Age & Day Care Centre (Reg No: 098-244)*. Pretoria: Department of Social Development.
* Hollywoodbets Foundation, 2026. *Corporate Social Investment Impact Reports: Community Facility Infrastructure Development Grants*. Durban: Hollywoodbets.
* Leaflet, 2026. *Leaflet JS Open-Source Interactive Map Library Documentation*. Available at: [leafletjs.com](https://leafletjs.com) [Accessed 27 October 2026].
* W3Schools, 2026. *How To Create an AJAX Form Submission Guide*. Available at: [w3schools.com](https://w3schools.com) [Accessed 27 October 2026].
