# Project Setup

This guide will help you set up the project environment and get started with development.

## Pre-setup

1. Install eslint/prettier/stylelint extensions.
2. In IDE settings set default formatter to prettier.
3. In extension settings for “stylelint” add “sass” and “scss” to validate fields, to see linter warnings and errors in scss.

## Installation

If you're starting a new project, follow these steps to set up Git:

1. Initialize a new Git repository:

    ```bash
    git init
    ```

2. Create and switch to the main branch:

    ```bash
    git checkout -b main
    ```

3. Add all files to the staging area:

    ```bash
    git add .
    ```

4. Commit the changes:

    ```bash
    git commit -m 'Initial commit'
    ```

5. Set the remote origin (replace `<repository_url>` with your repository URL):

    ```bash
    git remote add origin <repository_url>
    ```

6. Push the changes to the main branch:

    ```bash
    git push -u origin main
    ```

7. Create development branch:

    ```bash
    git checkout -b develop
    ```

7. Create development branch:

    ```bash
    git push origin develop
    ```

8. Install project dependencies:

    ```bash
    npm install
    ```

9. Run the prepare script to set up the project:

    ```bash
    npm run prepare
    ```

## Getting Started

1. Start the project:

    ```bash
    npm start
    ```

Now your project is set up and ready for development!

