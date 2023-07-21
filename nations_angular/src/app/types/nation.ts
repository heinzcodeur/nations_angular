export class Nation {
    name: {
      common: string,
      official: string
    };
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    continents: string;
    altSpellings: string;
    region: string;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    // currencies: Currency[];
    // languages: Language[];
    translations: {
      fra: {
        common: string,
        official: string
  
      }
    };
    flags: {
      png: string;
      svg: string;
      // Autres propriétés de l'objet flags, le cas échéant
    };
    // regionalBlocs: RegionalBloc[];
    cioc: string;
  }