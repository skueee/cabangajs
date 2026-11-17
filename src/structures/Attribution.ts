/**
 * Represents a diary entry. It can include an homework and a lesson subject if the teacher added them.
 */
export class Attribution {
  /**
   *
   * @param id - Unique ID for the entry
   * @param date - Data of the entry
   * @param done - If the entry is set as done
   * @param hour - The hour of the entry
   * @param lessonId - The ID of the lesson (attributionId in the cabanga api response)
   * @param lessonName - The name of the lesson
   * @param lessonSubject - Optional; the subject seen at the lesson
   * @param homework - Optional; the homework to do for this lesson
   * @param remark - Optional; a remark added by the user
   * @param studentId - Student identifier
   * @param schoolId - School identifier
   * @param accessToken - Token to access content
   */

  constructor(
    public id: number,
    public date: string,
    public done: boolean,
    public hour: string,
    public lessonId: number,
    public lessonName: string,
    public lessonSubject: string | null = null,
    public homework: string | null = null,
    public remark: string | null = null,
    public studentId: string,
    public schoolId: string,
    public accessToken: string
  ) { }

  /**
   *
   * @param completed - Optional; updates assignment completion state to the value specified, or let it as it is
   * @param remark - Optional; updates assignment remark to the value specified, or let it as it is
   */
  async setData(completed?: boolean, remark?: string, accessToken: string) {
    const completedState = completed ?? this.done
    const remarkState = remark ?? this.remark ?? ""
    const body = {"homeworkDone":completedState,"remark":remarkState}
  }
}
