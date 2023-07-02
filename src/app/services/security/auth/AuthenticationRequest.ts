export interface AuthenticationRequest{
  loging?: string;
  password?: string;
  autType?:string;
  isRefreshToken?:boolean;
  refreshToken?: string;
}
