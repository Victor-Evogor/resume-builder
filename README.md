# Description

A nodejs api application that creates resumes/CV from html templates and user data

# Start

```
npm install
tsc --project tsconfig.json
npm run build
```

# How to add Templates

- Add a new template file to `templates/tempx/template.hbs` with the [handlebars](https://handlebars.org) syntax
- Add a new Schema file to `src/schemas/tempx.ts` using [joi](https://joi.org)
- import the schema and add it to the `schema` array in `src/index.ts`
- Create the corresponding view in `views/pages/`
- Add the meta data of the resume to `src/resumeData.json`
- Add a preview thumbnail to `static/`

Make sure all folders created in `templates` are named according to their index. example:
```
temp0/template.hbs
temp1/template.hbs
temp2/template.hbs
.
.
.
tempx/template.hbs
```

and all schema file should be named according to index `temp{index}`

same with all view files
