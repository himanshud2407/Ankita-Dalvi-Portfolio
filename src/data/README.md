  # Portfolio Data Guide

This folder contains all the data displayed across your portfolio website. You can easily add, edit, or delete items here without touching any React or CSS code.

## Files Overview

### 1. `projects.js` ([projects.js](file:///c:/Users/Lenovo/Desktop/Ankita-Dalvi-Portfolio/src/data/projects.js))
- **Add a project**: Copy and paste an existing project object into `projectsData`.
- **Fields**:
  - `id`: Unique number
  - `title`: Name of project
  - `category`: Category matching one in `projectCategories` (e.g. `'Power BI'`, `'Spotfire'`, `'Excel'`)
  - `description`: Summary of what you built
  - `image`: Unsplash or local image URL
  - `link`: Live demo URL
  - `github`: GitHub repository link
  - `tags`: Array of tool tags, e.g. `['Power BI', 'DAX']`
  - `featured`: `true` for the main hero card, `false` for grid items

### 2. `skills.jsx` ([skills.jsx](file:///c:/Users/Lenovo/Desktop/Ankita-Dalvi-Portfolio/src/data/skills.jsx))
- **Add a skill with a URL link (Easiest & Recommended)**:
  ```javascript
  {
    name: 'New Skill',
    category: 'BI & Visualization',
    subtitle: 'Tool Subtitle',
    bgColor: 'bg-[#F2C811]', // Tailwind or hex background
    textColor: 'text-black', // or text-white
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/<tool>/<tool>-original.svg'
  }
  ```
- **Where to get free direct icon URLs**:
  - **Devicon CDN**: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/<tool>/<tool>-original.svg`
  - **SimpleIcons CDN**: `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/<tool>.svg`
  - **SVGRepo / Wikimedia**: Any direct `.svg` or `.png` link
  - **Local file**: Put an image in `public/icons/` and use `iconUrl: '/icons/my-icon.svg'`
- **React Icon / Inline SVG**: You can still provide JSX in `icon` as a fallback if `iconUrl` is not provided.
- **Certifications**: Add or edit certifications in `certificationsData`.
- **Languages & Availability**: Update `languagesData`.

### 3. `experience.js` ([experience.js](file:///c:/Users/Lenovo/Desktop/Ankita-Dalvi-Portfolio/src/data/experience.js))
- **Add work experience**: Add an object to `experiencesData` with `role`, `company`, `period`, and bullet `highlights`.
- **Add education**: Add an entry to `educationData` with `degree`, `institution`, `period`, and `grade`.
