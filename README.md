# ✍️ How to Add & Edit Documentation
> **Objective:** Learn the standard workflow for creating a new page, formatting it correctly, and adding it to the site's navigation menu.

The Panther Project documentation is a living resource. As our team learns new techniques, we need members to document them! Because our site is built using **MkDocs** and hosted on **GitHub**, adding a new page is a very specific three-step process.

Follow this guide to ensure your new page looks professional and actually shows up on the website.

---

## 🚦 Step 1: Create the `.md` File
All of our documentation is written in **Markdown** (files ending in `.md`). You must create your new file inside the correct folder.

1. Navigate to the Team 2064 GitHub Repository in your web browser.
2. Open the `docs/` folder, and click into the specific subfolder where your page belongs (e.g., `fabrication/` or `engineering/`).
3. Click the **Add file** button in the top right, then select **Create new file**.
4. Name your file in the top text box. 

"Strict Naming Convention"
    Your file name **must** end in `.md`. It should be all lowercase and have **no spaces**. Use hyphens instead of spaces. 
    * ❌ `Bad File Name.md`
    * ✅ `good-file-name.md`

---

## 📝 Step 2: Format Your Page
MkDocs Material requires a specific layout to look good. We always start our pages with a main Heading 1 (`#`), an emoji, and a blockquote (`>`) objective.

Copy the template below and paste it directly into your new file on GitHub:

```text
# 🚀 Your Page Title Here
> **Objective:** Write one sentence explaining what the reader will learn by reading this page.

Write your introduction here. Keep it brief and explain why this skill or concept is important to Team 2064.

---

## 🚦 Step 1: First Main Topic
Here is where you put your actual instructions. You can use **bold text** or *italic text* to emphasize important points.

* Use bullet points for lists.
* They are easy to read.

---

## ✅ Step 2: Next Topic
If you need to show code or a specific file path, use backticks to make it look like `this`.

!!! tip "Helpful Tips"
    You can use callout boxes like this by typing `!!! tip "Title"` and indenting the text below it!
```

---

## 🗺️ Step 3: Add it to the Navigation (`mkdocs.yml`)
**CRITICAL:** Just creating the file is not enough. If you do not tell MkDocs where the file belongs in the menu, *it will not show up on the website!*

1. Go back to the main page of the GitHub repository.
2. Click on the `mkdocs.yml` file to open it.
3. Click the **✏️ Pencil Icon** (Edit) in the top right corner.
4. Scroll down to the `nav:` section. Find the category where your page belongs, and add it using the exact format: `Title of Link: folder/file-name.md`.

**Example of how to add it:**
```yaml
  - "Fabrication Pathways":
      - "Machine Tools":
          - Lathe Operations: fabrication/lathe.md
          - CNC Router: fabrication/cncrouter.md
          - My New Tool Guide: fabrication/my-new-tool.md  # <--- You add this line!
```

"YAML Spacing is Strict!"
    YAML files use spaces, **never tabs**. Make sure your new line lines up perfectly with the ones above it. If it is off by even one space, the website will fail to build.

---

## 💾 Step 4: Commit Your Changes
Once your file is written and your `mkdocs.yml` is updated, you need to save your work.

1. Click the green **Commit changes...** button in the top right.
2. Write a short message explaining what you did (e.g., *"Added guide for the new bandsaw"*).
3. Select **Commit directly to the main branch** (or submit a Pull Request if your subteam requires review).
4. Click **Commit changes**.

Within about 2-3 minutes, GitHub Actions will automatically rebuild the site and your new page will be live!

---

### 🎉 Ready to contribute?
Return to the dashboard to find a pathway to study, or talk to your Subteam Lead about what documentation needs to be written next!

[Return to Home Dashboard](../index.md){ .md-button .md-button--primary }
