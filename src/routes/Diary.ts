import { BASE_URL, USER_DIARY, USER_DIARY_ASSIGNMENT } from "../rest/endpoints";
import { RestManager } from "../rest/RESTManager";

const manager = new RestManager(BASE_URL())

export async function SetAssignmentStates(
  id: number,
  studentId: string,
  schoolId: string,
  completed: boolean,
  remark: string,
  accessToken: string
) {
  const response = await manager.patch(
    USER_DIARY_ASSIGNMENT(schoolId, studentId, String(id)),
    { "homeworkDone": completed, "remark": remark },
    undefined,
    {
      headers: {
        "Authorization": "Bearer " + accessToken
      }
    }
  )

}