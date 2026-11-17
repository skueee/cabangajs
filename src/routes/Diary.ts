import { BASE_URL, USER_DIARY, USER_DIARY_ASSIGNMENT } from "../rest/endpoints";
import { RestManager } from "../rest/RESTManager";
import { Attribution } from "../structures/Attribution"

const manager = new RestManager(BASE_URL())

export async function GetAssignmentsList(schoolId: string, studentId: string, accessToken: string, from: string, to: string) {
  const response = await manager.get<any[]>(USER_DIARY(schoolId, studentId), {"from": from, "to": to}, {"Authorization": "bearer " + accessToken})

  const attributions: Attribution[] = response.map((item: any) => new Attribution(
    item.id,
    item.date,
    item.homeworkDone,
    item.hour,
    item.attributionId,
    item.lessonName,
    item.lessonSubject ?? null,
    item.homework ?? null,
    item.remark ?? null,
    studentId,
    schoolId
  ))

  return attributions
}

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
