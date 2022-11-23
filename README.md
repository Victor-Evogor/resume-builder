# Description
A nodejs api application that creates resumes from html templates and response body

# Start

## windows

```
npm run dev
```

or

```
npm run start
```

## linux

```
tsc --project . --watch
```
then in a new terminal
```
nodemon ./build/index.ts
```

# How to add Templates

- Create a html page for only the `A4` size in `build/templates/tempx/tempx.hbs`
- Add the schema validation with joi to `src/schemas/tempx.ts`.
- import it to `src/index.ts` and add it to the `temps` variable
- Then later add the component to it in the angular code
