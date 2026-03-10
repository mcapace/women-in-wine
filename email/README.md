# Women in Wine E-Blast (Braze)

HTML email to promote the Women in Wine program and drive to the landing page. Uses the same creative and copy as the site.

## Braze setup

### 1. Merge fields / placeholders

Replace these in Braze (or in the HTML before import):

| Placeholder | Description | Example |
|-------------|-------------|---------|
| `{{landing_page_url}}` | Link to the Women in Wine landing page | `https://your-deployed-url.vercel.app` or Braze click tracking URL |
| `{{image_base}}` | Base URL for all images (Braze Media Library or CDN) | `https://your-braze-media.com/women-in-wine` |
| `{{current_year}}` | Copyright year | `2026` |

In Braze you can use **Connected Content** or **Liquid** for dynamic values, e.g. `{{current_year}}` → `{% assign year = 'now' \| date: '%Y' %}{{ year }}`, and set `landing_page_url` in your campaign.

### 2. Images to upload

Upload these from your project to Braze Media Library (or host elsewhere and set `image_base`):

- **Cline logo:** `Cline Full Logo - Color-01 (2).png` → host as e.g. `Cline-Full-Logo-Color.png` (URL-safe name)
- **O'Neill logo:** `Oneill_Logo_hor_RGB_lrg.png`
- **Wine Spectator footer logo (white):** `WSlogoWhite-stroke (2) (4) (6).png` → host as e.g. `WSlogoWhite-stroke.png`

Optional for hero: `AdobeStock_451032833.jpeg` — currently the hero block uses a dark background with type only; uncomment the hero image line in the HTML if you add it.

### 3. Image URLs in the HTML

After upload, either:

- Set **image_base** in Braze to your folder URL and keep paths like `{{image_base}}/Oneill_Logo_hor_RGB_lrg.png`, or  
- Replace every `{{image_base}}/...` with the full Braze image URLs (e.g. from Media Library “Copy URL”).

### 4. Preheader

The preheader is in a hidden div at the top; some ESPs use the first visible text. Adjust the preheader text in the HTML if you want a different inbox preview.

### 5. Testing

- Send a test to yourself and check Gmail, Outlook, Apple Mail, and a mobile client.
- Confirm all links go to the correct landing page and that images load (no broken `{{image_base}}`).

## File

- `women-in-wine-eblast.html` — Single HTML file, inline styles, table-based layout for email client compatibility.
