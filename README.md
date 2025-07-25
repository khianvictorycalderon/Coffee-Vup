# Coffee Vup
A simple front-end website landing page for a business

## Usage
Just scroll around, much of the content are static for the sake of demo purpose.

## To run this project:
1. Clone this repository `git clone https://github.com/khianvictorycalderon/Coffee-Vup.git`
2. Run `npm install`
3. Run `npm run dev`

## Dependencies & Configuration
The following is a list of installed dependencies and configuration settings used in this project.
You don’t need to install anything manually, as all dependencies are already managed through `package.json`.
This section is provided for reference only, to give you insight into how the project was set up.

## Dependencies
- `npm install tailwindcss@latest @tailwindcss/vite@latest`
- `npm install daisyui@latest`

## Configuration Dependencies
- Update `vite.config.ts`:
  ```bash
  import tailwindcss from '@tailwindcss/vite';

  plugins: [
    tailwindcss()
  ],
  ```
- Update `src/index.css`:
  ```css
  @import "tailwindcss";
  @plugin "daisyui";
  ```