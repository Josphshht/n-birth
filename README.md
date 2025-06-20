
# The One Day Door - Configuration Guide

Welcome to "The One Day Door"! This application displays a closed door image every day of the year, except for one special day that you configure. On that specific day, the door "opens" to reveal and play a video of your choice.

## Overview

The core idea is to create a sense of anticipation and a unique daily experience that culminates in a special reveal. All visual text and instructions have been removed from the application itself to maintain a mysterious and clean interface. Configuration is handled by:
1.  Placing your image and video files in designated local folders.
2.  Editing the `src/data/constants.ts` file to specify your filenames and the special date.

## Project Structure for Assets

You need to create the following directories at the **root** of your project (if they don't already exist):

```
your-project-root/
├── public/
│   ├── images/   <-- Place your door image here
│   └── videos/   <-- Place your special video here
├── src/
│   ├── components/
│   │   ├── Door.tsx
│   │   └── VideoPlayer.tsx
│   ├── data/
│   │   └── constants.ts  <-- Configure date and filenames here
│   ├── App.tsx
│   └── index.tsx
├── index.html
├── README.md
└── ... (other project files like package.json, tailwind.config.js, etc.)
```

## Configuration Steps

### 1. Prepare Your Assets

*   **Door Image:** Choose an image for the closed door. Common formats are `.jpg`, `.png`, `.gif`, `.webp`.
*   **Special Video:** Prepare the video file to be shown on the special day. Common formats are `.mp4`, `.webm`, `.ogv`.

### 2. Place Your Assets

*   Copy your chosen door image into the `public/images/` directory.
*   Copy your chosen video file into the `public/videos/` directory.

    **Example:**
    If your door image is named `ancient_portal.png`, place it as `public/images/ancient_portal.png`.
    If your video is named `secret_message.mp4`, place it as `public/videos/secret_message.mp4`.

### 3. Configure `src/data/constants.ts`

Open the `src/data/constants.ts` file. You will find sections to define the special day and your asset filenames.

#### a. Setting the Special Day

Modify these constants:

-   `TARGET_MONTH`: This represents the month of the special day. It is **0-indexed**:
    *   `0` = January, `1` = February, ..., `11` = December.
-   `TARGET_DAY`: This represents the day of the month. It is **1-indexed**:
    *   `1` = 1st, `2` = 2nd, ..., up to 31 (ensure validity for the month).

**Example:** For December 25th:
```typescript
export const TARGET_MONTH: number = 11; // 11 for December
export const TARGET_DAY: number = 25;   // 25 for the 25th
```

#### b. Setting Asset Filenames

Update these constants to match the names of the files you placed in `public/images/` and `public/videos/`:

-   `CLOSED_DOOR_IMAGE_FILENAME`: Set this to the exact filename of your door image (including its extension) that you placed in `public/images/`.
-   `VIDEO_FILENAME`: Set this to the exact filename of your video (including its extension) that you placed in `public/videos/`.

**Example:**
If your image is `public/images/ancient_portal.png` and your video is `public/videos/secret_message.mp4`:
```typescript
// Filename for the closed door image located in `public/images/`.
export const CLOSED_DOOR_IMAGE_FILENAME: string = 'ancient_portal.png';

// Filename for the video to be played, located in `public/videos/`.
export const VIDEO_FILENAME: string = 'secret_message.mp4';
```
The application will automatically construct the correct paths (e.g., `/images/ancient_portal.png`) to load these files.

**Default placeholders:**
The project initially points to `default_door.png` and `special_day_video.mp4`. You should replace these with your own files and update the filenames in `constants.ts`.

### 4. How Asset Paths Work

The application constructs URLs like `/images/your_image.jpg` and `/videos/your_video.mp4`. For this to work:
*   Your development server (e.g., when you run `npm start`) must serve the `public` directory at the root. Most modern JavaScript project setups (like those using Vite, or Create React App, or a simple static server for the `public` folder) do this by default.
*   When deploying to a static host (like GitHub Pages, Netlify, Vercel), ensure that the contents of your `public` folder are deployed to the root of your site.

## Running the Application

After configuring `src/data/constants.ts` and placing your assets:
1.  If you haven't already, install project dependencies (e.g., `npm install` or `yarn install`).
2.  Start the development server (e.g., `npm start` or `yarn dev`, depending on your project setup).
3.  Open your browser to the local address provided (usually `http://localhost:3000` or similar).

Test by changing your system's date to the special day to see the video, and to any other day to see the door.

Enjoy your "One Day Door"!
