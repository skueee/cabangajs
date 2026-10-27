import { RestManager } from "../rest/RESTManager";
import { BASE_URL } from "../rest/endpoints";
import { extractBaseUrl } from "../utils/URL";
import { TokenResponse } from "../types/Auth";

export async function AuthRefresh(url: string, refreshToken: string) {
  const [base, path] = extractBaseUrl(url);
  const manager = new RestManager(base)
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: "cabanga-frontend"
  })
  const response = manager.post<TokenResponse>(path, body)
  return response
}
