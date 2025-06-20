
// --- Configuration Area ---
// Define the special day for the door to open.
// See README.md for detailed instructions if needed.

// TARGET_MONTH: 0-indexed (0 for January, 1 for February, ..., 11 for December).
export const TARGET_MONTH: number = 11; // Example: December (Month 12)

// TARGET_DAY: 1-indexed (1 for the 1st, 2 for the 2nd, ..., up to 31).
export const TARGET_DAY: number = 25;   // Example: 25th day of the month

// --- Content URLs ---

// URL for the closed door image.
// This image is shown on all days *except* the special day.
// Recommended: Host your image online and use its direct link.
// Example placeholder:
export const CLOSED_DOOR_IMAGE_URL: string = 'https://picsum.photos/seed/ancientdoorportal/800/600'; 
// Example (replace with your own):
// export const CLOSED_DOOR_IMAGE_URL: string = 'https://your-domain.com/path/to/your-closed-door.jpg';

// URL for the video to be played on the special day.
// This should be a direct link to a video file (e.g., .mp4, .webm).
// Recommended: Host your video online and use its direct link.
// IMPORTANT: Replace 'YOUR_VIDEO_URL_HERE.mp4' with your actual video URL.
export const VIDEO_URL: string = 'YOUR_VIDEO_URL_HERE.mp4';
// Example (replace with your own):
// export const VIDEO_URL: string = 'https://your-domain.com/path/to/your-special-video.mp4';
// Note: Autoplay is enabled but muted by default due to browser restrictions. Users can unmute via controls.
