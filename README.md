# Sephaphoshe NPO Web Development Project

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
* **Desired Functionality:** Responsive expandable content tabs that let readers view specific legacy milestones cleanly without cluttering the page view.

### 3. Services Layout (`services.html`)
* **4-Pillar Operational Grid:** Program descriptions mapping out:
  * Elderly Residential Care
  * Early Childhood Development (ECD) Daycare
  * The Women's Sewing Club
  * Youth Literacy & Sports Hubs
* **Desired Functionality:** A script-driven filter system that lets users sort and isolate services based on target demographic (*Seniors*, *Children*, *Volunteers*).

### 4. Enquiry & Compliance Portal (`enquiry.html`)
* **Compliance Document Vault:** Secure links enabling corporate social responsibility (CSR) officers to download necessary organizational verification files.
* **Funder Submission Form:** A dedicated interface allowing corporate donors to register grant applications or submit compliance request reviews.
* **Desired Functionality:** JavaScript validation layers that cross-verify document criteria before processing form fields and securely routing user uploads.

### 5. Contact & Location (`contact.html`)
* **Contact Details:** Official communication lines, email channels, and physical operation addresses.
* **Interactive Map Placement:** Clean integration showing the facility's location within Limpopo for volunteers and engineers.

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

---

## Timeline and Milestones
* **Milestone 1 (Week 1):** Finalize requirement gathering, structural wireframes, asset collection, and historical copy refinement.
* **Milestone 2 (Week 2):** Develop semantic HTML5 structure for all core pages and implement responsive CSS3 layouts.
* **Milestone 3 (Week 3):** Integrate JavaScript functionality, build the portal file repository, and run local cross-browser accessibility testing.
* **Milestone 4 (Week 4):** Push final production build to live cloud hosting, execute performance optimization checks, and submit POE assignment.

---

## Reference List

Department of Social Development, 2026. *National Register of Non-Profit Organisations: Sephaphoshe Old Age & Day Care Centre (Reg No: 098-244)*. Pretoria: Department of Social Development.

Hollywoodbets Foundation, 2024. *Hollywoodbets Foundation empowers Sephaphoshe Old Age Centre in Limpopo*. Available at: <https://hollywoodfoundation.co.za> [Accessed 11 August 2026].

Limpopo Department of Social Development, 2026. *Registered Service Centres for Older Persons: Capricorn District*. Polokwane: Limpopo Provincial Government.

The Independent Institute of Education, 2026. *Web Development (WEDE5020) Portfolio of Evidence Manual*. Sandton: IIE.

World Wide Web Consortium, 2023. *Web Content Accessibility Guidelines (WCAG) 2.2*. Available at: <https://w3.org> [Accessed 11 August 2026].

### In-Text Citation Quick Reference
* **For History/NPO Registration:** ...as stated by the Department of Social Development (2026).
* **For Corporate Funding:** ...infrastructure support was provided by the Hollywoodbets Foundation (2024).
* **For Code/Design Standards:** ...adhering directly to global accessibility metrics (World Wide Web Consortium, 2023).
