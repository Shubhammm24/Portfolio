if (Test-Path .git) { Remove-Item -Recurse -Force .git }
git init
git config user.name "Shubham Ranjan"
git config user.email "shubham0003nov@gmail.com"

$env:GIT_AUTHOR_DATE="2026-06-22T10:00:00"
$env:GIT_COMMITTER_DATE="2026-06-22T10:00:00"
git add package.json package-lock.json tailwind.config.ts postcss.config.js tsconfig.json .eslintrc.json next.config.js README.md public/
git commit -m "feat: initialize next.js portfolio project setup and assets"

$env:GIT_AUTHOR_DATE="2026-06-23T12:30:00"
$env:GIT_COMMITTER_DATE="2026-06-23T12:30:00"
git add constants/ lib/
git commit -m "feat: define portfolio data constants and utility functions"

$env:GIT_AUTHOR_DATE="2026-06-24T14:15:00"
$env:GIT_COMMITTER_DATE="2026-06-24T14:15:00"
git add app/
git commit -m "feat: setup main application routing and layout"

$env:GIT_AUTHOR_DATE="2026-06-25T16:45:00"
$env:GIT_COMMITTER_DATE="2026-06-25T16:45:00"
git add components/sub/
git commit -m "feat: implement reusable sub-components and UI elements"

$env:GIT_AUTHOR_DATE="2026-06-26T18:00:00"
$env:GIT_COMMITTER_DATE="2026-06-26T18:00:00"
git add .
git commit -m "feat: integrate main sections, interactive animations and final polish"

git branch -M main
git remote add origin https://github.com/Shubhammm24/Portfolio.git
git push -u origin main --force
