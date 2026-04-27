# ✍️ How to Add & Edit Documentation
> **Objective:** Learn the standard workflow for creating a new page, using the variable system, and maintaining cross-site compatibility.

The Panther Project documentation is a living resource. To keep the site manageable as we grow, we use a **Single Source of Truth** system. This means instead of typing names like "Module 1.1: FRC Basics" fifty times, we define them once in a variable file and reference them everywhere else.

### Markdown Tutorial Video
[The Only Markdown Crash Course You Will Ever Need](https://www.youtube.com/watch?v=_PPWWRV6gbA&t=60s)

---

## 🚦 Step 1: Create the `.md` File
All of our documentation is written in **Markdown** (files ending in `.md`). 

1. Navigate to the Team 2064 GitHub Repository.
2. Open the `docs/` folder, and click into the specific subfolder (e.g., `fabrication/`).
3. Click **Add file** -> **Create new file**.
4. Name your file in lowercase with hyphens (e.g., `drill-press-guide.md`).

---

## 🔧 Step 2: Define Your Variable (The "Control Panel")
Before writing your page content, you must give your page a unique ID in the variable system. This ensures your page title is consistent across the Sidebar, the Index, and the Page Header.

1. Open `variables.yml` in the root directory.
2. Find the correct Phase or Module section.
3. Add a new unique ID and the title of your page:
   ```yaml
   # Inside variables.yml
   m1_4_14: "1.4.14 - Drill Press Operations"
   ```

---

## 📝 Step 3: Format Your Page with Variables
When you write your page, **do not type the title manually.** Use the variable you just created.

Copy this template into your new `.md` file:

```text
# {{ m1_4_14 }}
> **Objective:** Learn the safe operation and setup of the shop drill press.

This guide covers the basics of...

---

## 🚦 Safety Check
Before touching the {{ m1_4_14 | replace("1.4.14 - ", "") }}, you must have passed your Safety Practical.
```

---

## 🗺️ Step 4: Update the Navigation (`mkdocs.yml`)
To make the page show up in the sidebar, add it to `mkdocs.yml`. **Note:** We do not provide a title here; MkDocs will automatically pull the title from the variable header you wrote in Step 3.

```yaml
      - "Module 1.4: Basic Fabrication":
          - fabrication/fabricationbasic.md
          - fabrication/level2/drill-press.md  # No title needed!
```

---

## 🏗️ Variable Maintenance & Structure
To ensure "Cross-Site Compatibility" (meaning your change doesn't break someone else's page), follow this maintenance structure:

### 1. The Hierarchy of Variables
* **`variables.yml`**: Controls **Content**. (Lesson names, software versions, room numbers).
* **`mkdocs.yml` (Extra Section)**: Controls **Structure**. (Phase titles and Pathway names).
* **`.md` Files**: Use variables for any text that might change next season.

### 2. Step-by-Step Maintenance Workflow
When you need to rename a module or update a version number, follow this "Golden Path":

1.  **Identify the Scope:** Is it a lesson title? Go to `variables.yml`. Is it a major Phase title? Go to `mkdocs.yml`.
2.  **Edit the Variable:** Change the text string inside the quotes. 
    * *Example:* Change `season_year: "2026"` to `"2027"`.
3.  **Check Filters:** If you see `| replace(...)` in the code, ensure the numbers in the filter match the numbers in your variable.
4.  **Verify via Local Build:** If possible, run `mkdocs serve` to ensure no "Brackets" `{{ }}` appear on the live preview. If brackets appear, it means there is a typo in your variable name.

### 3. Rule of Thumb for Compatibility
* **NEVER** change a variable ID (like `m1_1_1`) once it is created. Other pages might be linked to it.
* **ALWAYS** wrap variables in quotes when using them in `.yml` files: `"{{ variable_name }}"`.
* **ONLY** use standard hyphens or underscores in variable names.

---

## 💾 Step 5: Commit Your Changes
1. Click **Commit changes...**
2. Write a message: *"Added 1.4.14 Drill Press guide and updated variables."*
3. Commit to `main`. 

**The site will rebuild in ~60 seconds. Check the sidebar and the page header to ensure the title rendered correctly!**
