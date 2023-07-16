select count("countryId") as "totalCities",
       "countries"."name" as "country"
  from "cities"
  join "countries" using ("countryId")
  group by "countryId";
