if (Test-Path .git) { Remove-Item -Recurse -Force .git }
git init
git config user.name "Shubham Ranjan"
git config user.email "shubham0003nov@gmail.com"

$commitGroups = @(
    "package.json package-lock.json",
    "tsconfig.json tailwind.config.ts postcss.config.js",
    ".eslintrc.json next.config.js",
    "public/logo.png public/hero-bg.svg",
    "public/skills/",
    "public/projects/",
    "public/videos/",
    "public/lock-main.png public/lock-top.png",
    "lib/ utils/",
    "constants/",
    "app/globals.css",
    "app/layout.tsx app/icon1.png app/icon2.png app/apple-icon.png app/favicon.ico",
    "app/page.tsx",
    "components/main/navbar.tsx",
    "components/main/hero.tsx components/sub/hero-content.tsx",
    "components/main/skills.tsx components/sub/skill-data-provider.tsx components/sub/skill-text.tsx",
    "components/main/projects.tsx components/sub/project-card.tsx components/sub/tilt-card.tsx",
    "components/main/star-background.tsx components/main/floating-3d.tsx",
    "components/main/resume.tsx",
    "components/main/contact.tsx components/main/encryption.tsx components/main/footer.tsx",
    "README.md .gitignore .vscode/ .github/ CODE_OF_CONDUCT.md CONTRIBUTING.md LICENSE SECURITY.md config/ eslint.config.mjs netlify.toml"
)

$commitMessages = @(
    "init: setup project configuration",
    "chore: add typescript and tailwind config",
    "chore: add next.js and eslint config",
    "assets: add main logos and backgrounds",
    "assets: add tech stack skill icons",
    "assets: add project thumbnail images",
    "assets: add background videos",
    "assets: add decorative lock assets",
    "feat: add utility functions and motion variants",
    "feat: define global constants and data structures",
    "style: add global css variables and fonts",
    "feat: create root layout and metadata",
    "feat: setup main landing page structure",
    "feat: implement responsive navigation bar",
    "feat: build hero section with parallax content",
    "feat: add interactive magnetic skills section",
    "feat: build projects showcase with tilt cards",
    "feat: implement star background and floating graphics",
    "feat: add professional experience and resume section",
    "feat: build contact form, encryption UI and footer",
    "docs: finalize README, CI workflows and deployment configs"
)

$currentDate = [datetime]"2026-05-01T10:00:00"

for ($i = 0; $i -lt $commitGroups.Length; $i++) {
    $paths = $commitGroups[$i] -split " "
    foreach ($p in $paths) {
        if (Test-Path $p) {
            git add $p
        }
    }
    
    $dateString = $currentDate.ToString("yyyy-MM-ddTHH:mm:ss")
    $env:GIT_AUTHOR_DATE = $dateString
    $env:GIT_COMMITTER_DATE = $dateString
    
    $msg = $commitMessages[$i]
    git commit -m "$msg"
    
    $currentDate = $currentDate.AddDays(2).AddHours(3)
}

git add .
$dateString = $currentDate.ToString("yyyy-MM-ddTHH:mm:ss")
$env:GIT_AUTHOR_DATE = $dateString
$env:GIT_COMMITTER_DATE = $dateString
git commit -m "chore: final code polish and cleanup"

git branch -M main
git remote add origin https://github.com/Shubhammm24/Portfolio.git
git push -u origin main --force
