import { AuthRefresh } from "../routes/Auth"
import { GetAssignmentsList } from "../routes/Diary"
import { Attribution } from "./Attribution"

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
      this.accessTokenExpiration = Date.now() + response.expires_in * 1000
      return true
    }
    return false
  }

  // Diary related
  async getAssignments(from: string, to: string) {
    await this.refreshAccessToken()
    return await GetAssignmentsList(this.schoolId, this.userId, this.accessToken, from, to)
  }

  async setAssignmentData(attribution: Attribution, completed: boolean = undefined, remark: string = undefined) {
    await this.refreshAccessToken()
    attribution.setData(completed, remark, this.accessToken)
  }
}
