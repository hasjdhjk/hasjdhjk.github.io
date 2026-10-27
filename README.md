# Zihao Tan — portfolio website

This package is ready for GitHub Pages. It includes the complete static website, project pages, images, original project figures, gameplay videos and editable source. It needs no server or package installation.

## Publish on your own GitHub account

1. Sign into your own GitHub account.
2. Create a new public repository named `YOUR-USERNAME.github.io`, replacing `YOUR-USERNAME` with your actual GitHub username. If a repository with that name already exists, preserve its contents and review before replacing anything.
3. Extract this ZIP. Upload the files and folders INSIDE the extracted package to the repository, preserving the `assets`, `media` and `licenses` folders. Upload the extracted files, not the ZIP and not an extra enclosing folder. `index.html` must be at the repository root.
4. Commit the files to the `main` branch.
5. Open Settings → Pages. Set Source to “Deploy from a branch”, branch to `main` and folder to `/ (root)`, then save.
6. Wait for the Pages deployment to finish and use the Visit site link shown in Pages settings. GitHub says publication may take up to 10 minutes. Test the site while signed out before adding its address to a CV or QR code.

Official instructions:
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Where the code is

- `build.py`: authored content, page templates and project descriptions. Running `python3 build.py` regenerates the HTML pages at the repository root.
- `index.html`: generated homepage with the project gallery and Unity games.
- `intracortical-decoding.html`, `auditory-cortex.html`, `xr-teleoperation.html`, `gestura.html`, `impedimetric-respiration.html`, `patient-monitoring.html`: generated project detail pages.
- `style.css`: colours, typography, spacing and responsive layouts.
- `app.js`: project filters, figure expansion and video playback behaviour.
- `assets/`: project images, figures and favicon.
- `media/`: browser-compatible videos, poster frames and game-making photographs.
- `licenses/`: retained notices for the upstream Unitree reference image.
- `.nojekyll`: tells GitHub Pages to serve these static files directly.

Edit `build.py` for text changes and rerun it before uploading. Editing generated HTML directly works, but those changes will be overwritten next time `build.py` runs. CSS and JavaScript edits are made directly in `style.css` and `app.js`.

For a local preview, run `python3 -m http.server 8000` from this directory and open http://localhost:8000.

## Content notes

The full course reports, CV, raw neural recordings and imported project source archives are not included. Figures retain their original source captions. Research results retain the methodological qualifications shown on the site. The XR project uses your physical-robot configuration clip; its detail page also credits an upstream Unitree simulation screenshot. Patient-monitoring views use demonstration accounts and simulated readings.

This is a static export. It does not rely on ChatGPT Sites to run. A GitHub Pages address depends on the GitHub account, repository, Pages settings and continued availability of GitHub's service; no hosting service guarantees permanent availability.


The impedimetric respiration project uses a supplied laboratory schematic, a photograph of my completed stripboard and a simulator output trace. The final test used a breathing simulator set to 30 breaths per minute. The previous electronic-stethoscope URL redirects to the replacement project.
