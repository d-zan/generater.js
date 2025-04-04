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

//Domain
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
export type Domain = `${DomainOptions['start']}${Domains}`;
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

export interface EmailOptions {
  prefix: string;
  domains: EmailDomain;
  addNumber?: boolean | false;
  randomizePrefix?: boolean | false;
  prefixOptions?: string[];
  numberRange?: { min: 1; max: 99 };
}

export interface OTPOptions {
  length: number;
  //A-Z
  includeLetters?: boolean;
  //-*/)(&^%$#@)
  includeSpecialChars?: boolean;
}

export interface OTP {
  otp: string;
  otpId: string;
}

export interface OTPVerificationResult {
  valid: boolean;
  message: string;
  remainingTime: number;
}



export type MathPower = "LOW" |"MEDIUM" | "HIGH";
export type MathSign = "-" |"+" | "*" | "/" | undefined;
export interface Math {
  string:string;
  number:number;
}
/**
* 5 [/*-+] 5 = 1/25/0/10
*/
/**
* 55 [/*-+] 55
*/
 /**
* 5555 [/*-+] 5555
*/
