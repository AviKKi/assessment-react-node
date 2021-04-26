### Run Production
`$ docker-compose up`

Note - docker has been only setup for production enviroment, you won't see live updates on code change

Access the frontend at http://localhost:3600

### Design Choices for the Project
#### Backend
- Everything can be done in one file, but I still organized everything nicely.
- All the data from api stored in folder /backend/src/data
- Single file is used for controllers and routers, but in a larger project group controllers and routers according to domain knowledge.
#### Frontend
- CRA was used as a quick boilerplate, since we don't need SEO or I would have gone with gatsby or nextjs
- I reused one of my [old project](https://www.instagram.com/p/CA2qXnuJ5Ud/) as a loader
- No global store is used since we don't need it :P (I usually go with mobx state tree)
- Good consideration has been given to the design of the app, not very well tested all devices but should be responsive.
