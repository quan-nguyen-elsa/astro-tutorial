export interface Locale {
  code: string;
  name: string;
}

export interface LocaleResponse {
  i18NLocales: Locale[];
}
