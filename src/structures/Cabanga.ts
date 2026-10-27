import { AuthRefresh } from "../routes/Auth"

export class Cabanga {
  constructor(
    public accessToken: string,
    protected accessTokenExpiration: number,
    public refreshToken: string,
    public refreshURL: string,
    public userId: string,
    public schoolId: string
  ) { }

  async refreshAccessToken(): Promise<boolean> {
    if (!this.refreshToken) {
      throw new Error("No refresh token available. Please authenticate again.")
    }
    if (Date.now() >= this.accessTokenExpiration) {
      const response = await AuthRefresh(this.refreshURL, this.refreshToken)
      this.accessToken = response.access_token
      this.refreshToken = response.refresh_token
      this.accessTokenExpiration = Date.now() + response.expires_in
      return true
    }
    return false
  }
}
