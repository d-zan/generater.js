export interface GeneraterKeyOptions {
  bigWords?: boolean;
  smallWords?: boolean;
  removeNumbers?: boolean;

  split?: {
    split: boolean;
    splitLength: number;
    inSpace: string;
  };
  startWith?: {
    startWith: boolean;
    text: string;
  };
}
///Country Support
/**
 * READ license
 */
export type CountriesSupport =
  | "EGYPT"
  | "KSA"
  | "USA"
  | "UK"
  | "GERMANY"
  | "CANADA"
  | "FRANCE"
  | "UAE"
  | "INDIA"
  | "AUSTRALIA"
  | "JAPAN"
  | "BRAZIL" 
  | "SOUTH AFRICA";

//Domin
export type Domains =
  | ".com"
  | ".net"
  | ".org"
  | ".info"
  | ".biz"
  | ".xyz"
  | ".online"
  | ".site"
  | ".tech"
  | ".store"
  | ".app"
  | ".blog"
  | ".design"
  | ".dev"
  | ".me"
  | ".pro"
  | ".tv"
  | ".name"
  | ".jobs"
  | ".mobi"
  | ".aero"
  | ".asia"
  | ".cat"
  | ".coop"
  | ".museum"
  | ".tel"
  | ".travel"
  | ".int"
  | ".arpa"
  | ".post"
  | ".root"
  | ".bit"
  | ".bazar"
  | ".love"
  | ".news"
  | ".ninja"
  | ".party"
  | ".photo"
  | ".pictures"
  | ".space"
  | ".studio"
  | ".wiki"
  | ".work"
  | ".ws"
  | ".zone"
  | ".cloud"
  | ".finance"
  | ".health"
  | ".ltd"
  | ".limited"
  | ".academy"
  | ".agency"
  | ".company"
  | ".consulting"
  | ".digital"
  | ".engineering"
  | ".financial"
  | ".marketing"
  | ".media"
  | ".solutions"
  | ".systems"
  | ".technology"
  | ".training"
  | ".ventures"
  | ".video"
  | ".website"
  | ".world"
  | ".community"
  | ".events"
  | ".expert"
  | ".family"
  | ".friends"
  | ".group"
  | ".social"
  | ".team"
  | ".today"
  | ".university"
  | ".vote"
  | ".website"
  | ".world"
  | ".zone";
///
export interface DomainOptions {
  end: Domains;
  start: string;
}
export type Domain = `${string}${Domains}`;
export type PasswordPower = "LOW" | "MEDIUM" | "HIGH";

//
export type EmailDomain =
  | "@gmail.com"
  | "@yahoo.com"
  | "@hotmail.com"
  | "@outlook.com"
  | "@live.com"
  | "@icloud.com"
  | "@aol.com"
  | "@mail.com"
  | "@zoho.com"
  | "@gmx.com"
  | "@protonmail.com"
  | "@yandex.com"
  | "@tutanota.com"
  | "@inbox.com"
  | "@fastmail.com"
  | "@hushmail.com"
  | "@me.com"
  | "@msn.com"
  | "@rediffmail.com"
  | "@mail.ru"
  | "@webmail.co.za"
  | "@bluebottle.com"
  | "@mailinator.com"
  | "@temp-mail.org"
  | "@getnada.com"
  | "@10minutemail.com"
  | "@dispostable.com"
  | "@trashmail.com";

export interface OTPOptions {
  length?: number;
  includeLetters?: boolean;
  includeSpecialChars?: boolean;
  expirationTime?: number;

  errorMessages?: {
    invalidLength?: string;
    expiredOTP?: string;
    invalidOTP?: string;
  };
}

export interface OTPResult {
  otp: string;
  otpId: string;
  createdAt: Date;
  expiresAt: Date;
  config: Required<OTPOptions>;
  verify: (inputOTP: string) => {
    isValid: boolean;
    message: string;
  }; 
  getRemainingTime: () => number;
}

export interface OTPVerificationResult {
  valid: boolean;
  message: string;
  remainingTime: number;
}

export interface EmailOptions {
  prefix: string;
  domains: EmailDomain;
  addNumber?: boolean | false;
  randomizePrefix?: boolean | false;
  prefixOptions?: string[];
  numberRange?: { min: 1; max: 99 };
}
export type MathPower = "LOW" |"MEDIUM" | "HIGH";
export type MathSign = "-" |"+" | "*" | "/" | undefined;
export interface Math {
  string:string;
  number:number;
}
/**
* 5 [/*-+] 5
*/
/**
* 55 [/*-+] 55
*/
 /**
* 5555 [/*-+] 5555
*/
